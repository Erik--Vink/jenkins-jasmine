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
define(["require", "exports", "../../../shared/validation/fieldValidators/BedragFieldValidator"], function (require, exports, BedragFieldValidator) {
    "use strict";
    var VoorbelastingFieldValidator = /** @class */ (function (_super) {
        __extends(VoorbelastingFieldValidator, _super);
        function VoorbelastingFieldValidator() {
            var _this = _super.call(this) || this;
            _this.fieldName = "voorbelasting";
            return _this;
        }
        return VoorbelastingFieldValidator;
    }(BedragFieldValidator));
    return VoorbelastingFieldValidator;
});
