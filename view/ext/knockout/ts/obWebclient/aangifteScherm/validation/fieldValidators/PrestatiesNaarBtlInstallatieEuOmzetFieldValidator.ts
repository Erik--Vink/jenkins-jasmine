import OmzetBedragFieldValidator = require("../../../shared/validation/fieldValidators/OmzetBedragFieldValidator");

class PrestatiesNaarBtlInstallatieEuOmzetFieldValidator extends OmzetBedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "prestatiesNaarBtlInstallatieEuOmzet";
    }

    minValue: -9999999999;
    maxValue: 9999999999;
}

export = PrestatiesNaarBtlInstallatieEuOmzetFieldValidator;