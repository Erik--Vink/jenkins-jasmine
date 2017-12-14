import * as nsxActions from './../../../nsx/NsxActions';
import * as nsxApplication from './../../../nsx/NsxApplication';

/**
 * CommandService is a generic service that decouples the communication between the view and the backend.
 * This service can be used to execute a Command.
 */
class CommandService {
    private element;

    constructor(componentName: string, elementName: string) {
        this.element = nsxApplication.getElement(componentName, elementName);
    }

    /**
     * Execute a command on the backend.
     * @param {string} commandName The name of the command.
     * @param {{}} modelData The request body data of the command
     * @returns {any} The response from the backend which is success or an error
     */
    executeCommand(commandName: string, modelData = {}) {
        return nsxActions.performElementCommand(this.element, commandName, modelData);
    }
}

export = CommandService;