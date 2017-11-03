import FormValidator = require("../../../shared/validation/validators/FormValidator");
import ValidationResult = require("../../../shared/validation/ValidationResult");
import DagnummerFieldValidator = require("../fieldValidators/DagnummerFieldValidator");
import AangiftenummerFieldValidator = require("../fieldValidators/AangiftenummerFieldValidator");

class Aangifte205FormValidator extends FormValidator{

    protected assignFieldValidators() {
        this.fieldValidators.push(new AangiftenummerFieldValidator());
        this.fieldValidators.push(new DagnummerFieldValidator());
    }

    protected getValidationResultForAllCrossFieldValidators(jsData: any): ValidationResult {
        let validationResult = new ValidationResult();

        validationResult.addErrorMessages(this.isBelastBedragLowerThanOmzetbedrag(jsData).getErrorMessages());

        return validationResult;
    }

    private isBelastBedragLowerThanOmzetbedrag(jsData: any): ValidationResult{
        let validationResult = new ValidationResult();

        if(Number(jsData.belast_0_procent_belast_bedrag) > Number(jsData.belast_0_procent_omzetbedrag)){
            validationResult.addErrorMessage("Belast bedrag voor 'Belast met 0%' moet hoger dan het omzetbedrag zijn");
        }

        return validationResult;
    }
}

export = Aangifte205FormValidator;