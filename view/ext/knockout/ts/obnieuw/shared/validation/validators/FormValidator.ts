import ValidationResult = require("../ValidationResult");
import BaseFieldValidator = require("../fieldValidators/BaseFieldValidator");

abstract class FormValidator {
    protected fieldValidators : Array<BaseFieldValidator> = [];

    constructor() {
        this.assignFieldValidators();
    }

    protected abstract assignFieldValidators();

    /**
     * @param jsData  An JS object that represents the data of the submitted viewModel.
     */
    public getValidationResultForForm(jsData : any){

        let validationResult = new ValidationResult();
        validationResult.addErrorMessages(this.getValidationResultForAllFields(jsData).getErrorMessages());
        validationResult.addErrorMessages(this.getValidationResultForAllCrossFieldValidators(jsData).getErrorMessages());

        return validationResult;
    }

    public getValidationResultForField(fieldName: string, fieldValue: any) : ValidationResult{
        let fieldValidator = this.fieldValidators.filter(function (fieldValidator) {
            return fieldValidator.getFieldName() == fieldName;
        })[0];

        if(!fieldValidator){
            return undefined; // todo: consider throwing an exception -> No Validation Rule found?
        }

        return fieldValidator.getValidationResult(fieldValue);
    }

    private getValidationResultForAllFields(jsData: any) : ValidationResult{
        let result = new ValidationResult();
        let modelFieldNames = Object.keys(jsData);

        for(let field of modelFieldNames){
            let validationResult = this.getValidationResultForField(field, jsData[field]);
            if(validationResult && validationResult.isError()){
                result.addErrorMessages(validationResult.getErrorMessages());
            }
        }

        return result;
    }

    protected abstract getValidationResultForAllCrossFieldValidators(jsData: any) : ValidationResult;
}

export = FormValidator;