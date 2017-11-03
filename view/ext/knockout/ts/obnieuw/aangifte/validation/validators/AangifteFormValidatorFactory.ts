import IFormValidatorFactory = require("../../../shared/validation/validators/IFormValidatorFactory");
import FormValidator = require("../../../shared/validation/validators/FormValidator");
import Aangifte205FormValidator = require("./Aangifte205FormValidator");

class AangifteFormValidatorFactory implements IFormValidatorFactory{

    createFormValidator(formIdentifier: string): FormValidator {
        switch (formIdentifier){
            case "205" : return new Aangifte205FormValidator();
            default: throw new TypeError("Ongeldige formIdentifier.")
        }
    }
}

export = AangifteFormValidatorFactory;