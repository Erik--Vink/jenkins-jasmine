define(function(require) {
    var $ = require('jquery');
    var ko = require('knockout');

    var nsxApplication   = require('nsx/nsx-application');
    var nsxMenus         = require('nsx/nsx-menu');
    var nsxViewModel     = require('nsx/nsx-view-model');
    var aangifteSchermElement = nsxApplication.getElement("obWebclient", "aangifteScherm");
    var templates = {
        searching: "nsx/knockout/finderPage",
        paging:    "nsx/knockout/paging",
        list:      "obWebclient/aangifteScherm-ko-list"
    };

    // anchor:custom-script-head:start
    // anchor:custom-script-head:end

    function applyModel() {
        var titleModel = {
            title: "AangifteScherm"
        };

        var pageModel = {};
        var aangifteSchermModel;
        var aangifteSchermModelOptions = {};

        // anchor:custom-before-createModel:start
        // anchor:custom-before-createModel:end

        aangifteSchermModel = nsxViewModel.createViewModel(aangifteSchermElement, aangifteSchermModelOptions);

        pageModel.aangifteSchermModel = aangifteSchermModel;

        // baseModel can be referenced in ko-main.jspf
        pageModel.baseModel = aangifteSchermModel;
        pageModel.baseModel.templates = templates;

        // anchor:custom-before-applyBindings:start
        // anchor:custom-before-applyBindings:end

        aangifteSchermModel.paging.gotoFirstPage();

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

