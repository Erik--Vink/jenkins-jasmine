import ValidationResult = require("../ValidationResult");
import BaseFieldValidator = require("../fieldValidators/BaseFieldValidator");

/**
 * FormValidator is the abstract class for all formValidators.
 * Every instance of this class needs to implement the coupling of the necessary FieldValidators
 * and optional cross-field validations.
 */
abstract class FormValidator {
    protected fieldValidators: Array<BaseFieldValidator> = [];

    constructor() {
        this.assignFieldValidators();
    }

    protected abstract dataElementName:string;
    /**
     * The implementation of this function should add instances of the necessary FieldValidators
     * to the instance variable array: fieldValidators.
     */
    protected abstract assignFieldValidators();

    /**
     * Get the validationResult for the complete submitted form.
     * This result includes the result of both the FieldValidators and the cross-field validations.
     * @param jsData An object that contains the modelData of the submitted form.
     * @returns {ValidationResult} Returns a ValidationResult which represents the current validation state of the form including the errormessages for each field.
     */
    public getValidationResultForForm(jsData: any): ValidationResult {

        let validationResult = new ValidationResult();
        validationResult.addErrorMessages(this.getValidationResultForAllFields(jsData).getErrorMessages());
        validationResult.addErrorMessages(this.getValidationResultForAllCrossFieldValidators(jsData).getErrorMessages());

        return validationResult;
    }

    /**
     * Get the validationResult for a single field based on the coupled FieldValidator
     * @param {string} fieldName The name of the field
     * @param fieldValue the value of the field
     * @returns {ValidationResult}
     */
    public getValidationResultForField(fieldName: string, fieldValue: any): ValidationResult {
        let fieldValidator = this.fieldValidators.filter(function (fieldValidator) {
            return fieldValidator.getFieldName() == fieldName;
        })[0];

        if (!fieldValidator) {
            return undefined; // todo: consider throwing an exception -> No Validation Rule found?
        }

        return fieldValidator.getValidationResult(fieldValue);
    }

    /**
     * Get the validationResult for all fields based on the coupled FieldValidators
     * @param jsData An object that contains the modelData of the submitted form.
     * @returns {ValidationResult} Returns a ValidationResult based upon the fieldValidators which includes the validation state for each field.
     */
    private getValidationResultForAllFields(jsData: any): ValidationResult {
        let result = new ValidationResult();
        let modelFieldNames = Object.keys(jsData[this.dataElementName + "Details"]);

        for (let field of modelFieldNames) {
            let validationResult = this.getValidationResultForField(field, jsData[this.dataElementName + "Details"][field]);
            if (validationResult && validationResult.isError()) {
                result.addErrorMessages(validationResult.getErrorMessages());
            }
        }

        return result;
    }

    /**
     * Get the validationResult for all fields based on the implemented cross-field validation functions
     * @param jsData An object that contains the modelData of the submitted form.
     * @returns {ValidationResult} Returns a ValidationResult based upon cross-field validations which includes the validation state for each field.
     */
    protected abstract getValidationResultForAllCrossFieldValidators(jsData: any): ValidationResult;
}

export = FormValidator;