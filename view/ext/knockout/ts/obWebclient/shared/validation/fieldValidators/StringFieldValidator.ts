import ValidationResult = require("../ValidationResult");
import BaseFieldValidator = require("./BaseFieldValidator");

abstract class StringFieldValidator extends BaseFieldValidator {

    getValidationResult(fieldValue: any): ValidationResult {
        this.unmask(fieldValue);
        let validationResult = new ValidationResult();
        if (!(typeof this.unmaskedValue == 'string' || this.unmaskedValue instanceof String)) {
            validationResult.addErrorMessage("De ingevoerde waarde is geen string");
        }
        return validationResult;
    }

}

export = StringFieldValidator;