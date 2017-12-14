import BedragFieldValidator = require("../../../shared/validation/fieldValidators/BedragFieldValidator");

class VoorbelastingFieldValidator extends BedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "voorbelasting";
    }

    minValue: -99999999999;
    maxValue: 99999999999;
}

export = VoorbelastingFieldValidator;