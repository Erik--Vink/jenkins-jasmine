var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../../../shared/validation/validators/FormValidator", "../../../shared/validation/ValidationResult", "../fieldValidators/ObNummerFieldValidator", "../fieldValidators/BezorgindicatieFieldValidator", "../fieldValidators/DatumBinnenkomstFieldValidator", "../fieldValidators/DagnummerFieldValidator", "../fieldValidators/VolgnummerFieldValidator", "../fieldValidators/PrestatiesNaarBtlInstallatieEuOmzetFieldValidator", "../fieldValidators/PrestatiesNlNietOf0BelastOmzetFieldValidator", "../fieldValidators/PrestatiesNlOverigBelastingFieldValidator", "../fieldValidators/PrestatiesNlOverigOmzetFieldValidator", "../fieldValidators/PrestatiesNlPriveBelastingFieldValidator", "../fieldValidators/PrestatiesNlPriveOmzetFieldValidator", "../fieldValidators/PrestatiesNlStandaardBelastingFieldValidator", "../fieldValidators/PrestatiesNlStandaardOmzetFieldValidator", "../fieldValidators/PrestatiesNlVerlaagdBelastingFieldValidator", "../fieldValidators/PrestatiesNlVerlaagdOmzetFieldValidator", "../fieldValidators/PrestatiesUitBtlEuBelastingFieldValidator", "../fieldValidators/PrestatiesUitBtlEuOmzetFieldValidator", "../fieldValidators/PrestatiesUitBtlNietEuBelastingFieldValidator", "../fieldValidators/PrestatiesUitBtlNietEuOmzetFieldValidator", "../fieldValidators/TotaalTeBetalenTerugTeVragenFieldValidator", "../fieldValidators/VerleggingNlNaarUBelastingFieldValidator", "../fieldValidators/VerleggingNlNaarUOmzetFieldValidator", "../fieldValidators/VerminderingKorFieldValidator", "../fieldValidators/VerschuldigdeOmzetbelastingFieldValidator", "../fieldValidators/VoorbelastingFieldValidator", "../fieldValidators/PrestatiesNaarBtlNietEuOmzetFieldValidator", "../fieldValidators/PrestatiesNaarBtlEuOmzetFieldValidator"], function (require, exports, FormValidator, ValidationResult, ObNummerFieldValidator, BezorgindicatieFieldValidator, DatumBinnenkomstFieldValidator, DagnummerFieldValidator, VolgnummerFieldValidator, PrestatiesNaarBtlInstallatieEuOmzetFieldValidator, PrestatiesNlNietOf0BelastOmzetFieldValidator, PrestatiesNlOverigBelastingFieldValidator, PrestatiesNlOverigOmzetFieldValidator, PrestatiesNlPriveBelastingFieldValidator, PrestatiesNlPriveOmzetFieldValidator, PrestatiesNlStandaardBelastingFieldValidator, PrestatiesNlStandaardOmzetFieldValidator, PrestatiesNlVerlaagdBelastingFieldValidator, PrestatiesNlVerlaagdOmzetFieldValidator, PrestatiesUitBtlEuBelastingFieldValidator, PrestatiesUitBtlEuOmzetFieldValidator, PrestatiesUitBtlNietEuBelastingFieldValidator, PrestatiesUitBtlNietEuOmzetFieldValidator, TotaalTeBetalenTerugTeVragenFieldValidator, VerleggingNlNaarUBelastingFieldValidator, VerleggingNlNaarUOmzetFieldValidator, VerminderingKorFieldValidator, VerschuldigdeOmzetbelastingFieldValidator, VoorbelastingFieldValidator, PrestatiesNaarBtlNietEuOmzetFieldValidator, PrestatiesNaarBtlEuOmzetFieldValidator) {
    "use strict";
    var AangifteSchermFormValidator = /** @class */ (function (_super) {
        __extends(AangifteSchermFormValidator, _super);
        function AangifteSchermFormValidator() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.dataElementName = "aangifteScherm";
            return _this;
        }
        AangifteSchermFormValidator.prototype.assignFieldValidators = function () {
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
        };
        AangifteSchermFormValidator.prototype.getValidationResultForAllCrossFieldValidators = function (jsData) {
            var validationResult = new ValidationResult();
            var details = jsData.aangifteSchermDetails;
            validationResult = this.checkOmzetEnBelastingBedrag(details.prestatiesNlPriveOmzet, details.prestatiesNlPriveBelasting, validationResult);
            validationResult = this.checkOmzetEnBelastingBedrag(details.prestatiesNlOverigOmzet, details.prestatiesNlOverigBelasting, validationResult);
            validationResult = this.checkOmzetEnBelastingBedrag(details.prestatiesNlStandaardOmzet, details.prestatiesNlStandaardBelasting, validationResult);
            validationResult = this.checkOmzetEnBelastingBedrag(details.prestatiesNlVerlaagdOmzet, details.prestatiesNlVerlaagdBelasting, validationResult);
            validationResult = this.checkOmzetEnBelastingBedrag(details.prestatiesUitBtlEuOmzet, details.prestatiesUitBtlEuBelasting, validationResult);
            validationResult = this.checkOmzetEnBelastingBedrag(details.prestatiesUitBtlNietEuOmzet, details.prestatiesUitBtlNietEuBelasting, validationResult);
            validationResult = this.checkOmzetEnBelastingBedrag(details.verleggingNlNaarUOmzet, details.verleggingNlNaarUBelasting, validationResult);
            validationResult = this.checktotalen(details, validationResult);
            return validationResult;
        };
        AangifteSchermFormValidator.prototype.checkOmzetEnBelastingBedrag = function (omzet, belasting, validationResult) {
            var omzetNumber = Number(omzet);
            var belastingNumber = Number(belasting);
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
                }
                else if (omzetNumber < 0) {
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
            return validationResult;
        };
        AangifteSchermFormValidator.prototype.checktotalen = function (details, validationResult) {
            var belastingBedragen = Number(details.prestatiesNlStandaardBelasting) +
                Number(details.prestatiesNlVerlaagdBelasting) +
                Number(details.prestatiesNlOverigBelasting) +
                Number(details.prestatiesNlPriveBelasting) +
                Number(details.verleggingNlNaarUBelasting) +
                Number(details.prestatiesUitBtlNietEuBelasting) +
                Number(details.prestatiesUitBtlEuBelasting);
            var nettoTotaal = Number(details.verschuldigdeOmzetbelasting) -
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
        };
        AangifteSchermFormValidator.prototype.isValidC04_1 = function (omzet, belasting) {
            var result = false;
            if (!isNaN(omzet) && !isNaN(belasting)) {
                return true;
            }
            return result;
        };
        AangifteSchermFormValidator.prototype.isValidC04_2 = function (omzet, belasting) {
            var result = false;
            if (omzet > 0 && belasting > 0) {
                return true;
            }
            return result;
        };
        AangifteSchermFormValidator.prototype.isValidC04_3 = function (omzet, belasting) {
            var result = false;
            if (omzet < 0 && belasting < 0) {
                return true;
            }
            return result;
        };
        AangifteSchermFormValidator.prototype.isValidC04_4 = function (omzet, belasting) {
            var result = false;
            if (omzet > 0 && belasting < omzet) {
                return true;
            }
            return result;
        };
        AangifteSchermFormValidator.prototype.isValidC04_5 = function (omzet, belasting) {
            var result = false;
            if (omzet < 0 && belasting > omzet) {
                return true;
            }
            return result;
        };
        AangifteSchermFormValidator.prototype.isValidC05 = function (subtotaal, belastingBbedragen) {
            var result = false;
            if (subtotaal == belastingBbedragen) {
                return true;
            }
            return result;
        };
        AangifteSchermFormValidator.prototype.isValidC06 = function (totaal, opgeteldeTotalen) {
            var result = false;
            if (totaal == opgeteldeTotalen) {
                return true;
            }
            return result;
        };
        return AangifteSchermFormValidator;
    }(FormValidator));
    return AangifteSchermFormValidator;
});
