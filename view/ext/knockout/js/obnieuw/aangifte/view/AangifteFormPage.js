var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "jquery", "knockout", "./../../../nsx/NsxMenu", "../../shared/view/FormPage", "../../shared/view/FormPageModel", "../data/AangifteDataModelMapper", "../validation/validators/AangifteFormValidatorFactory"], function (require, exports, $, ko, nsxMenu, FormPage, FormPageModel, AangifteDataModelMapper, AangifteFormValidatorFactory) {
    "use strict";
    var AangifteFormPage = (function (_super) {
        __extends(AangifteFormPage, _super);
        function AangifteFormPage() {
            var _this = _super.call(this) || this;
            _this.formValidatorFactory = new AangifteFormValidatorFactory();
            _this.dataModelMapper = new AangifteDataModelMapper();
            return _this;
        }
        AangifteFormPage.prototype.applyModel = function (viewIdentifier) {
            this.formValidator = this.formValidatorFactory.createFormValidator(viewIdentifier);
            var detailData = {}; //todo, assign detailData in editMode
            this.assignPageModel('obnieuw/aangifte/view/aangifte' + viewIdentifier + '-ko-form', detailData);
            this.assignMenu({ title: "Opvoeren aangifte" });
        };
        AangifteFormPage.prototype.assignPageModel = function (templateName, detailData) {
            this.pageModel = new FormPageModel(detailData, this.dataModelMapper, this.formValidator);
            this.pageModel.formViewModel.templateName = templateName;
            ko.applyBindings(this.pageModel, $("#form")[0]);
        };
        AangifteFormPage.prototype.assignMenu = function (titleModel) {
            var menuSpan = $("#menu-bar");
            if (menuSpan.length > 0) {
                nsxMenu.loadAndAttachMenu('obfApp', 'menu');
                ko.applyBindings(titleModel, menuSpan[0]);
            }
        };
        return AangifteFormPage;
    }(FormPage));
    return AangifteFormPage;
});
