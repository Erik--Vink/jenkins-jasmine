"use strict";
var BaseFieldValidator = (function () {
    function BaseFieldValidator() {
    }
    BaseFieldValidator.prototype.mask = function (unmaskedValue) {
        this.maskedValue = unmaskedValue;
        return this.maskedValue;
    };
    BaseFieldValidator.prototype.unmask = function (maskedValue) {
        this.unmaskedValue = maskedValue;
        return this.unmaskedValue;
    };
    BaseFieldValidator.prototype.getFieldName = function () {
        return this.fieldName;
    };
    BaseFieldValidator.prototype.setFieldName = function (fieldName) {
        this.fieldName = fieldName;
    };
    BaseFieldValidator.prototype.getUnmaskedValue = function () {
        return this.unmaskedValue;
    };
    BaseFieldValidator.prototype.getMaskedValue = function () {
        return this.maskedValue;
    };
    return BaseFieldValidator;
}());
module.exports = BaseFieldValidator;
