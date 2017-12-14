import BedragFieldValidator = require("../../../shared/validation/fieldValidators/BedragFieldValidator");

class PrestatiesUitBtlEuBelastingFieldValidator extends BedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "prestatiesUitBtlEuBelasting";
    }

    minValue: -999999999;
    maxValue: 999999999;
}

export = PrestatiesUitBtlEuBelastingFieldValidator;