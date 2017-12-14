import OmzetBedragFieldValidator = require("../../../shared/validation/fieldValidators/OmzetBedragFieldValidator");

class PrestatiesNlVerlaagdOmzetFieldValidator extends OmzetBedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "prestatiesNlVerlaagdOmzet";
    }

    minValue: -9999999999;
    maxValue: 9999999999;
}

export = PrestatiesNlVerlaagdOmzetFieldValidator;