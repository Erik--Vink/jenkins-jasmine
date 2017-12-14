import ValidationResult = require("../ValidationResult");
import NumericRangeFieldValidator = require("./NumericRangeFieldValidator");

abstract class BedragFieldValidator extends NumericRangeFieldValidator {

    getValidationResult(fieldValue: any): ValidationResult {
        let validationResult = super.getValidationResult(fieldValue);

        return validationResult;
    }

    mask(unmaskedInputValue: any): any {

        this.unmask(unmaskedInputValue);
        if (!this.unmaskedValue) {
            this.maskedValue = this.unmaskedValue;
            return;
        }

        let maskedValue = this.unmaskedValue.toString();

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
    }

    unmask(maskedValue: any): number {
        if (maskedValue) {
            this.unmaskedValue = maskedValue.toString().replace(/\./g, "");
        }
        else {
            this.unmaskedValue = maskedValue;
        }
        return this.unmaskedValue;
    }

    private insertStringPartAtPosition(targetString: string, index: number, stringPart: string) {
        return targetString.substr(0, index) + stringPart + targetString.substr(index);
    };
}

export = BedragFieldValidator;