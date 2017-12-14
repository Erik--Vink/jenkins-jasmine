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
define(["require", "exports", "./BedragFieldValidator"], function (require, exports, BedragFieldValidator) {
    "use strict";
    var OmzetBedragFieldValidator = /** @class */ (function (_super) {
        __extends(OmzetBedragFieldValidator, _super);
        function OmzetBedragFieldValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OmzetBedragFieldValidator.prototype.getValidationResult = function (fieldValue) {
            var validationResult = _super.prototype.getValidationResult.call(this, fieldValue);
            if (validationResult.isSuccess()) {
                if (fieldValue == 0) {
                    validationResult.addErrorMessage(this.fieldName + ": Omzetbedrag mag niet nul zijn");
                }
            }
            return validationResult;
        };
        return OmzetBedragFieldValidator;
    }(BedragFieldValidator));
    return OmzetBedragFieldValidator;
});
