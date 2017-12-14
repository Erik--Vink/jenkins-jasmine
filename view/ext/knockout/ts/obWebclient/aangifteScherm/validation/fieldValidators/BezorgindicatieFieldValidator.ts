import StringFieldValidator = require("../../../shared/validation/fieldValidators/StringFieldValidator");

class BezorgindicatieFieldValidator extends StringFieldValidator {

    constructor() {
        super();
        this.fieldName = "bezorgIndicatie";
    }
}

export = BezorgindicatieFieldValidator;