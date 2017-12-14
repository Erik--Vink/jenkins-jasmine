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
define(["require", "exports", "./NumericFieldValidator"], function (require, exports, NumericFieldValidator) {
    "use strict";
    var NumericRangeFieldValidator = /** @class */ (function (_super) {
        __extends(NumericRangeFieldValidator, _super);
        function NumericRangeFieldValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NumericRangeFieldValidator.prototype.getValidationResult = function (fieldValue) {
            var validationResult = _super.prototype.getValidationResult.call(this, fieldValue);
            if (validationResult.isSuccess()) {
                if (this.maxValue == null) {
                    this.maxValue = 9999999999;
                }
                if (this.unmaskedValue < this.minValue || this.unmaskedValue > this.maxValue) {
                    validationResult.addErrorMessage(this.fieldName + ": De ingevoerde waarde moet liggen tussen " + this.minValue + " en " + this.maxValue);
                }
            }
            return validationResult;
        };
        return NumericRangeFieldValidator;
    }(NumericFieldValidator));
    return NumericRangeFieldValidator;
});
