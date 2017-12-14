import OmzetBedragFieldValidator = require("../../../shared/validation/fieldValidators/OmzetBedragFieldValidator");

class VerleggingNlNaarUOmzetFieldValidator extends OmzetBedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "verleggingNlNaarUOmzet";
    }

    minValue: -9999999999;
    maxValue: 9999999999;
}

export = VerleggingNlNaarUOmzetFieldValidator;