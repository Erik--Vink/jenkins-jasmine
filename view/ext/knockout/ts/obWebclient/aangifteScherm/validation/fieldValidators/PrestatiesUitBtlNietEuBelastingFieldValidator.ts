import BedragFieldValidator = require("../../../shared/validation/fieldValidators/BedragFieldValidator");

class PrestatiesUitBtlNietEuBelastingFieldValidator extends BedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "prestatiesUitBtlNietEuBelasting";
    }

    minValue: -999999999;
    maxValue: 999999999;
}

export = PrestatiesUitBtlNietEuBelastingFieldValidator;