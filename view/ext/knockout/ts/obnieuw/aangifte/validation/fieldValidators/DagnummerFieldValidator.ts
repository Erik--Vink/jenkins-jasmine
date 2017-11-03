import NumericFieldValidator = require("../../../shared/validation/fieldValidators/NumericFieldValidator");

class DagnummerFieldValidator extends NumericFieldValidator{
    fieldName: string;

    constructor(){
        super();
        this.fieldName = "dagnummer";
    }
}

export = DagnummerFieldValidator;