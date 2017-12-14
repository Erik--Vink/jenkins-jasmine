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
define(["require", "exports", "../../../shared/validation/fieldValidators/OmzetBedragFieldValidator"], function (require, exports, OmzetBedragFieldValidator) {
    "use strict";
    var PrestatiesNlPriveOmzetFieldValidator = /** @class */ (function (_super) {
        __extends(PrestatiesNlPriveOmzetFieldValidator, _super);
        function PrestatiesNlPriveOmzetFieldValidator() {
            var _this = _super.call(this) || this;
            _this.fieldName = "prestatiesNlPriveOmzet";
            return _this;
        }
        return PrestatiesNlPriveOmzetFieldValidator;
    }(OmzetBedragFieldValidator));
    return PrestatiesNlPriveOmzetFieldValidator;
});
