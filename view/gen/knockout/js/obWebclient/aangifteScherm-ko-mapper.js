/*  */
define(function(require) {
    var ko               = require('knockoutjs');
    var nsxApplication   = require('nsx/nsx-application');
    var nsxKnockoutUtils = require('nsx/nsx-knockout-utils');

    var aangifteSchermElement = nsxApplication.getElement("obWebclient", "aangifteScherm");

    // anchor:custom-javascript-before:start
    // anchor:custom-javascript-before:end

    function jsToViewModel(aangifteScherm) {
        var aangifteSchermViewModel = {
            // anchor:value-fields-to-model:start
            id: ko.observable(aangifteScherm.id),
            name: ko.observable(aangifteScherm.name),
            messageId: ko.observable(aangifteScherm.messageId),
            aanmaakMoment: {
              value: nsxKnockoutUtils.asObservableDate(aangifteScherm.aanmaakMoment)
            },
            prestatiesNlStandaardOmzet: ko.observable(aangifteScherm.prestatiesNlStandaardOmzet),
            prestatiesNlVerlaagdOmzet: ko.observable(aangifteScherm.prestatiesNlVerlaagdOmzet),
            prestatiesNlOverigOmzet: ko.observable(aangifteScherm.prestatiesNlOverigOmzet),
            prestatiesNlPriveOmzet: ko.observable(aangifteScherm.prestatiesNlPriveOmzet),
            prestatiesNlNietOf0BelastOmzet: ko.observable(aangifteScherm.prestatiesNlNietOf0BelastOmzet),
            verleggingNlNaarUOmzet: ko.observable(aangifteScherm.verleggingNlNaarUOmzet),
            prestatiesNaarBtlNietEuOmzet: ko.observable(aangifteScherm.prestatiesNaarBtlNietEuOmzet),
            prestatiesNaarBtlEuOmzet: ko.observable(aangifteScherm.prestatiesNaarBtlEuOmzet),
            prestatiesNaarBtlInstallatieEuOmzet: ko.observable(aangifteScherm.prestatiesNaarBtlInstallatieEuOmzet),
            prestatiesUitBtlNietEuOmzet: ko.observable(aangifteScherm.prestatiesUitBtlNietEuOmzet),
            prestatiesUitBtlEuOmzet: ko.observable(aangifteScherm.prestatiesUitBtlEuOmzet),
            prestatiesNlStandaardBelasting: ko.observable(aangifteScherm.prestatiesNlStandaardBelasting),
            prestatiesNlVerlaagdBelasting: ko.observable(aangifteScherm.prestatiesNlVerlaagdBelasting),
            prestatiesNlOverigBelasting: ko.observable(aangifteScherm.prestatiesNlOverigBelasting),
            prestatiesNlPriveBelasting: ko.observable(aangifteScherm.prestatiesNlPriveBelasting),
            verleggingNlNaarUBelasting: ko.observable(aangifteScherm.verleggingNlNaarUBelasting),
            prestatiesUitBtlNietEuBelasting: ko.observable(aangifteScherm.prestatiesUitBtlNietEuBelasting),
            prestatiesUitBtlEuBelasting: ko.observable(aangifteScherm.prestatiesUitBtlEuBelasting),
            verschuldigdeOmzetbelasting: ko.observable(aangifteScherm.verschuldigdeOmzetbelasting),
            voorbelasting: ko.observable(aangifteScherm.voorbelasting),
            verminderingKor: ko.observable(aangifteScherm.verminderingKor),
            totaalTeBetalenTerugTeVragen: ko.observable(aangifteScherm.totaalTeBetalenTerugTeVragen),
            obNummer: ko.observable(aangifteScherm.obNummer),
            tijdvak: ko.observable(aangifteScherm.tijdvak),
            dagnummer: ko.observable(aangifteScherm.dagnummer),
            volgnummer: ko.observable(aangifteScherm.volgnummer),
            bezorgIndicatie: ko.observable(aangifteScherm.bezorgIndicatie),
            datumBinnenkomst: nsxKnockoutUtils.asObservableDate(aangifteScherm.datumBinnenkomst),
            // anchor:value-fields-to-model:end

            // anchor:dataRef-fields-to-model:start
            // anchor:dataRef-fields-to-model:end

            // anchor:manyToMany-fields-to-model:start
            // anchor:manyToMany-fields-to-model:end
         };

        // anchor:custom-json-to-model:start
        // anchor:custom-json-to-model:end

        return aangifteSchermViewModel;
    }

    // this should be an instance of the model defined above
    function viewModelToJS(aangifteSchermViewModel) {
        var jsData = {
            // anchor:value-fields-from-model:start
            id: aangifteSchermViewModel.id(),
            name: aangifteSchermViewModel.name(),
            messageId: aangifteSchermViewModel.messageId(),
            aanmaakMoment: wrapValue(
                nsxKnockoutUtils.fromObservableDate(aangifteSchermViewModel.aanmaakMoment.value)
            ),
            prestatiesNlStandaardOmzet: aangifteSchermViewModel.prestatiesNlStandaardOmzet(),
            prestatiesNlVerlaagdOmzet: aangifteSchermViewModel.prestatiesNlVerlaagdOmzet(),
            prestatiesNlOverigOmzet: aangifteSchermViewModel.prestatiesNlOverigOmzet(),
            prestatiesNlPriveOmzet: aangifteSchermViewModel.prestatiesNlPriveOmzet(),
            prestatiesNlNietOf0BelastOmzet: aangifteSchermViewModel.prestatiesNlNietOf0BelastOmzet(),
            verleggingNlNaarUOmzet: aangifteSchermViewModel.verleggingNlNaarUOmzet(),
            prestatiesNaarBtlNietEuOmzet: aangifteSchermViewModel.prestatiesNaarBtlNietEuOmzet(),
            prestatiesNaarBtlEuOmzet: aangifteSchermViewModel.prestatiesNaarBtlEuOmzet(),
            prestatiesNaarBtlInstallatieEuOmzet: aangifteSchermViewModel.prestatiesNaarBtlInstallatieEuOmzet(),
            prestatiesUitBtlNietEuOmzet: aangifteSchermViewModel.prestatiesUitBtlNietEuOmzet(),
            prestatiesUitBtlEuOmzet: aangifteSchermViewModel.prestatiesUitBtlEuOmzet(),
            prestatiesNlStandaardBelasting: aangifteSchermViewModel.prestatiesNlStandaardBelasting(),
            prestatiesNlVerlaagdBelasting: aangifteSchermViewModel.prestatiesNlVerlaagdBelasting(),
            prestatiesNlOverigBelasting: aangifteSchermViewModel.prestatiesNlOverigBelasting(),
            prestatiesNlPriveBelasting: aangifteSchermViewModel.prestatiesNlPriveBelasting(),
            verleggingNlNaarUBelasting: aangifteSchermViewModel.verleggingNlNaarUBelasting(),
            prestatiesUitBtlNietEuBelasting: aangifteSchermViewModel.prestatiesUitBtlNietEuBelasting(),
            prestatiesUitBtlEuBelasting: aangifteSchermViewModel.prestatiesUitBtlEuBelasting(),
            verschuldigdeOmzetbelasting: aangifteSchermViewModel.verschuldigdeOmzetbelasting(),
            voorbelasting: aangifteSchermViewModel.voorbelasting(),
            verminderingKor: aangifteSchermViewModel.verminderingKor(),
            totaalTeBetalenTerugTeVragen: aangifteSchermViewModel.totaalTeBetalenTerugTeVragen(),
            obNummer: aangifteSchermViewModel.obNummer(),
            tijdvak: aangifteSchermViewModel.tijdvak(),
            dagnummer: aangifteSchermViewModel.dagnummer(),
            volgnummer: aangifteSchermViewModel.volgnummer(),
            bezorgIndicatie: aangifteSchermViewModel.bezorgIndicatie(),
            datumBinnenkomst: nsxKnockoutUtils.fromObservableDate(aangifteSchermViewModel.datumBinnenkomst),
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

    var aangifteSchermMapper = {
        jsToViewModel: jsToViewModel,
        viewModelToJS: viewModelToJS
    };

    // anchor:custom-javascript-after:start
    // anchor:custom-javascript-after:end

    return aangifteSchermMapper;
});
