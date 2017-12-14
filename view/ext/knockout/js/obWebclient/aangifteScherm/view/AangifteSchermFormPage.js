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
define(["require", "exports", "../../shared/view/FormPage", "../../shared/view/MenuModel", "./AangifteSchermFormModel"], function (require, exports, FormPage, MenuModel, AangifteSchermFormModel) {
    "use strict";
    var AangifteSchermFormPage = /** @class */ (function (_super) {
        __extends(AangifteSchermFormPage, _super);
        function AangifteSchermFormPage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AangifteSchermFormPage.prototype.getMenuModel = function () {
            return new MenuModel("OB Lokaal");
        };
        ;
        AangifteSchermFormPage.prototype.getFormModel = function () {
            return new AangifteSchermFormModel({});
        };
        return AangifteSchermFormPage;
    }(FormPage));
    return AangifteSchermFormPage;
});
