import BedragFieldValidator = require("../../../shared/validation/fieldValidators/BedragFieldValidator");

class VerminderingKorFieldValidator extends BedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "verminderingKor";
    }

    minValue: -99999;
    maxValue: 99999;
}

export = VerminderingKorFieldValidator;