import ValidationResult = require("../ValidationResult");
import BedragFieldValidator = require("./BedragFieldValidator");

abstract class OmzetBedragFieldValidator extends BedragFieldValidator {

    getValidationResult(fieldValue: any): ValidationResult {
        let validationResult = super.getValidationResult(fieldValue);

        if (validationResult.isSuccess()) {
            if (fieldValue == 0) {
                validationResult.addErrorMessage(this.fieldName + ": Omzetbedrag mag niet nul zijn");
            }
        }

        return validationResult;
    }


}

export = OmzetBedragFieldValidator;