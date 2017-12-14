import * as nsxMenu from './../../../nsx/NsxMenu';

class MenuModel {
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    /**
     * Loads the menu data from the backend and binds the menu items inside the response to the view.
     * This function should only be called after the menuTemplate is bound. Otherwise the menu will not be shown.
     */
    public loadAndAttachMenu = function () {
        nsxMenu.loadAndAttachMenu('obfApp', 'menu');
    };
}

export = MenuModel;