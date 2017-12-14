/** Declaration file generated by dts-gen */

export = jsonix;

declare const jsonix: {
    Jsonix: {
        Binding: {
            Marshaller: any;
            Marshalls: {
                Element: any;
            };
            Unmarshaller: any;
            Unmarshalls: {
                Element: any;
                WrapperElement: any;
            };
        };
        Class: any;
        Context: any;
        DOM: {
            createDocument: any;
            isDomImplementationAvailable: any;
            isXlinkFixRequired: any;
            load: any;
            parse: any;
            serialize: any;
            xlinkFixRequired: any;
        };
        Mapping: {
            Style: any;
            Styled: any;
        };
        Model: {
            AbstractElementRefsPropertyInfo: any;
            AbstractElementsPropertyInfo: any;
            AnyAttributePropertyInfo: any;
            AnyElementPropertyInfo: any;
            AttributePropertyInfo: any;
            ClassInfo: any;
            ElementInfo: any;
            ElementMapPropertyInfo: any;
            ElementPropertyInfo: any;
            ElementRefPropertyInfo: any;
            ElementRefsPropertyInfo: any;
            ElementsPropertyInfo: any;
            EnumLeafInfo: any;
            Module: any;
            PropertyInfo: any;
            SingleTypePropertyInfo: any;
            TypeInfo: any;
            ValuePropertyInfo: any;
        };
        Request: any;
        Schema: {
            XSD: {
                AnySimpleType: any;
                AnyType: any;
                AnyURI: any;
                Base64Binary: any;
                Boolean: any;
                Byte: any;
                Calendar: any;
                Date: any;
                DateAsDate: any;
                DateTime: any;
                DateTimeAsDate: any;
                Decimal: any;
                Double: any;
                Duration: any;
                Float: any;
                GDay: any;
                GMonth: any;
                GMonthDay: any;
                GYear: any;
                GYearMonth: any;
                HexBinary: any;
                ID: any;
                IDREF: any;
                IDREFS: any;
                Int: any;
                Integer: any;
                Language: any;
                List: any;
                Long: any;
                NAMESPACE_URI: string;
                NCName: any;
                NMToken: any;
                NMTokens: any;
                Name: any;
                NegativeInteger: any;
                NonNegativeInteger: any;
                NonPositiveInteger: any;
                NormalizedString: any;
                Number: any;
                PREFIX: string;
                PositiveInteger: any;
                QName: any;
                Short: any;
                String: any;
                Strings: any;
                Time: any;
                TimeAsDate: any;
                Token: any;
                UnsignedByte: any;
                UnsignedInt: any;
                UnsignedLong: any;
                UnsignedShort: any;
                qname: any;
            };
            XSI: {
                NAMESPACE_URI: string;
                NIL: string;
                PREFIX: string;
                TYPE: string;
                TYPE_QNAME: {
                    CLASS_NAME: string;
                    clone: any;
                    equals: any;
                    initialize: any;
                    key: string;
                    localPart: string;
                    namespaceURI: string;
                    prefix: string;
                    string: string;
                    toCanonicalString: any;
                    toString: any;
                };
                qname: any;
            };
        };
        Util: {
            Ensure: {
                ensureArray: any;
                ensureBoolean: any;
                ensureDate: any;
                ensureExists: any;
                ensureFunction: any;
                ensureInteger: any;
                ensureNumber: any;
                ensureNumberOrNaN: any;
                ensureObject: any;
                ensureString: any;
            };
            NumberUtils: {
                isInteger: any;
            };
            StringUtils: {
                isEmpty: any;
                isNotBlank: any;
                splitBySeparatorChars: any;
                trim: any;
                whitespaceCharacters: string;
                whitespaceCharactersMap: any;
            };
            Type: {
                cloneObject: any;
                defaultValue: any;
                exists: any;
                isArray: any;
                isBoolean: any;
                isDate: any;
                isEqual: any;
                isFunction: any;
                isNaN: any;
                isNode: any;
                isNumber: any;
                isNumberOrNaN: any;
                isObject: any;
                isRegExp: any;
                isString: any;
                isUndefined: any;
            };
            extend: any;
        };
        XML: {
            Calendar: any;
            Input: any;
            Output: any;
            QName: any;
            XMLNS_NS: string;
            XMLNS_P: string;
        };
        singleFile: boolean;
    };
};
