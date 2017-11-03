/*  */
define(function(require) {
    var ko               = require('knockoutjs');
    var nsxApplication   = require('nsx/nsx-application');
    var nsxKnockoutUtils = require('nsx/nsx-knockout-utils');

    var aangifteFindAllAangiftesElement = nsxApplication.getElement("obnieuw", "aangifteFindAllAangiftes");

    // anchor:custom-javascript-before:start
    // anchor:custom-javascript-before:end

    function jsToViewModel(aangifteFindAllAangiftes) {
        var aangifteFindAllAangiftesViewModel = {
            // anchor:value-fields-to-model:start
            // anchor:value-fields-to-model:end

            // anchor:dataRef-fields-to-model:start
            // anchor:dataRef-fields-to-model:end

            // anchor:manyToMany-fields-to-model:start
            // anchor:manyToMany-fields-to-model:end
         };

        // anchor:custom-json-to-model:start
        // anchor:custom-json-to-model:end

        return aangifteFindAllAangiftesViewModel;
    }

    // this should be an instance of the model defined above
    function viewModelToJS(aangifteFindAllAangiftesViewModel) {
        var jsData = {
            // anchor:value-fields-from-model:start
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

    var aangifteFindAllAangiftesMapper = {
        jsToViewModel: jsToViewModel,
        viewModelToJS: viewModelToJS
    };

    // anchor:custom-javascript-after:start
    // anchor:custom-javascript-after:end

    return aangifteFindAllAangiftesMapper;
});
