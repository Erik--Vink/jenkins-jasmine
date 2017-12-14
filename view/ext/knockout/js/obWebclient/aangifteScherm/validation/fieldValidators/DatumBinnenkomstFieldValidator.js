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
define(["require", "exports", "../../../shared/validation/fieldValidators/DateFieldValidator"], function (require, exports, DateFieldValidator) {
    "use strict";
    var DatumBinnenkomstFieldValidator = /** @class */ (function (_super) {
        __extends(DatumBinnenkomstFieldValidator, _super);
        function DatumBinnenkomstFieldValidator() {
            var _this = _super.call(this) || this;
            _this.fieldName = "datumBinnenkomst";
            return _this;
        }
        return DatumBinnenkomstFieldValidator;
    }(DateFieldValidator));
    return DatumBinnenkomstFieldValidator;
});
