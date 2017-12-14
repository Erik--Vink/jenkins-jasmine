import OmzetBedragFieldValidator = require("../../../shared/validation/fieldValidators/OmzetBedragFieldValidator");

class PrestatiesNlOverigOmzetFieldValidator extends OmzetBedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "prestatiesNlOverigOmzet";
    }

    minValue: -9999999999;
    maxValue: 9999999999;
}

export = PrestatiesNlOverigOmzetFieldValidator;