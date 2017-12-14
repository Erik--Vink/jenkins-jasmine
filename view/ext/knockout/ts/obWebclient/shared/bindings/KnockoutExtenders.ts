import * as ko from "knockout";
import BaseFieldValidator = require("../validation/fieldValidators/BaseFieldValidator");

/**
 * KnockoutExtenders is a module that enables various non-standard extenders in the view classes.
 */
module KnockoutExtenders {
    /**
     * The fieldValidator extender adds validation to to field this extenders is bound to.
     * The validation is based upon the rules defined in the given fieldValidator.
     * @param target The Knockout observable where this extender is bound to.
     * @param {BaseFieldValidator} fieldValidator An instance of BaseFieldValidator which contains validation rules.
     * @returns {KnockoutComputed<any>}
     */
    ko.extenders.fieldValidator = function (target, fieldValidator: BaseFieldValidator) {

        let result = ko.pureComputed({
            read: target,
            write: function (newValue: any) {
                fieldValidator.mask(newValue);
                target(fieldValidator.getMaskedValue());
            }
        }).extend({notify: 'always'});

        result.errorMessages = ko.observableArray();
        result.hasErrors = ko.observable(false);

        function validate() {
            let validationResult = fieldValidator.getValidationResult(result());

            result.errorMessages.removeAll();
            result.errorMessages(validationResult.getErrorMessages());
            result.hasErrors(validationResult.isError());
        }

        result.subscribe(validate);

        result(target());

        return result;
    }
}
export = KnockoutExtenders;