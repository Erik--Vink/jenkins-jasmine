import FormValidator = require("../../../shared/validation/validators/FormValidator");
import ValidationResult = require("../../../shared/validation/ValidationResult");
import ObNummerFieldValidator = require("../fieldValidators/ObNummerFieldValidator");
import BezorgindicatieFieldValidator = require("../fieldValidators/BezorgindicatieFieldValidator");
import DatumBinnenkomstFieldValidator = require("../fieldValidators/DatumBinnenkomstFieldValidator");
import DagnummerFieldValidator = require("../fieldValidators/DagnummerFieldValidator");
import VolgnummerFieldValidator = require("../fieldValidators/VolgnummerFieldValidator");
import PrestatiesNaarBtlInstallatieEuOmzetFieldValidator = require("../fieldValidators/PrestatiesNaarBtlInstallatieEuOmzetFieldValidator");
import PrestatiesNlNietOf0BelastOmzetFieldValidator = require("../fieldValidators/PrestatiesNlNietOf0BelastOmzetFieldValidator");
import PrestatiesNlOverigBelastingFieldValidator = require("../fieldValidators/PrestatiesNlOverigBelastingFieldValidator");
import PrestatiesNlOverigOmzetFieldValidator = require("../fieldValidators/PrestatiesNlOverigOmzetFieldValidator");
import PrestatiesNlPriveBelastingFieldValidator = require("../fieldValidators/PrestatiesNlPriveBelastingFieldValidator");
import PrestatiesNlPriveOmzetFieldValidator = require("../fieldValidators/PrestatiesNlPriveOmzetFieldValidator");
import PrestatiesNlStandaardBelastingFieldValidator = require("../fieldValidators/PrestatiesNlStandaardBelastingFieldValidator");
import PrestatiesNlStandaardOmzetFieldValidator = require("../fieldValidators/PrestatiesNlStandaardOmzetFieldValidator");
import PrestatiesNlVerlaagdBelastingFieldValidator = require("../fieldValidators/PrestatiesNlVerlaagdBelastingFieldValidator");
import PrestatiesNlVerlaagdOmzetFieldValidator = require("../fieldValidators/PrestatiesNlVerlaagdOmzetFieldValidator");
import PrestatiesUitBtlEuBelastingFieldValidator = require("../fieldValidators/PrestatiesUitBtlEuBelastingFieldValidator");
import PrestatiesUitBtlEuOmzetFieldValidator = require("../fieldValidators/PrestatiesUitBtlEuOmzetFieldValidator");
import PrestatiesUitBtlNietEuBelastingFieldValidator = require("../fieldValidators/PrestatiesUitBtlNietEuBelastingFieldValidator");
import PrestatiesUitBtlNietEuOmzetFieldValidator = require("../fieldValidators/PrestatiesUitBtlNietEuOmzetFieldValidator");
import TotaalTeBetalenTerugTeVragenFieldValidator = require("../fieldValidators/TotaalTeBetalenTerugTeVragenFieldValidator");
import VerleggingNlNaarUBelastingFieldValidator = require("../fieldValidators/VerleggingNlNaarUBelastingFieldValidator");
import VerleggingNlNaarUOmzetFieldValidator = require("../fieldValidators/VerleggingNlNaarUOmzetFieldValidator");
import VerminderingKorFieldValidator = require("../fieldValidators/VerminderingKorFieldValidator");
import VerschuldigdeOmzetbelastingFieldValidator = require("../fieldValidators/VerschuldigdeOmzetbelastingFieldValidator");
import VoorbelastingFieldValidator = require("../fieldValidators/VoorbelastingFieldValidator");
import PrestatiesNaarBtlNietEuOmzetFieldValidator = require("../fieldValidators/PrestatiesNaarBtlNietEuOmzetFieldValidator");
import PrestatiesNaarBtlEuOmzetFieldValidator = require("../fieldValidators/PrestatiesNaarBtlEuOmzetFieldValidator");

class AangifteSchermFormValidator extends FormValidator {
    dataElementName: string = "aangifteScherm";

    protected assignFieldValidators() {
        this.fieldValidators.push(new ObNummerFieldValidator());
        this.fieldValidators.push(new BezorgindicatieFieldValidator());
        this.fieldValidators.push(new DatumBinnenkomstFieldValidator());
        this.fieldValidators.push(new DagnummerFieldValidator());
        this.fieldValidators.push(new VolgnummerFieldValidator());
        this.fieldValidators.push(new PrestatiesNaarBtlEuOmzetFieldValidator());
        this.fieldValidators.push(new PrestatiesNaarBtlNietEuOmzetFieldValidator());
        this.fieldValidators.push(new PrestatiesNaarBtlInstallatieEuOmzetFieldValidator());
        this.fieldValidators.push(new PrestatiesNlNietOf0BelastOmzetFieldValidator());
        this.fieldValidators.push(new PrestatiesNlOverigBelastingFieldValidator());
        this.fieldValidators.push(new PrestatiesNlOverigOmzetFieldValidator());
        this.fieldValidators.push(new PrestatiesNlPriveBelastingFieldValidator());
        this.fieldValidators.push(new PrestatiesNlPriveOmzetFieldValidator());
        this.fieldValidators.push(new PrestatiesNlStandaardBelastingFieldValidator());
        this.fieldValidators.push(new PrestatiesNlStandaardOmzetFieldValidator());
        this.fieldValidators.push(new PrestatiesNlVerlaagdBelastingFieldValidator());
        this.fieldValidators.push(new PrestatiesNlVerlaagdOmzetFieldValidator());
        this.fieldValidators.push(new PrestatiesUitBtlEuBelastingFieldValidator());
        this.fieldValidators.push(new PrestatiesUitBtlEuOmzetFieldValidator());
        this.fieldValidators.push(new PrestatiesUitBtlNietEuBelastingFieldValidator());
        this.fieldValidators.push(new PrestatiesUitBtlNietEuOmzetFieldValidator());
        this.fieldValidators.push(new TotaalTeBetalenTerugTeVragenFieldValidator());
        this.fieldValidators.push(new VerleggingNlNaarUBelastingFieldValidator());
        this.fieldValidators.push(new VerleggingNlNaarUOmzetFieldValidator());
        this.fieldValidators.push(new VerminderingKorFieldValidator());
        this.fieldValidators.push(new VerschuldigdeOmzetbelastingFieldValidator());
        this.fieldValidators.push(new VoorbelastingFieldValidator());
    }

    protected getValidationResultForAllCrossFieldValidators(jsData: any): ValidationResult {
        let validationResult = new ValidationResult();

        let details = jsData.aangifteSchermDetails;

        validationResult = this.checkOmzetEnBelastingBedrag(details.prestatiesNlPriveOmzet, details.prestatiesNlPriveBelasting, validationResult);
        validationResult = this.checkOmzetEnBelastingBedrag(details.prestatiesNlOverigOmzet, details.prestatiesNlOverigBelasting, validationResult);
        validationResult = this.checkOmzetEnBelastingBedrag(details.prestatiesNlStandaardOmzet, details.prestatiesNlStandaardBelasting, validationResult);
        validationResult = this.checkOmzetEnBelastingBedrag(details.prestatiesNlVerlaagdOmzet, details.prestatiesNlVerlaagdBelasting, validationResult);
        validationResult = this.checkOmzetEnBelastingBedrag(details.prestatiesUitBtlEuOmzet, details.prestatiesUitBtlEuBelasting, validationResult);
        validationResult = this.checkOmzetEnBelastingBedrag(details.prestatiesUitBtlNietEuOmzet, details.prestatiesUitBtlNietEuBelasting, validationResult);
        validationResult = this.checkOmzetEnBelastingBedrag(details.verleggingNlNaarUOmzet, details.verleggingNlNaarUBelasting, validationResult);

        validationResult = this.checktotalen(details, validationResult);
        return validationResult;
    }

    private checkOmzetEnBelastingBedrag(omzet: any, belasting: any, validationResult: ValidationResult): ValidationResult {
        let omzetNumber = Number(omzet);
        let belastingNumber = Number(belasting);

        if (isNaN(omzetNumber) && isNaN(belastingNumber)) {
            return validationResult;
        }

        if (validationResult.isSuccess()) {

            if (!this.isValidC04_1(omzetNumber, belastingNumber)) {
                validationResult.addErrorMessage("Zowel Omzet- als Belastingbedrag moet worden ingevuld");
                return validationResult;
            }

            if (omzetNumber > 0) {
                if (!this.isValidC04_2(omzetNumber, belastingNumber)) {
                    validationResult.addErrorMessage("Belastingbedrag moet groter zijn dan EUR 0,-");
                    return validationResult;
                }

                if (!this.isValidC04_4(omzetNumber, belastingNumber)) {
                    validationResult.addErrorMessage("Belastingbedrag moet lager zijn dan de omzet");
                    return validationResult;
                }
            } else if (omzetNumber < 0) {
                if (!this.isValidC04_3(omzetNumber, belastingNumber)) {
                    validationResult.addErrorMessage("Belastingbedrag moet lager zijn dan EUR 0,-");
                    return validationResult;

                }

                if (!this.isValidC04_5(omzetNumber, belastingNumber)) {
                    validationResult.addErrorMessage("Belastingbedrag moet minder zijn dan de omzet");
                    return validationResult;
                }
            }
        }

        return validationResult
    }

    private checktotalen(details: any, validationResult: ValidationResult): ValidationResult {

        let belastingBedragen = Number(details.prestatiesNlStandaardBelasting) +
            Number(details.prestatiesNlVerlaagdBelasting) +
            Number(details.prestatiesNlOverigBelasting) +
            Number(details.prestatiesNlPriveBelasting) +
            Number(details.verleggingNlNaarUBelasting) +
            Number(details.prestatiesUitBtlNietEuBelasting) +
            Number(details.prestatiesUitBtlEuBelasting);

        let nettoTotaal = Number(details.verschuldigdeOmzetbelasting) -
            Number(details.voorbelasting) -
            Number(details.verminderingKor);

        if (validationResult.isSuccess()) {
            if (!this.isValidC05(Number(details.verschuldigdeOmzetbelasting), belastingBedragen)) {
                validationResult.addErrorMessage("Berekening van TOTAAL omzetbelasting is niet juist");
                return validationResult;
            }

            if (!this.isValidC06(Number(details.totaalTeBetalenTerugTeVragen), nettoTotaal)) {
                validationResult.addErrorMessage("Berekening van TOTAAL te betalen/terug te ontvangen is niet juist");
                return validationResult;
            }
        }

        return validationResult;
    }


    private isValidC04_1(omzet: number, belasting: number): boolean {
        let result = false;

        if (!isNaN(omzet) && !isNaN(belasting)) {
            return true;
        }

        return result;
    }

    private isValidC04_2(omzet: number, belasting: number): boolean {
        let result = false;

        if (omzet > 0 && belasting > 0) {
            return true;
        }

        return result;
    }

    private isValidC04_3(omzet: number, belasting: number): boolean {
        let result = false;

        if (omzet < 0 && belasting < 0) {
            return true;
        }

        return result;
    }

    private isValidC04_4(omzet: number, belasting: number): boolean {
        let result = false;

        if (omzet > 0 && belasting < omzet) {
            return true;
        }

        return result;
    }

    private isValidC04_5(omzet: number, belasting: number): boolean {
        let result = false;

        if (omzet < 0 && belasting > omzet) {
            return true;
        }

        return result;
    }

    private isValidC05(subtotaal: number, belastingBbedragen: number): boolean {
        let result = false;

        if (subtotaal == belastingBbedragen) {
            return true;
        }

        return result;
    }

    private isValidC06(totaal: number, opgeteldeTotalen: number): boolean {
        let result = false;

        if (totaal == opgeteldeTotalen) {
            return true;
        }

        return result;
    }
}
export = AangifteSchermFormValidator;