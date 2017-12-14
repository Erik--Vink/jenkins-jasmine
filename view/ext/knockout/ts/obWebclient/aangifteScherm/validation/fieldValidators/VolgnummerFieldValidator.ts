import NumericRangeFieldValidator = require("../../../shared/validation/fieldValidators/NumericRangeFieldValidator");

class VolgnummerFieldValidator extends NumericRangeFieldValidator {
    constructor() {
        super();
        this.fieldName = "volgnummer";
    }

    minValue: 1;
    maxValue: 9999;
}

export = VolgnummerFieldValidator;