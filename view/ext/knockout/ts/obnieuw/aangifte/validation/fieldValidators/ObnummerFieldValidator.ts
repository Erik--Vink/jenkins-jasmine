import ValidationResult = require("../../../shared/validation/ValidationResult");
import NumericFieldValidator = require("../../../shared/validation/fieldValidators/NumericFieldValidator");

class ObnummerFieldValidator extends NumericFieldValidator {

    constructor() {
        super();
        this.fieldName = "obnummer";
    }

    mask(unmaskedInputValue: any): any {

        this.unmask(unmaskedInputValue);
        if (!this.unmaskedValue) {
            return;
        }

        let maskedValue = this.unmaskedValue.toString();

        //7-9 eerste cijfers. Lees van achter naar voor. Na 3 cijfers eerste punt, daarna na 2 cijfers de laatste punt.
        if (this.unmaskedValue.toString().length >= 7 && this.unmaskedValue.toString().length <= 9) {
            maskedValue = this.insertStringPartAtPosition(maskedValue, maskedValue.length - 3, '.');
            maskedValue = this.insertStringPartAtPosition(maskedValue, maskedValue.length - 6, '.');
        }

        this.maskedValue = maskedValue;
        return this.maskedValue;
    }

    unmask(maskedValue: any): number {
        if (maskedValue) {
            this.unmaskedValue = maskedValue.replace(/\./g, "");
        }
        else {
            this.unmaskedValue = maskedValue;
        }
        return this.unmaskedValue;
    }

    getValidationResult(fieldValue: any): ValidationResult {
        let validationResult = super.getValidationResult(fieldValue);

        if (validationResult.isSuccess()) {
            let isValidElevenproof = this.isValidElevenProof(this.unmaskedValue);
            if (!isValidElevenproof) {
                validationResult.addErrorMessage("De ingevoerde waarde voldoet niet aan de 11 proef");
            }
        }

        return validationResult;
    }

    private isValidElevenProof(inputNumber: number): boolean {
        let sum = -1 * inputNumber % 10;

        for (let multiplier = 2; inputNumber > 0; multiplier++) {
            inputNumber = Math.floor(inputNumber / 10);
            let value = inputNumber % 10;
            sum += multiplier * value;
        }

        return sum !== 0 && sum % 11 === 0;
    }

    private insertStringPartAtPosition(targetString: string, index: number, stringPart: string) {
        return targetString.substr(0, index) + stringPart + targetString.substr(index);
    };
}

export = ObnummerFieldValidator;