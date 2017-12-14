/* global define */
define(['jquery', 'nsx/nsx-application', 'nsx/nsx-request', 'module'], function ($, application, nsxRequest, module) {
    'use strict';

    function getElementAction(element, action) {
        return application.getComponentUrl(element) + "/" + element.getElementName() + "-" + action;
    }

    function getApplicationAction(action) {
        return application.getApplicationUrl() + "/" + action;
    }

    function getElementScript(element, action) {
        var url = application.getApplicationUrl();
        url += "/js/" + element.getComponentName() + "/";
        url += element.getElementName() + "-" + action + ".js";

        return url;
    }

    function getFinderForm(element, findMethod, callBack) {
        var formName = findMethod + "Form";
        var action = getElementAction(element, formName);

        $.get(action, callBack);
    }

    /*
      searchParameters is an object containg the parameters matching the finder (including the searchMethod).
      callBack is a function that receives search jsonResult
      
     */
    function performSearch(element, searchParameters, page, rowsPerPage, callback) {
        var elementName = element.getElementName();

        var data = $.extend({}, searchParameters);
        data.rowsPerPage = rowsPerPage;
        data[elementName + "Page"] = page;

        var url = getElementAction(element, "find-json");

        $.ajax({
            type: "GET",
            url: url,
            data: data,
            success: callback
        });
    }


    function performTask(element, info, target, params, status) {
        var elementName = element.getElementName();
        var action = getElementAction(element, "perform-json");
        var data = {};

        data['taskName'] = target;
        data[elementName + 'Oid'] = info.id;
        data['paramString'] = params;
        data['targetStatus'] = status;

        return nsxRequest.postPerformTask({
            url: action,
            data: data
        });
    }

    function performElementCommand(element, commandName, data) {
        var action = getElementAction(element, "perform-command-json?commandName=" + commandName);

        var command = {
            command: data
        };

        return nsxRequest.postPerformCommand({
            url: action,
            data: JSON.stringify(command),
            datatype: 'json',
            async: false,
            contentType: 'application/json; charset=UTF-8'
        });
    }


    function deleteItem(element, info) {
        var elementName = element.getElementName();
        var action = getElementAction(element, "delete-json");
        var data = {};

        data[elementName + 'Oid'] = info.id;

        return $.ajax({
            type: 'POST',
            url: action,
            data: data
        });
    }


    var moduleExport = {
        getElementUrl: getElementAction, // deprecated
        getElementAction: getElementAction,
        getElementScript: getElementScript,
        getApplicationAction: getApplicationAction,

        performElementCommand: performElementCommand,

        performSearch: performSearch,
        performTask: performTask,

        deleteItem: deleteItem
    };

    module.exports = moduleExport;
});
