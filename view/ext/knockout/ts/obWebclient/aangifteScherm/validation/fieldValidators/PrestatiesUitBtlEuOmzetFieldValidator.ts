import OmzetBedragFieldValidator = require("../../../shared/validation/fieldValidators/OmzetBedragFieldValidator");

class PrestatiesUitBtlEuOmzetFieldValidator extends OmzetBedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "prestatiesUitBtlEuOmzet";
    }

    minValue: -9999999999;
    maxValue: 9999999999;
}

export = PrestatiesUitBtlEuOmzetFieldValidator;