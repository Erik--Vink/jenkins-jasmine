import OmzetBedragFieldValidator = require("../../../shared/validation/fieldValidators/OmzetBedragFieldValidator");

class VerschuldigdeOmzetbelastingFieldValidator extends OmzetBedragFieldValidator {

    constructor() {
        super();
        this.fieldName = "verschuldigdeOmzetbelasting";
    }

    minValue: -99999999999;
    maxValue: 99999999999;
}

export = VerschuldigdeOmzetbelastingFieldValidator;