import ValidationResult = require("../ValidationResult");
import BaseFieldValidator = require("./BaseFieldValidator");

abstract class NumericFieldValidator extends BaseFieldValidator {

    getValidationResult(fieldValue: any): ValidationResult {
        this.unmask(fieldValue);
        let validationResult = new ValidationResult();
        if (this.unmaskedValue && isNaN(this.unmaskedValue)) {
            validationResult.addErrorMessage(this.fieldName + ": De ingevoerde waarde is geen nummer");
        }
        return validationResult;
    }

}

export = NumericFieldValidator;