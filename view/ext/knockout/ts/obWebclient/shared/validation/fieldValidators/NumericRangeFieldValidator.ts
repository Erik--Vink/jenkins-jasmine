import NumericFieldValidator = require("./NumericFieldValidator");
import ValidationResult = require("../ValidationResult");

abstract class NumericRangeFieldValidator extends NumericFieldValidator {

    protected abstract minValue: number;
    protected abstract maxValue: number;

    getValidationResult(fieldValue: any): ValidationResult {
        let validationResult = super.getValidationResult(fieldValue);

        if (validationResult.isSuccess()) {
            if (this.maxValue == null) {
                this.maxValue = 9999999999;
            }
            if (this.unmaskedValue < this.minValue|| this.unmaskedValue > this.maxValue) {
                validationResult.addErrorMessage(this.fieldName + ": De ingevoerde waarde moet liggen tussen " + this.minValue + " en " + this.maxValue);
            }
        }
        return validationResult;
    }
}

export = NumericRangeFieldValidator;