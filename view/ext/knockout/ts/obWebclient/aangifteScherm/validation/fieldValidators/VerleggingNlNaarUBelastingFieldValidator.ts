import BedragFieldValidator = require("../../../shared/validation/fieldValidators/BedragFieldValidator");

class VerleggingNlNaarUBelastingFieldValidator extends BedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "verleggingNlNaarUBelasting";
    }

    minValue: -999999999;
    maxValue: 999999999;
}

export = VerleggingNlNaarUBelastingFieldValidator;