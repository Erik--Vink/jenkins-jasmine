import * as ko from "knockout";
import uuidv4 = require('uuid');
import moment = require('moment');

import IDataModelMapper = require("../../shared/data/IDataModelMapper");
import PrestatiesNaarBtlInstallatieEuOmzetFieldValidator = require("../validation/fieldValidators/PrestatiesNaarBtlInstallatieEuOmzetFieldValidator");
import PrestatiesNlNietOf0BelastOmzetFieldValidator = require("../validation/fieldValidators/PrestatiesNlNietOf0BelastOmzetFieldValidator");
import PrestatiesNlOverigBelastingFieldValidator = require("../validation/fieldValidators/PrestatiesNlOverigBelastingFieldValidator");
import PrestatiesNlOverigOmzetFieldValidator = require("../validation/fieldValidators/PrestatiesNlOverigOmzetFieldValidator");
import PrestatiesNlPriveBelastingFieldValidator = require("../validation/fieldValidators/PrestatiesNlPriveBelastingFieldValidator");
import PrestatiesNlPriveOmzetFieldValidator = require("../validation/fieldValidators/PrestatiesNlPriveOmzetFieldValidator");
import PrestatiesNlStandaardBelastingFieldValidator = require("../validation/fieldValidators/PrestatiesNlStandaardBelastingFieldValidator");
import PrestatiesNlStandaardOmzetFieldValidator = require("../validation/fieldValidators/PrestatiesNlStandaardOmzetFieldValidator");
import PrestatiesNlVerlaagdBelastingFieldValidator = require("../validation/fieldValidators/PrestatiesNlVerlaagdBelastingFieldValidator");
import PrestatiesNlVerlaagdOmzetFieldValidator = require("../validation/fieldValidators/PrestatiesNlVerlaagdOmzetFieldValidator");
import PrestatiesUitBtlEuBelastingFieldValidator = require("../validation/fieldValidators/PrestatiesUitBtlEuBelastingFieldValidator");
import PrestatiesUitBtlEuOmzetFieldValidator = require("../validation/fieldValidators/PrestatiesUitBtlEuOmzetFieldValidator");
import PrestatiesUitBtlNietEuBelastingFieldValidator = require("../validation/fieldValidators/PrestatiesUitBtlNietEuBelastingFieldValidator");
import PrestatiesUitBtlNietEuOmzetFieldValidator = require("../validation/fieldValidators/PrestatiesUitBtlNietEuOmzetFieldValidator");
import TotaalTeBetalenTerugTeVragenFieldValidator = require("../validation/fieldValidators/TotaalTeBetalenTerugTeVragenFieldValidator");
import VerleggingNlNaarUBelastingFieldValidator = require("../validation/fieldValidators/VerleggingNlNaarUBelastingFieldValidator");
import VerleggingNlNaarUOmzetFieldValidator = require("../validation/fieldValidators/VerleggingNlNaarUOmzetFieldValidator");
import VerminderingKorFieldValidator = require("../validation/fieldValidators/VerminderingKorFieldValidator");
import VerschuldigdeOmzetbelastingFieldValidator = require("../validation/fieldValidators/VerschuldigdeOmzetbelastingFieldValidator");
import VoorbelastingFieldValidator = require("../validation/fieldValidators/VoorbelastingFieldValidator");
import ObNummerFieldValidator = require("../validation/fieldValidators/ObNummerFieldValidator");
import BezorgindicatieFieldValidator = require("../validation/fieldValidators/BezorgindicatieFieldValidator");
import DatumBinnenkomstFieldValidator = require("../validation/fieldValidators/DatumBinnenkomstFieldValidator");
import DagnummerFieldValidator = require("../validation/fieldValidators/DagnummerFieldValidator");
import VolgnummerFieldValidator = require("../validation/fieldValidators/VolgnummerFieldValidator");
import PrestatiesNaarBtlNietEuOmzetFieldValidator = require("../validation/fieldValidators/PrestatiesNaarBtlNietEuOmzetFieldValidator");
import PrestatiesNaarBtlEuOmzetFieldValidator = require("../validation/fieldValidators/PrestatiesNaarBtlEuOmzetFieldValidator");

class AangifteSchermDataModelMapper implements IDataModelMapper {
    dataModelToViewModel(model) {

        model.messageId = uuidv4();

        let viewModel = {
            messageId: ko.observable(model.messageId),
            obNummer: ko.observable(model.obNummer).extend({fieldValidator: new ObNummerFieldValidator()}),
            bezorgIndicatie: ko.observable(model.bezorgIndicatie).extend({fieldValidator: new BezorgindicatieFieldValidator()}),
            datumBinnenkomst: ko.observable(model.datumBinnenkomst).extend({fieldValidator: new DatumBinnenkomstFieldValidator()}),
            dagnummer: ko.observable(model.dagnummer).extend({fieldValidator: new DagnummerFieldValidator()}),
            volgnummer: ko.observable(model.volgnummer).extend({fieldValidator: new VolgnummerFieldValidator()}),
            prestatiesNaarBtlEuOmzet: ko.observable(model.prestatiesNaarBtlEuOmzet).extend({fieldValidator: new PrestatiesNaarBtlEuOmzetFieldValidator()}),
            prestatiesNaarBtlNietEuOmzet: ko.observable(model.prestatiesNaarBtlNietEuOmzet).extend({fieldValidator: new PrestatiesNaarBtlNietEuOmzetFieldValidator()}),
            prestatiesNaarBtlInstallatieEuOmzet: ko.observable(model.prestatiesNaarBtlInstallatieEuOmzet).extend({fieldValidator: new PrestatiesNaarBtlInstallatieEuOmzetFieldValidator()}),
            prestatiesNlNietOf0BelastOmzet: ko.observable(model.prestatiesNlNietOf0BelastOmzet).extend({fieldValidator: new PrestatiesNlNietOf0BelastOmzetFieldValidator()}),
            prestatiesNlOverigBelasting: ko.observable(model.prestatiesNlOverigBelasting).extend({fieldValidator: new PrestatiesNlOverigBelastingFieldValidator()}),
            prestatiesNlOverigOmzet: ko.observable(model.prestatiesNlOverigOmzet).extend({fieldValidator: new PrestatiesNlOverigOmzetFieldValidator()}),
            prestatiesNlPriveBelasting: ko.observable(model.prestatiesNlPriveBelasting).extend({fieldValidator: new PrestatiesNlPriveBelastingFieldValidator()}),
            prestatiesNlPriveOmzet: ko.observable(model.prestatiesNlPriveOmzet).extend({fieldValidator: new PrestatiesNlPriveOmzetFieldValidator()}),
            prestatiesNlStandaardBelasting: ko.observable(model.prestatiesNlStandaardBelasting).extend({fieldValidator: new PrestatiesNlStandaardBelastingFieldValidator()}),
            prestatiesNlStandaardOmzet: ko.observable(model.prestatiesNlStandaardOmzet).extend({fieldValidator: new PrestatiesNlStandaardOmzetFieldValidator()}),
            prestatiesNlVerlaagdBelasting: ko.observable(model.prestatiesNlVerlaagdBelasting).extend({fieldValidator: new PrestatiesNlVerlaagdBelastingFieldValidator()}),
            prestatiesNlVerlaagdOmzet: ko.observable(model.prestatiesNlVerlaagdOmzet).extend({fieldValidator: new PrestatiesNlVerlaagdOmzetFieldValidator()}),
            prestatiesUitBtlEuBelasting: ko.observable(model.prestatiesUitBtlEuBelasting).extend({fieldValidator: new PrestatiesUitBtlEuBelastingFieldValidator()}),
            prestatiesUitBtlEuOmzet: ko.observable(model.prestatiesUitBtlEuOmzet).extend({fieldValidator: new PrestatiesUitBtlEuOmzetFieldValidator()}),
            prestatiesUitBtlNietEuBelasting: ko.observable(model.prestatiesUitBtlNietEuBelasting).extend({fieldValidator: new PrestatiesUitBtlNietEuBelastingFieldValidator()}),
            prestatiesUitBtlNietEuOmzet: ko.observable(model.prestatiesUitBtlNietEuOmzet).extend({fieldValidator: new PrestatiesUitBtlNietEuOmzetFieldValidator()}),
            totaalTeBetalenTerugTeVragen: ko.observable(model.totaalTeBetalenTerugTeVragen).extend({fieldValidator: new TotaalTeBetalenTerugTeVragenFieldValidator()}),
            verleggingNlNaarUBelasting: ko.observable(model.verleggingNlNaarUBelasting).extend({fieldValidator: new VerleggingNlNaarUBelastingFieldValidator()}),
            verleggingNlNaarUOmzet: ko.observable(model.verleggingNlNaarUOmzet).extend({fieldValidator: new VerleggingNlNaarUOmzetFieldValidator()}),
            verminderingKor: ko.observable(model.verminderingKor).extend({fieldValidator: new VerminderingKorFieldValidator()}),
            verschuldigdeOmzetbelasting: ko.observable(model.verschuldigdeOmzetbelasting).extend({fieldValidator: new VerschuldigdeOmzetbelastingFieldValidator()}),
            voorbelasting: ko.observable(model.voorbelasting).extend({fieldValidator: new VoorbelastingFieldValidator()}),
        };

        return viewModel;
    }

    viewModelToDataModel(viewModel) {

        return {
            aangifteSchermDetails: {
                aanmaakMoment: {value: moment().format()},
                messageId: viewModel.messageId(),
                obNummer: new ObNummerFieldValidator().unmask(viewModel.obNummer()),
                datumBinnenkomst: viewModel.datumBinnenkomst(),
                dagnummer: viewModel.dagnummer(),
                volgnummer: viewModel.volgnummer(),
                prestatiesNaarBtlEuOmzet: viewModel.prestatiesNaarBtlEuOmzet(),
                prestatiesNaarBtlNietEuOmzet: viewModel.prestatiesNaarBtlNietEuOmzet(),
                prestatiesNaarBtlInstallatieEuOmzet: viewModel.prestatiesNaarBtlInstallatieEuOmzet(),
                prestatiesNlNietOf0BelastOmzet: viewModel.prestatiesNlNietOf0BelastOmzet(),
                prestatiesNlOverigBelasting: viewModel.prestatiesNlOverigBelasting(),
                prestatiesNlOverigOmzet: viewModel.prestatiesNlOverigOmzet(),
                prestatiesNlPriveBelasting: viewModel.prestatiesNlPriveBelasting(),
                prestatiesNlPriveOmzet: viewModel.prestatiesNlPriveOmzet(),
                prestatiesNlStandaardBelasting: viewModel.prestatiesNlStandaardBelasting(),
                prestatiesNlStandaardOmzet: viewModel.prestatiesNlStandaardOmzet(),
                prestatiesNlVerlaagdBelasting: viewModel.prestatiesNlVerlaagdBelasting(),
                prestatiesNlVerlaagdOmzet: viewModel.prestatiesNlVerlaagdOmzet(),
                prestatiesUitBtlEuBelasting: viewModel.prestatiesUitBtlEuBelasting(),
                prestatiesUitBtlEuOmzet: viewModel.prestatiesUitBtlEuOmzet(),
                prestatiesUitBtlNietEuBelasting: viewModel.prestatiesUitBtlNietEuBelasting(),
                prestatiesUitBtlNietEuOmzet: viewModel.prestatiesUitBtlNietEuOmzet(),
                totaalTeBetalenTerugTeVragen: viewModel.totaalTeBetalenTerugTeVragen(),
                verleggingNlNaarUBelasting: viewModel.verleggingNlNaarUBelasting(),
                verleggingNlNaarUOmzet: viewModel.verleggingNlNaarUOmzet(),
                verminderingKor: viewModel.verminderingKor(),
                verschuldigdeOmzetbelasting: viewModel.verschuldigdeOmzetbelasting(),
                voorbelasting: viewModel.voorbelasting(),
            }
        };
    }
}

export = AangifteSchermDataModelMapper;