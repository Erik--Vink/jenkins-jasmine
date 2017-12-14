define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    /**
     * KnockoutBindings is a module that enables various application specific bindings in the view classes.
     */
    var KnockoutBindings;
    (function (KnockoutBindings) {
        /**
         * The customCode binding can be used to bind an external html code block to the view.
         * This binding also accepts knockout data-bind attributes in the html code block.
         \     * @type {{update: ((element, valueAccessor) => any)}}
         */
        ko.bindingHandlers['customCode'] = {
            'update': function (element, valueAccessor) {
                ko.utils.setHtml(element, valueAccessor());
            }
        };
        ko.bindingHandlers['colOffset'] = {
            update: function (element, valAccessor) {
                var offsetNumber = valAccessor();
                if (offsetNumber) {
                    $(element).removeClass(function (index, className) {
                        return (className.match(/col-sm-offset-\d+/g) || []).join(' ');
                    });
                    element.className = element.className += ' col-sm-offset-' + offsetNumber;
                }
            }
        };
        ko.bindingHandlers['colSpan'] = {
            update: function (element, valAccessor) {
                var colSpanNumber = valAccessor();
                if (colSpanNumber) {
                    $(element).removeClass(function (index, className) {
                        return (className.match(/col-sm-\d+/g) || []).join(' ');
                    });
                    element.className = element.className += ' col-sm-' + colSpanNumber;
                }
            }
        };
        ko.bindingHandlers['groupHasErrors'] = {
            update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var fields = valueAccessor();
                if (fields) {
                    $(element).removeClass(function (index, className) {
                        return (className.match(/has-error/g) || []).join(' ');
                    });
                    fields.forEach(function (value) {
                        if (bindingContext.$root.dataViewModel[value.id].hasErrors()) {
                            element.className = element.className += ' has-error';
                        }
                        return;
                    });
                }
            }
        };
        ko.bindingHandlers['visible'] = {
            update: function (element, valAccessor) {
                var value = ko.utils.unwrapObservable(valAccessor());
                var isCurrentlyVisible = !(element.style.display == "none");
                if (value && !isCurrentlyVisible) {
                    element.style.display = "";
                }
                else if ((value == false) && isCurrentlyVisible) {
                    element.style.display = "none";
                }
            }
        };
    })(KnockoutBindings || (KnockoutBindings = {}));
    return KnockoutBindings;
});
