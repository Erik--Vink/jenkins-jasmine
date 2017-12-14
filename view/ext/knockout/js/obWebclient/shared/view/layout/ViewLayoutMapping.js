var ViewLayoutMapping_Module_Factory = function () {
    var ViewLayoutMapping = {
        name: 'ViewLayoutMapping',
        defaultAttributeNamespaceURI: 'urn:\/\/www.belastingdienst.nl\/nscc\/template\/viewmodel\/v4',
        typeInfos: [{
                localName: 'CustomCode',
                typeName: {
                    namespaceURI: 'urn:\/\/www.belastingdienst.nl\/nscc\/template\/viewmodel\/v4',
                    localPart: 'CustomCode'
                },
                propertyInfos: [{
                        name: 'code',
                        elementName: {
                            localPart: 'code'
                        }
                    }, {
                        name: 'file',
                        attributeName: {
                            localPart: 'file'
                        },
                        type: 'attribute'
                    }]
            }, {
                localName: 'UIAction',
                typeName: {
                    namespaceURI: 'urn:\/\/www.belastingdienst.nl\/nscc\/template\/viewmodel\/v4',
                    localPart: 'UIAction'
                },
                baseTypeInfo: '.UIElement',
                propertyInfos: [{
                        name: 'otherAttributes',
                        type: 'anyAttribute'
                    }]
            }, {
                localName: 'UIElement',
                typeName: {
                    namespaceURI: 'urn:\/\/www.belastingdienst.nl\/nscc\/template\/viewmodel\/v4',
                    localPart: 'UIElement'
                },
                propertyInfos: [{
                        name: 'otherAttributes',
                        type: 'anyAttribute'
                    }, {
                        name: 'clazz',
                        attributeName: {
                            localPart: 'class'
                        },
                        type: 'attribute'
                    }, {
                        name: 'readonly',
                        typeInfo: 'Boolean',
                        attributeName: {
                            localPart: 'readonly'
                        },
                        type: 'attribute'
                    }, {
                        name: 'visable',
                        typeInfo: 'Boolean',
                        attributeName: {
                            localPart: 'visable'
                        },
                        type: 'attribute'
                    }, {
                        name: 'row',
                        typeInfo: 'Int',
                        type: 'attribute'
                    }, {
                        name: 'colSpan',
                        required: true,
                        typeInfo: 'Int',
                        attributeName: 'col-span',
                        type: 'attribute'
                    }, {
                        name: 'colOffset',
                        typeInfo: 'Int',
                        attributeName: 'col-offset',
                        type: 'attribute'
                    }, {
                        name: 'caption',
                        type: 'attribute'
                    }, {
                        name: 'id',
                        type: 'attribute'
                    }]
            }, {
                localName: 'UILabel',
                typeName: {
                    namespaceURI: 'urn:\/\/www.belastingdienst.nl\/nscc\/template\/viewmodel\/v4',
                    localPart: 'UILabel'
                },
                baseTypeInfo: '.UIElement',
                propertyInfos: [{
                        name: 'otherAttributes',
                        type: 'anyAttribute'
                    }]
            }, {
                localName: 'UIField',
                typeName: {
                    namespaceURI: 'urn:\/\/www.belastingdienst.nl\/nscc\/template\/viewmodel\/v4',
                    localPart: 'UIField'
                },
                baseTypeInfo: '.UIElement',
                propertyInfos: [{
                        name: 'otherAttributes',
                        type: 'anyAttribute'
                    }, {
                        name: 'validator',
                        elementName: {
                            localPart: 'validator'
                        }
                    }, {
                        name: 'length',
                        attributeName: {
                            localPart: 'length'
                        },
                        type: 'attribute'
                    }, {
                        name: 'type',
                        attributeName: {
                            localPart: 'type'
                        },
                        type: 'attribute'
                    }]
            }, {
                localName: 'Viewparts',
                typeName: {
                    namespaceURI: 'urn:\/\/www.belastingdienst.nl\/nscc\/template\/viewmodel\/v4',
                    localPart: 'Viewparts'
                },
                propertyInfos: [{
                        name: 'viewpart',
                        required: true,
                        collection: true,
                        elementName: {
                            localPart: 'viewpart'
                        },
                        typeInfo: '.ViewPart'
                    }]
            }, {
                localName: 'ViewElement',
                typeName: null,
                propertyInfos: [{
                        name: 'dataelementModelLocation',
                        required: true,
                        elementName: {
                            localPart: 'dataelementModelLocation'
                        }
                    }, {
                        name: 'viewparts',
                        required: true,
                        elementName: {
                            localPart: 'viewparts'
                        },
                        typeInfo: '.Viewparts'
                    }, {
                        name: 'caption',
                        type: 'attribute'
                    }, {
                        name: 'id',
                        type: 'attribute'
                    }]
            }, {
                localName: 'ViewPart',
                typeName: {
                    namespaceURI: 'urn:\/\/www.belastingdienst.nl\/nscc\/template\/viewmodel\/v4',
                    localPart: 'ViewPart'
                },
                baseTypeInfo: '.UIElement',
                propertyInfos: [{
                        name: 'otherAttributes',
                        type: 'anyAttribute'
                    }, {
                        name: 'inlineForm',
                        minOccurs: 0,
                        collection: true,
                        elementTypeInfos: [{
                                elementName: {
                                    localPart: 'customCode'
                                },
                                typeInfo: '.CustomCode'
                            }, {
                                elementName: {
                                    localPart: 'uiLabelFieldGroep'
                                },
                                typeInfo: '.UILabelFieldGroep'
                            }, {
                                elementName: {
                                    localPart: 'uiAction'
                                },
                                typeInfo: '.UIAction'
                            }, {
                                elementName: {
                                    localPart: 'viewpart'
                                },
                                typeInfo: '.ViewPart'
                            }, {
                                elementName: {
                                    localPart: 'uiLabel'
                                },
                                typeInfo: '.UILabel'
                            }],
                        type: 'elements'
                    }]
            }, {
                localName: 'UILabelFieldGroep',
                typeName: {
                    namespaceURI: 'urn:\/\/www.belastingdienst.nl\/nscc\/template\/viewmodel\/v4',
                    localPart: 'UILabelFieldGroep'
                },
                baseTypeInfo: '.UIElement',
                propertyInfos: [{
                        name: 'otherAttributes',
                        type: 'anyAttribute'
                    }, {
                        name: 'uiLabel',
                        required: true,
                        elementName: {
                            localPart: 'uiLabel'
                        },
                        typeInfo: '.UILabel'
                    }, {
                        name: 'uiField',
                        required: true,
                        maxOccurs: 4,
                        collection: true,
                        elementName: {
                            localPart: 'uiField'
                        },
                        typeInfo: '.UIField'
                    }]
            }],
        elementInfos: [{
                elementName: {
                    localPart: 'ViewElement',
                    namespaceURI: 'urn:\/\/www.belastingdienst.nl\/nscc\/template\/viewmodel\/v4'
                },
                typeInfo: '.ViewElement'
            }]
    };
    return {
        ViewLayoutMapping: ViewLayoutMapping
    };
};
if (typeof define === 'function' && define.amd) {
    define([], ViewLayoutMapping_Module_Factory);
}
else {
    var ViewLayoutMapping_Module = ViewLayoutMapping_Module_Factory();
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.ViewLayoutMapping = ViewLayoutMapping_Module.ViewLayoutMapping;
    }
    else {
        var ViewLayoutMapping = ViewLayoutMapping_Module.ViewLayoutMapping;
    }
}
