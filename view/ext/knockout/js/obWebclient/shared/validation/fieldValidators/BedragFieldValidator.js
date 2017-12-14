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
define(["require", "exports", "./NumericRangeFieldValidator"], function (require, exports, NumericRangeFieldValidator) {
    "use strict";
    var BedragFieldValidator = /** @class */ (function (_super) {
        __extends(BedragFieldValidator, _super);
        function BedragFieldValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BedragFieldValidator.prototype.getValidationResult = function (fieldValue) {
            var validationResult = _super.prototype.getValidationResult.call(this, fieldValue);
            return validationResult;
        };
        BedragFieldValidator.prototype.mask = function (unmaskedInputValue) {
            this.unmask(unmaskedInputValue);
            if (!this.unmaskedValue) {
                this.maskedValue = this.unmaskedValue;
                return;
            }
            var maskedValue = this.unmaskedValue.toString();
            if (this.unmaskedValue.toString().length > 3) {
                switch (this.unmaskedValue.toString().length) {
                    case 4:
                    case 5:
                    case 6:
                        maskedValue = this.insertStringPartAtPosition(maskedValue, maskedValue.length - 3, '.');
                        break;
                    case 7:
                    case 8:
                    case 9:
                        maskedValue = this.insertStringPartAtPosition(maskedValue, maskedValue.length - 3, '.');
                        maskedValue = this.insertStringPartAtPosition(maskedValue, maskedValue.length - 7, '.');
                        break;
                    case 10:
                    case 11:
                    case 12:
                        maskedValue = this.insertStringPartAtPosition(maskedValue, maskedValue.length - 3, '.');
                        maskedValue = this.insertStringPartAtPosition(maskedValue, maskedValue.length - 7, '.');
                        maskedValue = this.insertStringPartAtPosition(maskedValue, maskedValue.length - 11, '.');
                        break;
                    default:
                        break;
                }
            }
            this.maskedValue = maskedValue;
            return this.maskedValue;
        };
        BedragFieldValidator.prototype.unmask = function (maskedValue) {
            if (maskedValue) {
                this.unmaskedValue = maskedValue.toString().replace(/\./g, "");
            }
            else {
                this.unmaskedValue = maskedValue;
            }
            return this.unmaskedValue;
        };
        BedragFieldValidator.prototype.insertStringPartAtPosition = function (targetString, index, stringPart) {
            return targetString.substr(0, index) + stringPart + targetString.substr(index);
        };
        ;
        return BedragFieldValidator;
    }(NumericRangeFieldValidator));
    return BedragFieldValidator;
});
