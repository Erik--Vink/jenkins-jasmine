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
define(["require", "exports", "../validation/validators/AangifteSchermFormValidator", "../data/AangifteSchermDataModelMapper", "../../shared/view/FormModel"], function (require, exports, AangifteSchermFormValidator, AangifteSchermDataModelMapper, FormModel) {
    "use strict";
    var AangifteSchermFormModel = /** @class */ (function (_super) {
        __extends(AangifteSchermFormModel, _super);
        function AangifteSchermFormModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AangifteSchermFormModel.prototype.getComponentName = function () {
            return "obWebclient";
        };
        AangifteSchermFormModel.prototype.getElementName = function () {
            return "aangifteScherm";
        };
        AangifteSchermFormModel.prototype.getFormValidator = function () {
            return new AangifteSchermFormValidator();
        };
        AangifteSchermFormModel.prototype.getDataModelMapper = function () {
            return new AangifteSchermDataModelMapper();
        };
        AangifteSchermFormModel.prototype.getConfirmCommandName = function () {
            return "verwerkAangifteSchermCommand";
        };
        return AangifteSchermFormModel;
    }(FormModel));
    return AangifteSchermFormModel;
});
