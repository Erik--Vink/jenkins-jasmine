/// <reference path="../../../../../../Jquery.d.ts" />
/// <reference path="../../../../../../Knockout.d.ts" />
import * as $ from "jquery";
import * as ko from "knockout";
import * as nsxMenu from './../../../nsx/NsxMenu';

import FormPage = require("../../shared/view/FormPage");
import FormPageModel = require("../../shared/view/FormPageModel");
import FormValidator = require("../../shared/validation/validators/FormValidator");
import IDataModelMapper = require("../../shared/data/IDataModelMapper");
import AangifteDataModelMapper = require("../data/AangifteDataModelMapper");
import IFormValidatorFactory = require("../../shared/validation/validators/IFormValidatorFactory");
import AangifteFormValidatorFactory = require("../validation/validators/AangifteFormValidatorFactory");

class AangifteFormPage extends FormPage {
    pageModel: FormPageModel;
    dataModelMapper: IDataModelMapper;
    formValidator: FormValidator;
    formValidatorFactory: IFormValidatorFactory;

    constructor() {
        super();
        this.formValidatorFactory = new AangifteFormValidatorFactory();
        this.dataModelMapper = new AangifteDataModelMapper();
    }

    public applyModel(viewIdentifier) {
        this.formValidator = this.formValidatorFactory.createFormValidator(viewIdentifier);
        let detailData = {};//todo, assign detailData in editMode
        this.assignPageModel('obnieuw/aangifte/view/aangifte' + viewIdentifier + '-ko-form', detailData);
        this.assignMenu({title: "Opvoeren aangifte"});
    }

    protected assignPageModel(templateName, detailData) {
        this.pageModel = new FormPageModel(detailData, this.dataModelMapper, this.formValidator);
        this.pageModel.formViewModel.templateName = templateName;
        ko.applyBindings(this.pageModel, $("#form")[0]);
    }

    private assignMenu(titleModel) {
        let menuSpan = $("#menu-bar");
        if (menuSpan.length > 0) {
            nsxMenu.loadAndAttachMenu('obfApp', 'menu');
            ko.applyBindings(titleModel, menuSpan[0]);
        }
    }
}

export = AangifteFormPage;