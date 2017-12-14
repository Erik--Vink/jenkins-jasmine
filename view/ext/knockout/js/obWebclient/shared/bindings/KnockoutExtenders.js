define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    /**
     * KnockoutExtenders is a module that enables various non-standard extenders in the view classes.
     */
    var KnockoutExtenders;
    (function (KnockoutExtenders) {
        /**
         * The fieldValidator extender adds validation to to field this extenders is bound to.
         * The validation is based upon the rules defined in the given fieldValidator.
         * @param target The Knockout observable where this extender is bound to.
         * @param {BaseFieldValidator} fieldValidator An instance of BaseFieldValidator which contains validation rules.
         * @returns {KnockoutComputed<any>}
         */
        ko.extenders.fieldValidator = function (target, fieldValidator) {
            var result = ko.pureComputed({
                read: target,
                write: function (newValue) {
                    fieldValidator.mask(newValue);
                    target(fieldValidator.getMaskedValue());
                }
            }).extend({ notify: 'always' });
            result.errorMessages = ko.observableArray();
            result.hasErrors = ko.observable(false);
            function validate() {
                var validationResult = fieldValidator.getValidationResult(result());
                result.errorMessages.removeAll();
                result.errorMessages(validationResult.getErrorMessages());
                result.hasErrors(validationResult.isError());
            }
            result.subscribe(validate);
            result(target());
            return result;
        };
    })(KnockoutExtenders || (KnockoutExtenders = {}));
    return KnockoutExtenders;
});
