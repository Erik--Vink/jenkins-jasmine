define(function (require,) {

    var $ = require('jquery');
    var actions = require('nsx/nsx-actions');
    var module = require('module');

    function createMenuItem(item) {
        var link = $("<a/>").attr("href", item.url);
        link.text(item.title);

        var menuItem = $("<li/>");
        menuItem.append(link);

        return menuItem;
    }

    function createSeparator(separator) {
        return $("<li class='divider'/>");
    }

    function createMenu(menu) {
        var holder = $("<li class='dropdown'/>");
        var title = $("<a class='dropdown-toggle' data-toggle='dropdown'/>");
        title.html(menu.title + " <b class='caret'></b>");
        holder.append(title);
        holder.append(parseList(menu.items, 'dropdown-menu'));

        return holder;
    }

    function parse(item) {
        switch (item.type) {
            case 'menu':
                return createMenu(item);
                break;
            case 'item':
                return createMenuItem(item);
                break;
            case 'separator':
                return createSeparator(item);
                break;
            default:
                return '<span>unknown entry</span>';
        }
    }

    function parseList(list, containerClass) {
        var bar = $("<ul/>");
        bar.addClass(containerClass);

        var i, item;
        for (i = 0; i < list.length; i++) {
            item = parse(list[i]);
            bar.append(item);
        }

        return bar;
    }

    function attachMenu(menuList, id) {
        var menuBar = parseList(menuList, 'nav navbar-nav');
        id = id || 'menu';

        $("#" + id).html(menuBar);
    }

    function loadAndAttachMenu(menuName, targetId) {
        var url = actions.getApplicationAction("menu-json");
        var data = {
            menu: menuName
        };

        $.get(url, data, function (jsonResult) {
            attachMenu(jsonResult.list, targetId);
        });
    }

    var moduleExport = {
        attachMenu: attachMenu,
        loadAndAttachMenu: loadAndAttachMenu
    };

    module.exports = moduleExport;
});