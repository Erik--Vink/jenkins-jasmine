var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../ValidationResult", "./BaseFieldValidator"], function (require, exports, ValidationResult, BaseFieldValidator) {
    "use strict";
    var NumericFieldValidator = (function (_super) {
        __extends(NumericFieldValidator, _super);
        function NumericFieldValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NumericFieldValidator.prototype.getValidationResult = function (fieldValue) {
            this.unmask(fieldValue);
            var validationResult = new ValidationResult();
            if (isNaN(this.unmaskedValue)) {
                validationResult.addErrorMessage(this.fieldName + ": De ingevoerde waarde is geen nummer");
            }
            return validationResult;
        };
        return NumericFieldValidator;
    }(BaseFieldValidator));
    return NumericFieldValidator;
});
