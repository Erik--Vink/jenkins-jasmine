import NumericRangeFieldValidator = require("../../../shared/validation/fieldValidators/NumericRangeFieldValidator");

class DagnummerFieldValidator extends NumericRangeFieldValidator {
    constructor() {
        super();
        this.fieldName = "dagnummer";
    }

    minValue: 1;
    maxValue: 365;
}

export = DagnummerFieldValidator;