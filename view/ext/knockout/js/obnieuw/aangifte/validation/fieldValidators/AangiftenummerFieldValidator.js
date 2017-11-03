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
define(["require", "exports", "../../../shared/validation/fieldValidators/NumericFieldValidator"], function (require, exports, NumericFieldValidator) {
    "use strict";
    var AangiftenummerFieldValidator = (function (_super) {
        __extends(AangiftenummerFieldValidator, _super);
        function AangiftenummerFieldValidator() {
            var _this = _super.call(this) || this;
            _this.fieldName = "aangiftenummer";
            return _this;
        }
        AangiftenummerFieldValidator.prototype.mask = function (unmaskedInputValue) {
            this.unmask(unmaskedInputValue);
            if (!this.unmaskedValue) {
                return;
            }
            var maskedValue = this.unmaskedValue.toString();
            //7-9 eerste cijfers. Lees van achter naar voor. Na 3 cijfers eerste punt, daarna na 2 cijfers de laatste punt.
            if (this.unmaskedValue.toString().length >= 7 && this.unmaskedValue.toString().length <= 9) {
                maskedValue = this.insertStringPartAtPosition(maskedValue, maskedValue.length - 3, '.');
                maskedValue = this.insertStringPartAtPosition(maskedValue, maskedValue.length - 6, '.');
            }
            this.maskedValue = maskedValue;
            return this.maskedValue;
        };
        AangiftenummerFieldValidator.prototype.unmask = function (maskedValue) {
            if (maskedValue) {
                this.unmaskedValue = maskedValue.replace(/\./g, "");
            }
            else {
                this.unmaskedValue = maskedValue;
            }
            return this.unmaskedValue;
        };
        AangiftenummerFieldValidator.prototype.getValidationResult = function (fieldValue) {
            var validationResult = _super.prototype.getValidationResult.call(this, fieldValue);
            if (validationResult.isSuccess()) {
                var isValidElevenproof = this.isValidElevenProof(this.unmaskedValue);
                if (!isValidElevenproof) {
                    validationResult.addErrorMessage("De ingevoerde waarde voldoet niet aan de 11 proef");
                }
            }
            return validationResult;
        };
        AangiftenummerFieldValidator.prototype.isValidElevenProof = function (inputNumber) {
            var sum = -1 * inputNumber % 10;
            for (var multiplier = 2; inputNumber > 0; multiplier++) {
                inputNumber = Math.floor(inputNumber / 10);
                var value = inputNumber % 10;
                sum += multiplier * value;
            }
            return sum !== 0 && sum % 11 === 0;
        };
        AangiftenummerFieldValidator.prototype.insertStringPartAtPosition = function (targetString, index, stringPart) {
            return targetString.substr(0, index) + stringPart + targetString.substr(index);
        };
        ;
        return AangiftenummerFieldValidator;
    }(NumericFieldValidator));
    return AangiftenummerFieldValidator;
});
