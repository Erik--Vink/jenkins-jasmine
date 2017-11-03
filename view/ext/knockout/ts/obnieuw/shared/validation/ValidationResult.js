"use strict";
var ValidationResult = (function () {
    function ValidationResult(errorMessages) {
        if (errorMessages === void 0) { errorMessages = []; }
        this.errorMessages = errorMessages;
    }
    ValidationResult.prototype.isSuccess = function () {
        return this.errorMessages.length === 0;
    };
    ValidationResult.prototype.isError = function () {
        return this.errorMessages.length > 0;
    };
    ValidationResult.prototype.getErrorMessages = function () {
        return this.errorMessages;
    };
    ValidationResult.prototype.addErrorMessage = function (errorMessage) {
        this.errorMessages.push(errorMessage);
    };
    ValidationResult.prototype.addErrorMessages = function (errorMessages) {
        this.errorMessages = this.errorMessages.concat(errorMessages);
    };
    return ValidationResult;
}());
module.exports = ValidationResult;
