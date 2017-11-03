define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    var KnockoutExtenders;
    (function (KnockoutExtenders) {
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
