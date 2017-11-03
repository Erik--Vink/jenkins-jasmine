/*  */
define(function(require) {
    var ko               = require('knockoutjs');
    var nsxApplication   = require('nsx/nsx-application');
    var nsxKnockoutUtils = require('nsx/nsx-knockout-utils');

    var aangifte205Element = nsxApplication.getElement("obnieuw", "aangifte205");

    // anchor:custom-javascript-before:start
    var KnockoutFormValidator = require('obnieuw/validationHelpers/KnockoutFormValidator');
    var Aangifte205FormValidator = require('obnieuw/validation/validators/aangifte205/Aangifte205FormValidator');
    // anchor:custom-javascript-before:end

    function jsToViewModel(aangifte205) {
        var aangifte205ViewModel = {
            // anchor:value-fields-to-model:start
            id: ko.observable(aangifte205.id),
            name: ko.observable(aangifte205.name),
            obnummer: ko.observable(aangifte205.obnummer),
            belast_0_procent_omzetbedrag: ko.observable(aangifte205.belast_0_procent_omzetbedrag),
            belast_0_procent_belast_bedrag: ko.observable(aangifte205.belast_0_procent_belast_bedrag),
            // anchor:value-fields-to-model:end

            // anchor:dataRef-fields-to-model:start
            // anchor:dataRef-fields-to-model:end

            // anchor:manyToMany-fields-to-model:start
            // anchor:manyToMany-fields-to-model:end
         };

        // anchor:custom-json-to-model:start
        var knockoutFormValidator = new KnockoutFormValidator();
        var aangifte205FormValidator = new Aangifte205FormValidator();

        //Example : validation on blur Event
        aangifte205ViewModel.ValidateObnummer = function () {
            knockoutFormValidator.executeValidation(aangifte205ViewModel.obnummer, 'obnummer', aangifte205FormValidator);
        };

        //Example : validation on change Event
        aangifte205ViewModel.obnummer.subscribe(function () {
            knockoutFormValidator.executeValidation(aangifte205ViewModel.obnummer, 'obnummer', aangifte205FormValidator);
        });
        // anchor:custom-json-to-model:end

        return aangifte205ViewModel;
    }

    // this should be an instance of the model defined above
    function viewModelToJS(aangifte205ViewModel) {
        var jsData = {
            // anchor:value-fields-from-model:start
            id: aangifte205ViewModel.id(),
            name: aangifte205ViewModel.name(),
            obnummer: aangifte205ViewModel.obnummer(),
            belast_0_procent_omzetbedrag: aangifte205ViewModel.belast_0_procent_omzetbedrag(),
            belast_0_procent_belast_bedrag: aangifte205ViewModel.belast_0_procent_belast_bedrag(),
            // anchor:value-fields-from-model:end

            // anchor:dataRef-fields-from-model:start
            // anchor:dataRef-fields-from-model:end

            // anchor:manyToMany-fields-from-model:start
            // anchor:manyToMany-fields-from-model:end
        };

        // anchor:custom-model-to-json:start
        // anchor:custom-model-to-json:end

        return jsData;
    }

    function wrapValue(value) {
        if (value) {
            return {
                value: value
            }
        } else {
            return undefined;
        }
    }

    var aangifte205Mapper = {
        jsToViewModel: jsToViewModel,
        viewModelToJS: viewModelToJS
    };

    // anchor:custom-javascript-after:start
    // anchor:custom-javascript-after:end

    return aangifte205Mapper;
});
