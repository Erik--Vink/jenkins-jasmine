import BedragFieldValidator = require("../../../shared/validation/fieldValidators/BedragFieldValidator");

class PrestatiesNlVerlaagdBelastingFieldValidator extends BedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "prestatiesNlVerlaagdBelasting";
    }

    minValue: -999999999;
    maxValue: 999999999;
}

export = PrestatiesNlVerlaagdBelastingFieldValidator;