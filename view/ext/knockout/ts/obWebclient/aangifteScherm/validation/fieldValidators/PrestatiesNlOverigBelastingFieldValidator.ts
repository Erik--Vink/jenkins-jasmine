import BedragFieldValidator = require("../../../shared/validation/fieldValidators/BedragFieldValidator");

class PrestatiesNlOverigBelastingFieldValidator extends BedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "prestatiesNlOverigBelasting";
    }

    minValue: -999999999;
    maxValue: 999999999;
}

export = PrestatiesNlOverigBelastingFieldValidator;