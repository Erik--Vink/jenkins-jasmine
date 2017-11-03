define(function(require) {
    var $ = require('jquery');
    var ko = require('knockout');

    var nsxApplication   = require('nsx/nsx-application');
    var nsxMenus         = require('nsx/nsx-menu');
    var nsxViewModel     = require('nsx/nsx-view-model');
    var aangifte205Element = nsxApplication.getElement("obnieuw", "aangifte205");
    var templates = {
        searching: "nsx/knockout/finderPage",
        paging:    "nsx/knockout/paging",
        list:      "obnieuw/aangifte205-ko-list"
    };

    // anchor:custom-script-head:start
    var Aangifte205FormValidator = require('obnieuw/validation/validators/aangifte205/Aangifte205FormValidator');
    var KnockoutFormValidator = require('obnieuw/validationHelpers/KnockoutFormValidator');
    var Aangifte205FormPage = require('obnieuw/form/Aangifte205FormPage');
    // anchor:custom-script-head:end

    function applyModel() {
        var titleModel = {
            title: "Aangifte205"
        };

        var pageModel = {};
        var aangifte205Model;
        var aangifte205ModelOptions = {};

        // anchor:custom-before-createModel:start
        var knockoutFormValidator = new KnockoutFormValidator();
        var aangifte205FormValidator = new Aangifte205FormValidator();
        var aangifte205FormPage = new Aangifte205FormPage();
        // anchor:custom-before-createModel:end

        aangifte205Model = nsxViewModel.createViewModel(aangifte205Element, aangifte205ModelOptions);

        pageModel.aangifte205Model = aangifte205Model;

        // baseModel can be referenced in ko-main.jspf
        pageModel.baseModel = aangifte205Model;
        pageModel.baseModel.templates = templates;

        // anchor:custom-before-applyBindings:start

        //override the standard NS models
         pageModel = aangifte205FormPage.pageModel;

        // pageModel.aangifte205Model.formInteraction.templateName = "obnieuw/aangifte205-ko-form-ext.html";
        // pageModel.aangifte205Model.formInteraction.beforeSubmitValidateForm = function (viewModel, jsData) {
        //     knockoutFormValidator.triggerAllValidations(viewModel);
        //     return aangifte205FormValidator.getValidationResultForForm(jsData).isSuccess();
        // };
        // anchor:custom-before-applyBindings:end

        aangifte205Model.paging.gotoFirstPage();

        var pageModelSpan = $("#page-model");
        ko.applyBindings(pageModel, pageModelSpan[0]);

        var menuSpan = $("#nsx-menu-bar");
        if (menuSpan.length > 0) {
            nsxMenus.loadAndAttachMenu('obfApp', 'menu');
            ko.applyBindings(titleModel, menuSpan[0]);
        }

        // anchor:custom-after-applyBindings:start
        // anchor:custom-after-applyBindings:end
    }

    var module = {
        applyModel: applyModel
    };

    // anchor:custom-script-tail:start
    // anchor:custom-script-tail:end

    return module;
});

