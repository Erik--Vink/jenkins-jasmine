define(['jquery', 'nsx/nsx-application', 'nsx/nsx-component', 'nsx/nsx-element', 'module'], function (jQuery, application, components, elements, module) {
    "use strict";
    var applicationUrl;
    var applicationName;
    var origin;
    function getApplicationName() {
        if (applicationName === undefined) {
            applicationName = window.location.pathname.split("/")[1];
        }
        return applicationName;
    }
    function getOrigin() {
        if (origin === undefined) {
            origin = window.location.protocol + "//" + window.location.host;
        }
        return origin;
    }
    function getApplicationUrl() {
        if (applicationUrl === undefined) {
            applicationUrl = getOrigin() + "/" + getApplicationName();
        }
        return applicationUrl;
    }
    /*
      componentOrElement can be:
      - name of the component
      - a Component
      - an Element
    */
    function getComponentUrl(componentOrElement) {
        var componentName;
        if (typeof (componentOrElement) === "string") {
            componentName = componentOrElement;
        }
        else if (componentOrElement instanceof components.Component) {
            componentName = componentOrElement.getComponentName();
        }
        else if (componentOrElement instanceof elements.Element) {
            componentName = componentOrElement.getComponent().getComponentName();
        }
        else {
            throw "getComponentUrl expects a componentName, a Component or an Element";
        }
        return applicationUrl + "/" + componentName;
    }
    /**
     * @param {string} resource
     */
    function getResourceUrl(resource) {
        var startsWithSlash = !!resource && resource.indexOf("/") === 0;
        var containsAppName = !!resource && resource.indexOf(getApplicationName()) >= 0;
        return (containsAppName ? getOrigin() : getApplicationUrl())
            + (startsWithSlash ? "" : "/")
            + resource;
    }
    // simple cache
    var translations = {};
    function getTranslation(key) {
        if (translations[key]) {
            return translations[key];
        }
        var value = "[translation not found]";
        jQuery.ajax({
            url: applicationUrl + "/translate-json",
            data: { key: key },
            async: false,
            success: function (result) {
                if (result.success) {
                    value = result.value;
                    translations[key] = value;
                }
            }
        });
        return value;
    }
    function getElement(componentName, elementName) {
        var index;
        if (!elementName) {
            index = componentName.indexOf('.');
            if (index > 0) {
                elementName = componentName.substring(index + 1);
                componentName = componentName.substring(0, index);
            }
            else {
                throw "specify either componentName and elementName or a qualifiedName";
            }
        }
        var component = components.getComponent(componentName);
        return component.getElement(elementName);
    }
    applicationUrl = getApplicationUrl();
    var moduleExport = {
        getElement: getElement,
        getApplicationUrl: getApplicationUrl,
        getComponentUrl: getComponentUrl,
        getResourceUrl: getResourceUrl,
        getTranslation: getTranslation
    };
    module.exports = moduleExport;
});
