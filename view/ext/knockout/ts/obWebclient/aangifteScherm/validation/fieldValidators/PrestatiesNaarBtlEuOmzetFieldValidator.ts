import OmzetBedragFieldValidator = require("../../../shared/validation/fieldValidators/OmzetBedragFieldValidator");

class PrestatiesNaarBtlEuOmzetFieldValidator extends OmzetBedragFieldValidator {
    constructor() {
        super();
        this.fieldName = "prestatiesNaarBtlEu";
    }

    minValue: -9999999999;
    maxValue: 9999999999;
}

export = PrestatiesNaarBtlEuOmzetFieldValidator;