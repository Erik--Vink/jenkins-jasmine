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
define(["require", "exports", "moment", "../ValidationResult", "./BaseFieldValidator"], function (require, exports, moment, ValidationResult, BaseFieldValidator) {
    "use strict";
    var DateFieldValidator = /** @class */ (function (_super) {
        __extends(DateFieldValidator, _super);
        function DateFieldValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DateFieldValidator.prototype.getValidationResult = function (fieldValue) {
            var validationResult = new ValidationResult();
            this.unmask(fieldValue);
            if (!moment(this.unmaskedValue).isValid()) {
                validationResult.addErrorMessage(this.fieldName + ": De ingevoerde waarde is geen datum");
            }
            return validationResult;
        };
        return DateFieldValidator;
    }(BaseFieldValidator));
    return DateFieldValidator;
});
