import BedragFieldValidator = require("../../../shared/validation/fieldValidators/BedragFieldValidator");

class PrestatiesNlStandaardBelastingFieldValidator extends BedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "prestatiesNlStandaardBelasting";
    }

    minValue: -999999999;
    maxValue: 999999999;
}

export = PrestatiesNlStandaardBelastingFieldValidator;