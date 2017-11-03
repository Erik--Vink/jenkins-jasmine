/*  */
define(function(require) {
    var ko               = require('knockoutjs');
    var nsxApplication   = require('nsx/nsx-application');
    var nsxKnockoutUtils = require('nsx/nsx-knockout-utils');

    var aangifteElement = nsxApplication.getElement("obnieuw", "aangifte");

    // anchor:custom-javascript-before:start
    var berichtCode = window.location.href.split("/").pop();

    var KnockoutFormValidator = require('obnieuw/validationHelpers/KnockoutFormValidator');
    var AangifteFormValidatorFactory = require('obnieuw/validation/validators/aangifte/AangifteFormValidatorFactory');

    // anchor:custom-javascript-before:end

    function jsToViewModel(aangifte) {
        var aangifteViewModel = {
            // anchor:value-fields-to-model:start
            id: ko.observable(aangifte.id),
            name: ko.observable(aangifte.name),
            obnummer: ko.observable(aangifte.obnummer),
            aangiftenummer: ko.observable(aangifte.aangiftenummer),
            belast_0_procent_omzetbedrag: ko.observable(aangifte.belast_0_procent_omzetbedrag),
            belast_0_procent_belast_bedrag: ko.observable(aangifte.belast_0_procent_belast_bedrag),
            datum_binnenkomst: nsxKnockoutUtils.asObservableDate(aangifte.datum_binnenkomst),
            dagnummer: ko.observable(aangifte.dagnummer),
            volgnummer: ko.observable(aangifte.volgnummer),
            bezorgindicatie: ko.observable(aangifte.bezorgindicatie),
            belast_overige_procent_omzetbedrag: ko.observable(aangifte.belast_overige_procent_omzetbedrag),
            belast_overige_procent_belast_bedrag: ko.observable(aangifte.belast_overige_procent_belast_bedrag),
            privegebruik_omzetbedrag: ko.observable(aangifte.privegebruik_omzetbedrag),
            privegebruik_belast_bedrag: ko.observable(aangifte.privegebruik_belast_bedrag),
            niet_belast_0_procent_omzetbedrag: ko.observable(aangifte.niet_belast_0_procent_omzetbedrag),
            heffing_verlegd_naar_aangever_omzetbedrag: ko.observable(aangifte.heffing_verlegd_naar_aangever_omzetbedrag),
            heffing_verlegd_naar_aangever_belast_bedrag: ko.observable(aangifte.heffing_verlegd_naar_aangever_belast_bedrag),
            export_buiten_eu_omzetbedrag: ko.observable(aangifte.export_buiten_eu_omzetbedrag),
            levering_diensten_binnen_eu_omzetbedrag: ko.observable(aangifte.levering_diensten_binnen_eu_omzetbedrag),
            installatie_televerkoop_binnen_eu_omzetbedrag: ko.observable(aangifte.installatie_televerkoop_binnen_eu_omzetbedrag),
            leveringen_diensten_buiten_eu_omzetbedrag: ko.observable(aangifte.leveringen_diensten_buiten_eu_omzetbedrag),
            leveringen_diensten_buiten_eu_belast_bedrag: ko.observable(aangifte.leveringen_diensten_buiten_eu_belast_bedrag),
            leveringen_diensten_binnen_eu_omzetbedrag: ko.observable(aangifte.leveringen_diensten_binnen_eu_omzetbedrag),
            leveringen_diensten_binnen_eu_belast_bedrag: ko.observable(aangifte.leveringen_diensten_binnen_eu_belast_bedrag),
            totaal_omzetbelasting: ko.observable(aangifte.totaal_omzetbelasting),
            voorbelasting: ko.observable(aangifte.voorbelasting),
            ko_regeling: ko.observable(aangifte.ko_regeling),
            schatting_vorige_aangifte: ko.observable(aangifte.schatting_vorige_aangifte),
            schatting_deze_aangifte: ko.observable(aangifte.schatting_deze_aangifte),
            totaal_betalen_of_terug_te_ontvangen: ko.observable(aangifte.totaal_betalen_of_terug_te_ontvangen),
            // anchor:value-fields-to-model:end

            // anchor:dataRef-fields-to-model:start
            // anchor:dataRef-fields-to-model:end

            // anchor:manyToMany-fields-to-model:start
            // anchor:manyToMany-fields-to-model:end
         };

        // anchor:custom-json-to-model:start
        aangifteViewModel.berichtCode = ko.observable(berichtCode);

        var knockoutFormValidator = new KnockoutFormValidator();
        var formValidatorFactory = new AangifteFormValidatorFactory();
        var aangifteFormValidator = formValidatorFactory.createFormValidator(berichtCode);

        aangifteViewModel.obnummer.subscribe(function () {
            knockoutFormValidator.executeValidation(aangifteViewModel.obnummer, 'obnummer', aangifteFormValidator);
        });
        // anchor:custom-json-to-model:end

        return aangifteViewModel;
    }

    // this should be an instance of the model defined above
    function viewModelToJS(aangifteViewModel) {
        var jsData = {
            // anchor:value-fields-from-model:start
            id: aangifteViewModel.id(),
            name: aangifteViewModel.name(),
            obnummer: aangifteViewModel.obnummer(),
            aangiftenummer: aangifteViewModel.aangiftenummer(),
            belast_0_procent_omzetbedrag: aangifteViewModel.belast_0_procent_omzetbedrag(),
            belast_0_procent_belast_bedrag: aangifteViewModel.belast_0_procent_belast_bedrag(),
            datum_binnenkomst: nsxKnockoutUtils.fromObservableDate(aangifteViewModel.datum_binnenkomst),
            dagnummer: aangifteViewModel.dagnummer(),
            volgnummer: aangifteViewModel.volgnummer(),
            bezorgindicatie: aangifteViewModel.bezorgindicatie(),
            belast_overige_procent_omzetbedrag: aangifteViewModel.belast_overige_procent_omzetbedrag(),
            belast_overige_procent_belast_bedrag: aangifteViewModel.belast_overige_procent_belast_bedrag(),
            privegebruik_omzetbedrag: aangifteViewModel.privegebruik_omzetbedrag(),
            privegebruik_belast_bedrag: aangifteViewModel.privegebruik_belast_bedrag(),
            niet_belast_0_procent_omzetbedrag: aangifteViewModel.niet_belast_0_procent_omzetbedrag(),
            heffing_verlegd_naar_aangever_omzetbedrag: aangifteViewModel.heffing_verlegd_naar_aangever_omzetbedrag(),
            heffing_verlegd_naar_aangever_belast_bedrag: aangifteViewModel.heffing_verlegd_naar_aangever_belast_bedrag(),
            export_buiten_eu_omzetbedrag: aangifteViewModel.export_buiten_eu_omzetbedrag(),
            levering_diensten_binnen_eu_omzetbedrag: aangifteViewModel.levering_diensten_binnen_eu_omzetbedrag(),
            installatie_televerkoop_binnen_eu_omzetbedrag: aangifteViewModel.installatie_televerkoop_binnen_eu_omzetbedrag(),
            leveringen_diensten_buiten_eu_omzetbedrag: aangifteViewModel.leveringen_diensten_buiten_eu_omzetbedrag(),
            leveringen_diensten_buiten_eu_belast_bedrag: aangifteViewModel.leveringen_diensten_buiten_eu_belast_bedrag(),
            leveringen_diensten_binnen_eu_omzetbedrag: aangifteViewModel.leveringen_diensten_binnen_eu_omzetbedrag(),
            leveringen_diensten_binnen_eu_belast_bedrag: aangifteViewModel.leveringen_diensten_binnen_eu_belast_bedrag(),
            totaal_omzetbelasting: aangifteViewModel.totaal_omzetbelasting(),
            voorbelasting: aangifteViewModel.voorbelasting(),
            ko_regeling: aangifteViewModel.ko_regeling(),
            schatting_vorige_aangifte: aangifteViewModel.schatting_vorige_aangifte(),
            schatting_deze_aangifte: aangifteViewModel.schatting_deze_aangifte(),
            totaal_betalen_of_terug_te_ontvangen: aangifteViewModel.totaal_betalen_of_terug_te_ontvangen(),
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

    var aangifteMapper = {
        jsToViewModel: jsToViewModel,
        viewModelToJS: viewModelToJS
    };

    // anchor:custom-javascript-after:start
    // anchor:custom-javascript-after:end

    return aangifteMapper;
});
