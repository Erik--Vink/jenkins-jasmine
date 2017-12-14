define(["require", "exports", "./../../../nsx/NsxMenu"], function (require, exports, nsxMenu) {
    "use strict";
    var MenuModel = /** @class */ (function () {
        function MenuModel(title) {
            /**
             * Loads the menu data from the backend and binds the menu items inside the response to the view.
             * This function should only be called after the menuTemplate is bound. Otherwise the menu will not be shown.
             */
            this.loadAndAttachMenu = function () {
                nsxMenu.loadAndAttachMenu('obfApp', 'menu');
            };
            this.title = title;
        }
        return MenuModel;
    }());
    return MenuModel;
});
