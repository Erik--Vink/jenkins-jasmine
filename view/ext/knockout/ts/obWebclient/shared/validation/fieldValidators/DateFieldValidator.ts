import moment = require('moment');

import ValidationResult = require("../ValidationResult");
import BaseFieldValidator = require("./BaseFieldValidator");

abstract class DateFieldValidator extends BaseFieldValidator {

    getValidationResult(fieldValue: any): ValidationResult {
        let validationResult = new ValidationResult();
        this.unmask(fieldValue);
        if (!moment(this.unmaskedValue).isValid()) {
            validationResult.addErrorMessage(this.fieldName + ": De ingevoerde waarde is geen datum");
        }
        return validationResult;
    }

}

export = DateFieldValidator;