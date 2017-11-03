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
define(["require", "exports", "../../../shared/validation/validators/FormValidator", "../../../shared/validation/ValidationResult", "../fieldValidators/DagnummerFieldValidator", "../fieldValidators/AangiftenummerFieldValidator"], function (require, exports, FormValidator, ValidationResult, DagnummerFieldValidator, AangiftenummerFieldValidator) {
    "use strict";
    var Aangifte205FormValidator = (function (_super) {
        __extends(Aangifte205FormValidator, _super);
        function Aangifte205FormValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Aangifte205FormValidator.prototype.assignFieldValidators = function () {
            this.fieldValidators.push(new AangiftenummerFieldValidator());
            this.fieldValidators.push(new DagnummerFieldValidator());
        };
        Aangifte205FormValidator.prototype.getValidationResultForAllCrossFieldValidators = function (jsData) {
            var validationResult = new ValidationResult();
            validationResult.addErrorMessages(this.isBelastBedragLowerThanOmzetbedrag(jsData).getErrorMessages());
            return validationResult;
        };
        Aangifte205FormValidator.prototype.isBelastBedragLowerThanOmzetbedrag = function (jsData) {
            var validationResult = new ValidationResult();
            if (Number(jsData.belast_0_procent_belast_bedrag) > Number(jsData.belast_0_procent_omzetbedrag)) {
                validationResult.addErrorMessage("Belast bedrag voor 'Belast met 0%' moet hoger dan het omzetbedrag zijn");
            }
            return validationResult;
        };
        return Aangifte205FormValidator;
    }(FormValidator));
    return Aangifte205FormValidator;
});
