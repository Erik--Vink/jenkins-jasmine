define(["require", "exports", "./../../../nsx/NsxActions", "./../../../nsx/NsxApplication"], function (require, exports, nsxActions, nsxApplication) {
    "use strict";
    /**
     * CommandService is a generic service that decouples the communication between the view and the backend.
     * This service can be used to execute a Command.
     */
    var CommandService = /** @class */ (function () {
        function CommandService(componentName, elementName) {
            this.element = nsxApplication.getElement(componentName, elementName);
        }
        /**
         * Execute a command on the backend.
         * @param {string} commandName The name of the command.
         * @param {{}} modelData The request body data of the command
         * @returns {any} The response from the backend which is success or an error
         */
        CommandService.prototype.executeCommand = function (commandName, modelData) {
            if (modelData === void 0) { modelData = {}; }
            return nsxActions.performElementCommand(this.element, commandName, modelData);
        };
        return CommandService;
    }());
    return CommandService;
});
