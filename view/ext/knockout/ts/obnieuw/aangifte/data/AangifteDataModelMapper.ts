/// <reference path="../../../../../../Knockout.d.ts" />
import * as ko from "knockout";
import IDataModelMapper = require("../../shared/data/IDataModelMapper");
import DagnummerFieldValidator = require("../validation/fieldValidators/DagnummerFieldValidator");
import ObnummerFieldValidator = require("../validation/fieldValidators/ObnummerFieldValidator");
import AangiftenummerFieldValidator = require("../validation/fieldValidators/AangiftenummerFieldValidator");

class AangifteDataModelMapper implements IDataModelMapper{

    dataModelToViewModel(model) {

        let viewModel = {
            id: ko.observable(model.id),
            name: ko.observable(model.name),
            aangiftenummer: ko.observable(model.aangiftenummer).extend({fieldValidator: new AangiftenummerFieldValidator()}),
            belast_0_procent_omzetbedrag: ko.observable(model.belast_0_procent_omzetbedrag),
            belast_0_procent_belast_bedrag: ko.observable(model.belast_0_procent_belast_bedrag),
            datum_binnenkomst: ko.observable(model.datum_binnenkomst),
            dagnummer: ko.observable(model.dagnummer).extend({fieldValidator: new DagnummerFieldValidator()}),
            volgnummer: ko.observable(model.volgnummer),
            bezorgindicatie: ko.observable(model.bezorgindicatie),
            belast_overige_procent_omzetbedrag: ko.observable(model.belast_overige_procent_omzetbedrag),
            belast_overige_procent_belast_bedrag: ko.observable(model.belast_overige_procent_belast_bedrag),
            privegebruik_omzetbedrag: ko.observable(model.privegebruik_omzetbedrag),
            privegebruik_belast_bedrag: ko.observable(model.privegebruik_belast_bedrag),
            niet_belast_0_procent_omzetbedrag: ko.observable(model.niet_belast_0_procent_omzetbedrag),
            heffing_verlegd_naar_aangever_omzetbedrag: ko.observable(model.heffing_verlegd_naar_aangever_omzetbedrag),
            heffing_verlegd_naar_aangever_belast_bedrag: ko.observable(model.heffing_verlegd_naar_aangever_belast_bedrag),
            export_buiten_eu_omzetbedrag: ko.observable(model.export_buiten_eu_omzetbedrag),
            levering_diensten_binnen_eu_omzetbedrag: ko.observable(model.levering_diensten_binnen_eu_omzetbedrag),
            installatie_televerkoop_binnen_eu_omzetbedrag: ko.observable(model.installatie_televerkoop_binnen_eu_omzetbedrag),
            leveringen_diensten_buiten_eu_omzetbedrag: ko.observable(model.leveringen_diensten_buiten_eu_omzetbedrag),
            leveringen_diensten_buiten_eu_belast_bedrag: ko.observable(model.leveringen_diensten_buiten_eu_belast_bedrag),
            leveringen_diensten_binnen_eu_omzetbedrag: ko.observable(model.leveringen_diensten_binnen_eu_omzetbedrag),
            leveringen_diensten_binnen_eu_belast_bedrag: ko.observable(model.leveringen_diensten_binnen_eu_belast_bedrag),
            totaal_omzetbelasting: ko.observable(model.totaal_omzetbelasting),
            voorbelasting: ko.observable(model.voorbelasting),
            ko_regeling: ko.observable(model.id),
            schatting_vorige_aangifte: ko.observable(model.schatting_vorige_aangifte),
            schatting_deze_aangifte: ko.observable(model.schatting_deze_aangifte),
            totaal_betalen_of_terug_te_ontvangen: ko.observable(model.totaal_betalen_of_terug_te_ontvangen),
        };

        this.addErrorHandling(viewModel);

        return viewModel;
    }

    viewModelToDataModel(viewModel) {
        let model = {
            id: viewModel.id(),
            name: viewModel.name(),
            aangiftenummer: new AangiftenummerFieldValidator().unmask(viewModel.aangiftenummer()),
            belast_0_procent_omzetbedrag: viewModel.belast_0_procent_omzetbedrag(),
            belast_0_procent_belast_bedrag: viewModel.belast_0_procent_belast_bedrag(),
            datum_binnenkomst: viewModel.datum_binnenkomst(),
            dagnummer: viewModel.dagnummer(),
            volgnummer: viewModel.volgnummer(),
            bezorgindicatie: viewModel.bezorgindicatie(),
            belast_overige_procent_omzetbedrag: viewModel.belast_overige_procent_omzetbedrag(),
            belast_overige_procent_belast_bedrag: viewModel.belast_overige_procent_belast_bedrag(),
            privegebruik_omzetbedrag: viewModel.privegebruik_omzetbedrag(),
            privegebruik_belast_bedrag: viewModel.privegebruik_belast_bedrag(),
            niet_belast_0_procent_omzetbedrag: viewModel.niet_belast_0_procent_omzetbedrag(),
            heffing_verlegd_naar_aangever_omzetbedrag: viewModel.heffing_verlegd_naar_aangever_omzetbedrag(),
            heffing_verlegd_naar_aangever_belast_bedrag: viewModel.heffing_verlegd_naar_aangever_belast_bedrag(),
            export_buiten_eu_omzetbedrag: viewModel.export_buiten_eu_omzetbedrag(),
            levering_diensten_binnen_eu_omzetbedrag: viewModel.levering_diensten_binnen_eu_omzetbedrag(),
            installatie_televerkoop_binnen_eu_omzetbedrag: viewModel.installatie_televerkoop_binnen_eu_omzetbedrag(),
            leveringen_diensten_buiten_eu_omzetbedrag: viewModel.leveringen_diensten_buiten_eu_omzetbedrag(),
            leveringen_diensten_buiten_eu_belast_bedrag: viewModel.leveringen_diensten_buiten_eu_belast_bedrag(),
            leveringen_diensten_binnen_eu_omzetbedrag: viewModel.leveringen_diensten_binnen_eu_omzetbedrag(),
            leveringen_diensten_binnen_eu_belast_bedrag: viewModel.leveringen_diensten_binnen_eu_belast_bedrag(),
            totaal_omzetbelasting: viewModel.totaal_omzetbelasting(),
            voorbelasting: viewModel.voorbelasting(),
            ko_regeling: viewModel.id(),
            schatting_vorige_aangifte: viewModel.schatting_vorige_aangifte(),
            schatting_deze_aangifte: viewModel.schatting_deze_aangifte(),
            totaal_betalen_of_terug_te_ontvangen: viewModel.totaal_betalen_of_terug_te_ontvangen(),
        };

        return model;
    }

    private addErrorHandling(detailModel) {
        detailModel.errorMessages = ko.observableArray();
        detailModel.hasErrors = ko.observable(false);

        $.each(detailModel, function(fieldName, value) {
            value.errorMessages = ko.observableArray();
            value.hasErrors = ko.observable(false);
        });
    }
}

export = AangifteDataModelMapper;