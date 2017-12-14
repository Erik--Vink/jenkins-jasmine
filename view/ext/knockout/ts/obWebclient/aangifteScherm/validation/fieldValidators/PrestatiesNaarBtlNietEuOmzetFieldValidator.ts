import OmzetBedragFieldValidator = require("../../../shared/validation/fieldValidators/OmzetBedragFieldValidator");

class PrestatiesNaarBtlNietEuOmzetFieldValidator extends OmzetBedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "prestatiesNaarBtlNietEuOmzet";
    }

    minValue: -9999999999;
    maxValue: 9999999999;

}

export = PrestatiesNaarBtlNietEuOmzetFieldValidator;