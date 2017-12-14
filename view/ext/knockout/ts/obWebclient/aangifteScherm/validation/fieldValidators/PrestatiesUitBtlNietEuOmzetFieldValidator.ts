import OmzetBedragFieldValidator = require("../../../shared/validation/fieldValidators/OmzetBedragFieldValidator");

class PrestatiesUitBtlNietEuOmzetFieldValidator extends OmzetBedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "prestatiesUitBtlNietEuOmzet";
    }

    minValue: -9999999999;
    maxValue: 9999999999;
}

export = PrestatiesUitBtlNietEuOmzetFieldValidator;