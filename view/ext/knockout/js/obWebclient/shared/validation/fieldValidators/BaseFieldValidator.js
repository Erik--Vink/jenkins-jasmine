define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * BaseFieldValidator is the abstract base class for each FieldValidator.
     * A FieldValidator object has two primary tasks which are:
     * <ul>
     *     <li>Return the validationResult based upon the given business rules
     *     <li>Optional: Mask the value of the field
     * </ul>
     * Each FieldValidator can be a subclass of another FieldValidator.
     * A FieldValidator can inherit the StringFieldValidator for example.
     */
    var BaseFieldValidator = /** @class */ (function () {
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
    return BaseFieldValidator;
});
