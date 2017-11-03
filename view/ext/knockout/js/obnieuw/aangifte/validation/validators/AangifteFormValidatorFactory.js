define(["require", "exports", "./Aangifte205FormValidator"], function (require, exports, Aangifte205FormValidator) {
    "use strict";
    var AangifteFormValidatorFactory = (function () {
        function AangifteFormValidatorFactory() {
        }
        AangifteFormValidatorFactory.prototype.createFormValidator = function (formIdentifier) {
            switch (formIdentifier) {
                case "205": return new Aangifte205FormValidator();
                default: throw new TypeError("Ongeldige formIdentifier.");
            }
        };
        return AangifteFormValidatorFactory;
    }());
    return AangifteFormValidatorFactory;
});
