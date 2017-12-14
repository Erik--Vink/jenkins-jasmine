import BedragFieldValidator = require("../../../shared/validation/fieldValidators/BedragFieldValidator");

class PrestatiesNlPriveBelastingFieldValidator extends BedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "prestatiesNlPriveBelasting";
    }

    minValue: -999999999;
    maxValue: 999999999;
}

export = PrestatiesNlPriveBelastingFieldValidator;