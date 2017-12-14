import OmzetBedragFieldValidator = require("../../../shared/validation/fieldValidators/OmzetBedragFieldValidator");

class PrestatiesNlNietOf0BelastOmzetFieldValidator extends OmzetBedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "prestatiesNlNietOf0BelastOmzet";
    }

    minValue: -9999999999;
    maxValue: 9999999999;
}

export = PrestatiesNlNietOf0BelastOmzetFieldValidator;