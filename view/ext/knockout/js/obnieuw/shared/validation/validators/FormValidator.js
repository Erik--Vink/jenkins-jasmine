define(["require", "exports", "../ValidationResult"], function (require, exports, ValidationResult) {
    "use strict";
    var FormValidator = (function () {
        function FormValidator() {
            this.fieldValidators = [];
            this.assignFieldValidators();
        }
        /**
         * @param jsData  An JS object that represents the data of the submitted viewModel.
         */
        FormValidator.prototype.getValidationResultForForm = function (jsData) {
            var validationResult = new ValidationResult();
            validationResult.addErrorMessages(this.getValidationResultForAllFields(jsData).getErrorMessages());
            validationResult.addErrorMessages(this.getValidationResultForAllCrossFieldValidators(jsData).getErrorMessages());
            return validationResult;
        };
        FormValidator.prototype.getValidationResultForField = function (fieldName, fieldValue) {
            var fieldValidator = this.fieldValidators.filter(function (fieldValidator) {
                return fieldValidator.getFieldName() == fieldName;
            })[0];
            if (!fieldValidator) {
                return undefined; // todo: consider throwing an exception -> No Validation Rule found?
            }
            return fieldValidator.getValidationResult(fieldValue);
        };
        FormValidator.prototype.getValidationResultForAllFields = function (jsData) {
            var result = new ValidationResult();
            var modelFieldNames = Object.keys(jsData);
            for (var _i = 0, modelFieldNames_1 = modelFieldNames; _i < modelFieldNames_1.length; _i++) {
                var field = modelFieldNames_1[_i];
                var validationResult = this.getValidationResultForField(field, jsData[field]);
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
