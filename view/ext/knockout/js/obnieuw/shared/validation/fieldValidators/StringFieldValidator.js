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
    var StringFieldValidator = (function (_super) {
        __extends(StringFieldValidator, _super);
        function StringFieldValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StringFieldValidator.prototype.getValidationResult = function (fieldValue) {
            this.unmask(fieldValue);
            var validationResult = new ValidationResult();
            if (!(typeof this.unmaskedValue == 'string' || this.unmaskedValue instanceof String)) {
                validationResult.addErrorMessage("De ingevoerde waarde is geen string");
            }
            return validationResult;
        };
        return StringFieldValidator;
    }(BaseFieldValidator));
    return StringFieldValidator;
});
