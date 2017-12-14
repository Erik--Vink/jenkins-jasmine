define(["require", "exports", "../ValidationResult"], function (require, exports, ValidationResult) {
    "use strict";
    /**
     * FormValidator is the abstract class for all formValidators.
     * Every instance of this class needs to implement the coupling of the necessary FieldValidators
     * and optional cross-field validations.
     */
    var FormValidator = /** @class */ (function () {
        function FormValidator() {
            this.fieldValidators = [];
            this.assignFieldValidators();
        }
        /**
         * Get the validationResult for the complete submitted form.
         * This result includes the result of both the FieldValidators and the cross-field validations.
         * @param jsData An object that contains the modelData of the submitted form.
         * @returns {ValidationResult} Returns a ValidationResult which represents the current validation state of the form including the errormessages for each field.
         */
        FormValidator.prototype.getValidationResultForForm = function (jsData) {
            var validationResult = new ValidationResult();
            validationResult.addErrorMessages(this.getValidationResultForAllFields(jsData).getErrorMessages());
            validationResult.addErrorMessages(this.getValidationResultForAllCrossFieldValidators(jsData).getErrorMessages());
            return validationResult;
        };
        /**
         * Get the validationResult for a single field based on the coupled FieldValidator
         * @param {string} fieldName The name of the field
         * @param fieldValue the value of the field
         * @returns {ValidationResult}
         */
        FormValidator.prototype.getValidationResultForField = function (fieldName, fieldValue) {
            var fieldValidator = this.fieldValidators.filter(function (fieldValidator) {
                return fieldValidator.getFieldName() == fieldName;
            })[0];
            if (!fieldValidator) {
                return undefined; // todo: consider throwing an exception -> No Validation Rule found?
            }
            return fieldValidator.getValidationResult(fieldValue);
        };
        /**
         * Get the validationResult for all fields based on the coupled FieldValidators
         * @param jsData An object that contains the modelData of the submitted form.
         * @returns {ValidationResult} Returns a ValidationResult based upon the fieldValidators which includes the validation state for each field.
         */
        FormValidator.prototype.getValidationResultForAllFields = function (jsData) {
            var result = new ValidationResult();
            var modelFieldNames = Object.keys(jsData[this.dataElementName + "Details"]);
            for (var _i = 0, modelFieldNames_1 = modelFieldNames; _i < modelFieldNames_1.length; _i++) {
                var field = modelFieldNames_1[_i];
                var validationResult = this.getValidationResultForField(field, jsData[this.dataElementName + "Details"][field]);
                if (validationResult && validationResult.isError()) {
                    result.addErrorMessages(validationResult.getErrorMessages());
                }
            }
            return result;
        };
        return FormValidator;
    }());
    return FormValidator;
});
