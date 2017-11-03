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
define(["require", "exports", "../../../shared/validation/validators/FormValidator", "../fieldValidators/ObnummerFieldValidator", "../../../shared/validation/ValidationResult"], function (require, exports, FormValidator, ObnummerFieldValidator, ValidationResult) {
    "use strict";
    var Aangifte233FormValidator = (function (_super) {
        __extends(Aangifte233FormValidator, _super);
        function Aangifte233FormValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Aangifte233FormValidator.prototype.assignFieldValidators = function () {
            this.fieldValidators.push(new ObnummerFieldValidator());
        };
        Aangifte233FormValidator.prototype.getValidationResultForAllCrossFieldValidators = function (jsData) {
            var validationResult = new ValidationResult();
            validationResult.addErrorMessages(this.isBelastBedragLowerThanOmzetbedrag(jsData).getErrorMessages());
            return validationResult;
        };
        Aangifte233FormValidator.prototype.isBelastBedragLowerThanOmzetbedrag = function (jsData) {
            var validationResult = new ValidationResult();
            if (Number(jsData.belast_0_procent_belast_bedrag) > Number(jsData.belast_0_procent_omzetbedrag)) {
                validationResult.addErrorMessage("Belast bedrag voor 'Belast met 0%' moet hoger dan het omzetbedrag zijn");
            }
            return validationResult;
        };
        return Aangifte233FormValidator;
    }(FormValidator));
    return Aangifte233FormValidator;
});
