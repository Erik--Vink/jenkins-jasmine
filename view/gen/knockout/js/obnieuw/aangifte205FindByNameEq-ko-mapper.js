/*  */
define(function(require) {
    var ko               = require('knockoutjs');
    var nsxApplication   = require('nsx/nsx-application');
    var nsxKnockoutUtils = require('nsx/nsx-knockout-utils');

    var aangifte205FindByNameEqElement = nsxApplication.getElement("obnieuw", "aangifte205FindByNameEq");

    // anchor:custom-javascript-before:start
    // anchor:custom-javascript-before:end

    function jsToViewModel(aangifte205FindByNameEq) {
        var aangifte205FindByNameEqViewModel = {
            // anchor:value-fields-to-model:start
            name: ko.observable(aangifte205FindByNameEq.name),
            // anchor:value-fields-to-model:end

            // anchor:dataRef-fields-to-model:start
            // anchor:dataRef-fields-to-model:end

            // anchor:manyToMany-fields-to-model:start
            // anchor:manyToMany-fields-to-model:end
         };

        // anchor:custom-json-to-model:start
        // anchor:custom-json-to-model:end

        return aangifte205FindByNameEqViewModel;
    }

    // this should be an instance of the model defined above
    function viewModelToJS(aangifte205FindByNameEqViewModel) {
        var jsData = {
            // anchor:value-fields-from-model:start
            name: aangifte205FindByNameEqViewModel.name(),
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

    var aangifte205FindByNameEqMapper = {
        jsToViewModel: jsToViewModel,
        viewModelToJS: viewModelToJS
    };

    // anchor:custom-javascript-after:start
    // anchor:custom-javascript-after:end

    return aangifte205FindByNameEqMapper;
});
