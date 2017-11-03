define(function(require) {
    var $ = require('jquery');
    var ko = require('knockout');

    var nsxApplication   = require('nsx/nsx-application');
    var nsxMenus         = require('nsx/nsx-menu');
    var nsxViewModel     = require('nsx/nsx-view-model');
    var aangifteElement = nsxApplication.getElement("obnieuw", "aangifte");
    var templates = {
        searching: "nsx/knockout/finderPage",
        paging:    "nsx/knockout/paging",
        list:      "obnieuw/aangifte-ko-list"
    };

    // anchor:custom-script-head:start
    templates.form = "obnieuw/aangifte-ko-form";

    var berichtCode = window.location.href.split("/").pop();


    var KnockoutFormValidator = require('obnieuw/validationHelpers/KnockoutFormValidator');
    var AangifteFormValidatorFactory = require('obnieuw/validation/validators/aangifte/AangifteFormValidatorFactory');
    // anchor:custom-script-head:end

    function applyModel() {
        var titleModel = {
            title: "Aangifte"
        };

        var pageModel = {};
        var aangifteModel;
        var aangifteModelOptions = {};

        // anchor:custom-before-createModel:start
        var knockoutFormValidator = new KnockoutFormValidator();
        var formValidatorFactory = new AangifteFormValidatorFactory();
        try{
            var aangifteFormValidator = formValidatorFactory.createFormValidator(berichtCode);
        }
        catch (error){
            // todo: Opinion from Erik: Berco error handling should not be in the View layer
        }
        // anchor:custom-before-createModel:end

        aangifteModel = nsxViewModel.createViewModel(aangifteElement, aangifteModelOptions);

        pageModel.aangifteModel = aangifteModel;

        // baseModel can be referenced in ko-main.jspf
        pageModel.baseModel = aangifteModel;
        pageModel.baseModel.templates = templates;

        // anchor:custom-before-applyBindings:start
        pageModel.aangifteModel.formInteraction.templateName = "obnieuw/aangifte/aangifte"+berichtCode+"-ko-form.html";
        pageModel.aangifteModel.formInteraction.beforeSubmitValidateForm = function (viewModel, jsData) {
            knockoutFormValidator.triggerAllValidations(viewModel);
            return aangifteFormValidator.getValidationResultForForm(jsData).isSuccess();
        };
        // anchor:custom-before-applyBindings:end

        aangifteModel.paging.gotoFirstPage();

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

