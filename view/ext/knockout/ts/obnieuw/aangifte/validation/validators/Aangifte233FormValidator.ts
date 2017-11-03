import FormValidator = require("../../../shared/validation/validators/FormValidator");
import ObnummerFieldValidator = require("../fieldValidators/ObnummerFieldValidator");
import ValidationResult = require("../../../shared/validation/ValidationResult");

class Aangifte233FormValidator extends FormValidator{

    protected assignFieldValidators() {
        this.fieldValidators.push(new ObnummerFieldValidator());
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

export = Aangifte233FormValidator;