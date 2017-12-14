import OmzetBedragFieldValidator = require("../../../shared/validation/fieldValidators/OmzetBedragFieldValidator");

class PrestatiesNlPriveOmzetFieldValidator extends OmzetBedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "prestatiesNlPriveOmzet";
    }

    minValue: -9999999999;
    maxValue: 9999999999;
}

export = PrestatiesNlPriveOmzetFieldValidator;