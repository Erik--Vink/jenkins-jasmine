import BedragFieldValidator = require("../../../shared/validation/fieldValidators/BedragFieldValidator");

class TotaalTeBetalenTerugTeVragenFieldValidator extends BedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "totaalTeBetalenTerugTeVragen";
    }

    minValue: -99999999999;
    maxValue: 99999999999;
}

export = TotaalTeBetalenTerugTeVragenFieldValidator;