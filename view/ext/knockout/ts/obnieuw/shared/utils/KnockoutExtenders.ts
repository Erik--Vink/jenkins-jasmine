/// <reference path="../../../../../../Knockout.d.ts" />
import * as ko from "knockout";
import BaseFieldValidator = require("../validation/fieldValidators/BaseFieldValidator");

module KnockoutExtenders{
    ko.extenders.fieldValidator = function (target, fieldValidator: BaseFieldValidator) {

        let result = ko.pureComputed({
            read: target,
            write: function(newValue: any) {
                fieldValidator.mask(newValue);
                target(fieldValidator.getMaskedValue());
            }
        }).extend({ notify: 'always' });

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