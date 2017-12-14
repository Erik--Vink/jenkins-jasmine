import DateFieldValidator = require("../../../shared/validation/fieldValidators/DateFieldValidator");

class DatumBinnenkomstFieldValidator extends DateFieldValidator {

    constructor() {
        super();
        this.fieldName = "datumBinnenkomst";
    }
}

export = DatumBinnenkomstFieldValidator;