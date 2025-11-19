import * as _et from 'exupery-core-types';
import * as _i_core from "../../../core/unconstrained";
export type _T_Classes = _i_core._T_List<null, string>;
export type _T_Span = {
    readonly 'classes': _T_Classes;
    readonly 'title': _et.Optional_Value<string>;
    readonly 'children': _i_core._T_List<null, {
        readonly 'classes': _T_Classes;
        readonly 'type': _i_core._T_State_Group<null, readonly ['span', _T_Span] | readonly [
            'a',
            {
                readonly 'text': string;
                readonly 'href': string;
            }
        ] | readonly [
            'p',
            {
                readonly 'text': string;
            }
        ]>;
    }>;
};
export type _T_Div = {
    readonly 'classes': _T_Classes;
    readonly 'width': _et.Optional_Value<number>;
    readonly 'height': _et.Optional_Value<number>;
    readonly 'children': _i_core._T_List<null, {
        readonly 'type': _i_core._T_State_Group<null, readonly ['div', _T_Div] | readonly [
            'table',
            {
                readonly 'classes': _T_Classes;
                readonly 'children': _i_core._T_List<null, {
                    readonly 'classes': _T_Classes;
                    readonly 'type': _i_core._T_State_Group<null, readonly ['header', null] | readonly ['body', null] | readonly ['footer', null]>;
                    readonly 'rows': _i_core._T_List<null, {
                        readonly 'classes': _T_Classes;
                        readonly 'type': _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                        readonly 'height': _et.Optional_Value<number>;
                        readonly 'cells': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes;
                            readonly 'div': _T_Div;
                        }>;
                    }>;
                }>;
            }
        ] | readonly ['span', _T_Span] | readonly [
            'label',
            {
                readonly 'classes': _T_Classes;
                readonly 'text': string;
                readonly 'div': _T_Div;
            }
        ] | readonly [
            'img',
            {
                readonly 'classes': _T_Classes;
                readonly 'src': string;
                readonly 'alt': string;
                readonly 'width': _et.Optional_Value<number>;
                readonly 'height': _et.Optional_Value<number>;
            }
        ] | readonly [
            'svg',
            {
                readonly 'classes': _T_Classes;
                readonly 'content': string;
                readonly 'width': _et.Optional_Value<number>;
                readonly 'height': _et.Optional_Value<number>;
            }
        ]>;
    }>;
};
export type _T_Document = {
    readonly 'css': string;
    readonly 'root': _T_Div;
};
export type Classes = _T_Classes;
export type Span = _T_Span;
export type Div = _T_Div;
export type Document = _T_Document;
export declare namespace _T_Classes {
    type L = string;
}
export declare namespace _T_Span {
    namespace classes {
    }
    type classes = _T_Classes;
    namespace title {
        type O = string;
    }
    type title = _et.Optional_Value<string>;
    namespace children {
        namespace L {
            namespace classes {
            }
            type classes = _T_Classes;
            namespace _type {
                namespace SG {
                    namespace span {
                    }
                    type span = _T_Span;
                    namespace a {
                        type text = string;
                        type href = string;
                    }
                    type a = {
                        readonly 'text': string;
                        readonly 'href': string;
                    };
                    namespace p {
                        type text = string;
                    }
                    type p = {
                        readonly 'text': string;
                    };
                }
                type SG = readonly ['span', _T_Span] | readonly [
                    'a',
                    {
                        readonly 'text': string;
                        readonly 'href': string;
                    }
                ] | readonly [
                    'p',
                    {
                        readonly 'text': string;
                    }
                ];
            }
            type _type = _i_core._T_State_Group<null, readonly ['span', _T_Span] | readonly [
                'a',
                {
                    readonly 'text': string;
                    readonly 'href': string;
                }
            ] | readonly [
                'p',
                {
                    readonly 'text': string;
                }
            ]>;
        }
        type L = {
            readonly 'classes': _T_Classes;
            readonly 'type': _i_core._T_State_Group<null, readonly ['span', _T_Span] | readonly [
                'a',
                {
                    readonly 'text': string;
                    readonly 'href': string;
                }
            ] | readonly [
                'p',
                {
                    readonly 'text': string;
                }
            ]>;
        };
    }
    type children = _i_core._T_List<null, {
        readonly 'classes': _T_Classes;
        readonly 'type': _i_core._T_State_Group<null, readonly ['span', _T_Span] | readonly [
            'a',
            {
                readonly 'text': string;
                readonly 'href': string;
            }
        ] | readonly [
            'p',
            {
                readonly 'text': string;
            }
        ]>;
    }>;
}
export declare namespace _T_Div {
    namespace classes {
    }
    type classes = _T_Classes;
    namespace width {
        type O = number;
    }
    type width = _et.Optional_Value<number>;
    namespace height {
        type O = number;
    }
    type height = _et.Optional_Value<number>;
    namespace children {
        namespace L {
            namespace _type {
                namespace SG {
                    namespace div {
                    }
                    type div = _T_Div;
                    namespace table {
                        namespace classes {
                        }
                        type classes = _T_Classes;
                        namespace children {
                            namespace L {
                                namespace classes {
                                }
                                type classes = _T_Classes;
                                namespace _type {
                                    namespace SG {
                                        type header = null;
                                        type body = null;
                                        type footer = null;
                                    }
                                    type SG = readonly ['header', null] | readonly ['body', null] | readonly ['footer', null];
                                }
                                type _type = _i_core._T_State_Group<null, readonly ['header', null] | readonly ['body', null] | readonly ['footer', null]>;
                                namespace rows {
                                    namespace L {
                                        namespace classes {
                                        }
                                        type classes = _T_Classes;
                                        namespace _type {
                                            namespace SG {
                                                type th = null;
                                                type td = null;
                                            }
                                            type SG = readonly ['th', null] | readonly ['td', null];
                                        }
                                        type _type = _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                                        namespace height {
                                            type O = number;
                                        }
                                        type height = _et.Optional_Value<number>;
                                        namespace cells {
                                            namespace L {
                                                namespace classes {
                                                }
                                                type classes = _T_Classes;
                                                namespace div {
                                                }
                                                type div = _T_Div;
                                            }
                                            type L = {
                                                readonly 'classes': _T_Classes;
                                                readonly 'div': _T_Div;
                                            };
                                        }
                                        type cells = _i_core._T_List<null, {
                                            readonly 'classes': _T_Classes;
                                            readonly 'div': _T_Div;
                                        }>;
                                    }
                                    type L = {
                                        readonly 'classes': _T_Classes;
                                        readonly 'type': _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                                        readonly 'height': _et.Optional_Value<number>;
                                        readonly 'cells': _i_core._T_List<null, {
                                            readonly 'classes': _T_Classes;
                                            readonly 'div': _T_Div;
                                        }>;
                                    };
                                }
                                type rows = _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes;
                                    readonly 'type': _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                                    readonly 'height': _et.Optional_Value<number>;
                                    readonly 'cells': _i_core._T_List<null, {
                                        readonly 'classes': _T_Classes;
                                        readonly 'div': _T_Div;
                                    }>;
                                }>;
                            }
                            type L = {
                                readonly 'classes': _T_Classes;
                                readonly 'type': _i_core._T_State_Group<null, readonly ['header', null] | readonly ['body', null] | readonly ['footer', null]>;
                                readonly 'rows': _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes;
                                    readonly 'type': _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                                    readonly 'height': _et.Optional_Value<number>;
                                    readonly 'cells': _i_core._T_List<null, {
                                        readonly 'classes': _T_Classes;
                                        readonly 'div': _T_Div;
                                    }>;
                                }>;
                            };
                        }
                        type children = _i_core._T_List<null, {
                            readonly 'classes': _T_Classes;
                            readonly 'type': _i_core._T_State_Group<null, readonly ['header', null] | readonly ['body', null] | readonly ['footer', null]>;
                            readonly 'rows': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes;
                                readonly 'type': _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                                readonly 'height': _et.Optional_Value<number>;
                                readonly 'cells': _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes;
                                    readonly 'div': _T_Div;
                                }>;
                            }>;
                        }>;
                    }
                    type table = {
                        readonly 'classes': _T_Classes;
                        readonly 'children': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes;
                            readonly 'type': _i_core._T_State_Group<null, readonly ['header', null] | readonly ['body', null] | readonly ['footer', null]>;
                            readonly 'rows': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes;
                                readonly 'type': _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                                readonly 'height': _et.Optional_Value<number>;
                                readonly 'cells': _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes;
                                    readonly 'div': _T_Div;
                                }>;
                            }>;
                        }>;
                    };
                    namespace span {
                    }
                    type span = _T_Span;
                    namespace label {
                        namespace classes {
                        }
                        type classes = _T_Classes;
                        type text = string;
                        namespace div {
                        }
                        type div = _T_Div;
                    }
                    type label = {
                        readonly 'classes': _T_Classes;
                        readonly 'text': string;
                        readonly 'div': _T_Div;
                    };
                    namespace img {
                        namespace classes {
                        }
                        type classes = _T_Classes;
                        type src = string;
                        type alt = string;
                        namespace width {
                            type O = number;
                        }
                        type width = _et.Optional_Value<number>;
                        namespace height {
                            type O = number;
                        }
                        type height = _et.Optional_Value<number>;
                    }
                    type img = {
                        readonly 'classes': _T_Classes;
                        readonly 'src': string;
                        readonly 'alt': string;
                        readonly 'width': _et.Optional_Value<number>;
                        readonly 'height': _et.Optional_Value<number>;
                    };
                    namespace svg {
                        namespace classes {
                        }
                        type classes = _T_Classes;
                        type content = string;
                        namespace width {
                            type O = number;
                        }
                        type width = _et.Optional_Value<number>;
                        namespace height {
                            type O = number;
                        }
                        type height = _et.Optional_Value<number>;
                    }
                    type svg = {
                        readonly 'classes': _T_Classes;
                        readonly 'content': string;
                        readonly 'width': _et.Optional_Value<number>;
                        readonly 'height': _et.Optional_Value<number>;
                    };
                }
                type SG = readonly ['div', _T_Div] | readonly [
                    'table',
                    {
                        readonly 'classes': _T_Classes;
                        readonly 'children': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes;
                            readonly 'type': _i_core._T_State_Group<null, readonly ['header', null] | readonly ['body', null] | readonly ['footer', null]>;
                            readonly 'rows': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes;
                                readonly 'type': _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                                readonly 'height': _et.Optional_Value<number>;
                                readonly 'cells': _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes;
                                    readonly 'div': _T_Div;
                                }>;
                            }>;
                        }>;
                    }
                ] | readonly ['span', _T_Span] | readonly [
                    'label',
                    {
                        readonly 'classes': _T_Classes;
                        readonly 'text': string;
                        readonly 'div': _T_Div;
                    }
                ] | readonly [
                    'img',
                    {
                        readonly 'classes': _T_Classes;
                        readonly 'src': string;
                        readonly 'alt': string;
                        readonly 'width': _et.Optional_Value<number>;
                        readonly 'height': _et.Optional_Value<number>;
                    }
                ] | readonly [
                    'svg',
                    {
                        readonly 'classes': _T_Classes;
                        readonly 'content': string;
                        readonly 'width': _et.Optional_Value<number>;
                        readonly 'height': _et.Optional_Value<number>;
                    }
                ];
            }
            type _type = _i_core._T_State_Group<null, readonly ['div', _T_Div] | readonly [
                'table',
                {
                    readonly 'classes': _T_Classes;
                    readonly 'children': _i_core._T_List<null, {
                        readonly 'classes': _T_Classes;
                        readonly 'type': _i_core._T_State_Group<null, readonly ['header', null] | readonly ['body', null] | readonly ['footer', null]>;
                        readonly 'rows': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes;
                            readonly 'type': _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                            readonly 'height': _et.Optional_Value<number>;
                            readonly 'cells': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes;
                                readonly 'div': _T_Div;
                            }>;
                        }>;
                    }>;
                }
            ] | readonly ['span', _T_Span] | readonly [
                'label',
                {
                    readonly 'classes': _T_Classes;
                    readonly 'text': string;
                    readonly 'div': _T_Div;
                }
            ] | readonly [
                'img',
                {
                    readonly 'classes': _T_Classes;
                    readonly 'src': string;
                    readonly 'alt': string;
                    readonly 'width': _et.Optional_Value<number>;
                    readonly 'height': _et.Optional_Value<number>;
                }
            ] | readonly [
                'svg',
                {
                    readonly 'classes': _T_Classes;
                    readonly 'content': string;
                    readonly 'width': _et.Optional_Value<number>;
                    readonly 'height': _et.Optional_Value<number>;
                }
            ]>;
        }
        type L = {
            readonly 'type': _i_core._T_State_Group<null, readonly ['div', _T_Div] | readonly [
                'table',
                {
                    readonly 'classes': _T_Classes;
                    readonly 'children': _i_core._T_List<null, {
                        readonly 'classes': _T_Classes;
                        readonly 'type': _i_core._T_State_Group<null, readonly ['header', null] | readonly ['body', null] | readonly ['footer', null]>;
                        readonly 'rows': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes;
                            readonly 'type': _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                            readonly 'height': _et.Optional_Value<number>;
                            readonly 'cells': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes;
                                readonly 'div': _T_Div;
                            }>;
                        }>;
                    }>;
                }
            ] | readonly ['span', _T_Span] | readonly [
                'label',
                {
                    readonly 'classes': _T_Classes;
                    readonly 'text': string;
                    readonly 'div': _T_Div;
                }
            ] | readonly [
                'img',
                {
                    readonly 'classes': _T_Classes;
                    readonly 'src': string;
                    readonly 'alt': string;
                    readonly 'width': _et.Optional_Value<number>;
                    readonly 'height': _et.Optional_Value<number>;
                }
            ] | readonly [
                'svg',
                {
                    readonly 'classes': _T_Classes;
                    readonly 'content': string;
                    readonly 'width': _et.Optional_Value<number>;
                    readonly 'height': _et.Optional_Value<number>;
                }
            ]>;
        };
    }
    type children = _i_core._T_List<null, {
        readonly 'type': _i_core._T_State_Group<null, readonly ['div', _T_Div] | readonly [
            'table',
            {
                readonly 'classes': _T_Classes;
                readonly 'children': _i_core._T_List<null, {
                    readonly 'classes': _T_Classes;
                    readonly 'type': _i_core._T_State_Group<null, readonly ['header', null] | readonly ['body', null] | readonly ['footer', null]>;
                    readonly 'rows': _i_core._T_List<null, {
                        readonly 'classes': _T_Classes;
                        readonly 'type': _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                        readonly 'height': _et.Optional_Value<number>;
                        readonly 'cells': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes;
                            readonly 'div': _T_Div;
                        }>;
                    }>;
                }>;
            }
        ] | readonly ['span', _T_Span] | readonly [
            'label',
            {
                readonly 'classes': _T_Classes;
                readonly 'text': string;
                readonly 'div': _T_Div;
            }
        ] | readonly [
            'img',
            {
                readonly 'classes': _T_Classes;
                readonly 'src': string;
                readonly 'alt': string;
                readonly 'width': _et.Optional_Value<number>;
                readonly 'height': _et.Optional_Value<number>;
            }
        ] | readonly [
            'svg',
            {
                readonly 'classes': _T_Classes;
                readonly 'content': string;
                readonly 'width': _et.Optional_Value<number>;
                readonly 'height': _et.Optional_Value<number>;
            }
        ]>;
    }>;
}
export declare namespace _T_Document {
    type css = string;
    namespace root {
    }
    type root = _T_Div;
}
export declare namespace Classes {
    type L = string;
}
export declare namespace Span {
    namespace classes {
    }
    type classes = _T_Classes;
    namespace title {
        type O = string;
    }
    type title = _et.Optional_Value<string>;
    namespace children {
        namespace L {
            namespace classes {
            }
            type classes = _T_Classes;
            namespace _type {
                namespace SG {
                    namespace span {
                    }
                    type span = _T_Span;
                    namespace a {
                        type text = string;
                        type href = string;
                    }
                    type a = {
                        readonly 'text': string;
                        readonly 'href': string;
                    };
                    namespace p {
                        type text = string;
                    }
                    type p = {
                        readonly 'text': string;
                    };
                }
                type SG = readonly ['span', _T_Span] | readonly [
                    'a',
                    {
                        readonly 'text': string;
                        readonly 'href': string;
                    }
                ] | readonly [
                    'p',
                    {
                        readonly 'text': string;
                    }
                ];
            }
            type _type = _i_core._T_State_Group<null, readonly ['span', _T_Span] | readonly [
                'a',
                {
                    readonly 'text': string;
                    readonly 'href': string;
                }
            ] | readonly [
                'p',
                {
                    readonly 'text': string;
                }
            ]>;
        }
        type L = {
            readonly 'classes': _T_Classes;
            readonly 'type': _i_core._T_State_Group<null, readonly ['span', _T_Span] | readonly [
                'a',
                {
                    readonly 'text': string;
                    readonly 'href': string;
                }
            ] | readonly [
                'p',
                {
                    readonly 'text': string;
                }
            ]>;
        };
    }
    type children = _i_core._T_List<null, {
        readonly 'classes': _T_Classes;
        readonly 'type': _i_core._T_State_Group<null, readonly ['span', _T_Span] | readonly [
            'a',
            {
                readonly 'text': string;
                readonly 'href': string;
            }
        ] | readonly [
            'p',
            {
                readonly 'text': string;
            }
        ]>;
    }>;
}
export declare namespace Div {
    namespace classes {
    }
    type classes = _T_Classes;
    namespace width {
        type O = number;
    }
    type width = _et.Optional_Value<number>;
    namespace height {
        type O = number;
    }
    type height = _et.Optional_Value<number>;
    namespace children {
        namespace L {
            namespace _type {
                namespace SG {
                    namespace div {
                    }
                    type div = _T_Div;
                    namespace table {
                        namespace classes {
                        }
                        type classes = _T_Classes;
                        namespace children {
                            namespace L {
                                namespace classes {
                                }
                                type classes = _T_Classes;
                                namespace _type {
                                    namespace SG {
                                        type header = null;
                                        type body = null;
                                        type footer = null;
                                    }
                                    type SG = readonly ['header', null] | readonly ['body', null] | readonly ['footer', null];
                                }
                                type _type = _i_core._T_State_Group<null, readonly ['header', null] | readonly ['body', null] | readonly ['footer', null]>;
                                namespace rows {
                                    namespace L {
                                        namespace classes {
                                        }
                                        type classes = _T_Classes;
                                        namespace _type {
                                            namespace SG {
                                                type th = null;
                                                type td = null;
                                            }
                                            type SG = readonly ['th', null] | readonly ['td', null];
                                        }
                                        type _type = _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                                        namespace height {
                                            type O = number;
                                        }
                                        type height = _et.Optional_Value<number>;
                                        namespace cells {
                                            namespace L {
                                                namespace classes {
                                                }
                                                type classes = _T_Classes;
                                                namespace div {
                                                }
                                                type div = _T_Div;
                                            }
                                            type L = {
                                                readonly 'classes': _T_Classes;
                                                readonly 'div': _T_Div;
                                            };
                                        }
                                        type cells = _i_core._T_List<null, {
                                            readonly 'classes': _T_Classes;
                                            readonly 'div': _T_Div;
                                        }>;
                                    }
                                    type L = {
                                        readonly 'classes': _T_Classes;
                                        readonly 'type': _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                                        readonly 'height': _et.Optional_Value<number>;
                                        readonly 'cells': _i_core._T_List<null, {
                                            readonly 'classes': _T_Classes;
                                            readonly 'div': _T_Div;
                                        }>;
                                    };
                                }
                                type rows = _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes;
                                    readonly 'type': _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                                    readonly 'height': _et.Optional_Value<number>;
                                    readonly 'cells': _i_core._T_List<null, {
                                        readonly 'classes': _T_Classes;
                                        readonly 'div': _T_Div;
                                    }>;
                                }>;
                            }
                            type L = {
                                readonly 'classes': _T_Classes;
                                readonly 'type': _i_core._T_State_Group<null, readonly ['header', null] | readonly ['body', null] | readonly ['footer', null]>;
                                readonly 'rows': _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes;
                                    readonly 'type': _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                                    readonly 'height': _et.Optional_Value<number>;
                                    readonly 'cells': _i_core._T_List<null, {
                                        readonly 'classes': _T_Classes;
                                        readonly 'div': _T_Div;
                                    }>;
                                }>;
                            };
                        }
                        type children = _i_core._T_List<null, {
                            readonly 'classes': _T_Classes;
                            readonly 'type': _i_core._T_State_Group<null, readonly ['header', null] | readonly ['body', null] | readonly ['footer', null]>;
                            readonly 'rows': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes;
                                readonly 'type': _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                                readonly 'height': _et.Optional_Value<number>;
                                readonly 'cells': _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes;
                                    readonly 'div': _T_Div;
                                }>;
                            }>;
                        }>;
                    }
                    type table = {
                        readonly 'classes': _T_Classes;
                        readonly 'children': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes;
                            readonly 'type': _i_core._T_State_Group<null, readonly ['header', null] | readonly ['body', null] | readonly ['footer', null]>;
                            readonly 'rows': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes;
                                readonly 'type': _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                                readonly 'height': _et.Optional_Value<number>;
                                readonly 'cells': _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes;
                                    readonly 'div': _T_Div;
                                }>;
                            }>;
                        }>;
                    };
                    namespace span {
                    }
                    type span = _T_Span;
                    namespace label {
                        namespace classes {
                        }
                        type classes = _T_Classes;
                        type text = string;
                        namespace div {
                        }
                        type div = _T_Div;
                    }
                    type label = {
                        readonly 'classes': _T_Classes;
                        readonly 'text': string;
                        readonly 'div': _T_Div;
                    };
                    namespace img {
                        namespace classes {
                        }
                        type classes = _T_Classes;
                        type src = string;
                        type alt = string;
                        namespace width {
                            type O = number;
                        }
                        type width = _et.Optional_Value<number>;
                        namespace height {
                            type O = number;
                        }
                        type height = _et.Optional_Value<number>;
                    }
                    type img = {
                        readonly 'classes': _T_Classes;
                        readonly 'src': string;
                        readonly 'alt': string;
                        readonly 'width': _et.Optional_Value<number>;
                        readonly 'height': _et.Optional_Value<number>;
                    };
                    namespace svg {
                        namespace classes {
                        }
                        type classes = _T_Classes;
                        type content = string;
                        namespace width {
                            type O = number;
                        }
                        type width = _et.Optional_Value<number>;
                        namespace height {
                            type O = number;
                        }
                        type height = _et.Optional_Value<number>;
                    }
                    type svg = {
                        readonly 'classes': _T_Classes;
                        readonly 'content': string;
                        readonly 'width': _et.Optional_Value<number>;
                        readonly 'height': _et.Optional_Value<number>;
                    };
                }
                type SG = readonly ['div', _T_Div] | readonly [
                    'table',
                    {
                        readonly 'classes': _T_Classes;
                        readonly 'children': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes;
                            readonly 'type': _i_core._T_State_Group<null, readonly ['header', null] | readonly ['body', null] | readonly ['footer', null]>;
                            readonly 'rows': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes;
                                readonly 'type': _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                                readonly 'height': _et.Optional_Value<number>;
                                readonly 'cells': _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes;
                                    readonly 'div': _T_Div;
                                }>;
                            }>;
                        }>;
                    }
                ] | readonly ['span', _T_Span] | readonly [
                    'label',
                    {
                        readonly 'classes': _T_Classes;
                        readonly 'text': string;
                        readonly 'div': _T_Div;
                    }
                ] | readonly [
                    'img',
                    {
                        readonly 'classes': _T_Classes;
                        readonly 'src': string;
                        readonly 'alt': string;
                        readonly 'width': _et.Optional_Value<number>;
                        readonly 'height': _et.Optional_Value<number>;
                    }
                ] | readonly [
                    'svg',
                    {
                        readonly 'classes': _T_Classes;
                        readonly 'content': string;
                        readonly 'width': _et.Optional_Value<number>;
                        readonly 'height': _et.Optional_Value<number>;
                    }
                ];
            }
            type _type = _i_core._T_State_Group<null, readonly ['div', _T_Div] | readonly [
                'table',
                {
                    readonly 'classes': _T_Classes;
                    readonly 'children': _i_core._T_List<null, {
                        readonly 'classes': _T_Classes;
                        readonly 'type': _i_core._T_State_Group<null, readonly ['header', null] | readonly ['body', null] | readonly ['footer', null]>;
                        readonly 'rows': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes;
                            readonly 'type': _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                            readonly 'height': _et.Optional_Value<number>;
                            readonly 'cells': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes;
                                readonly 'div': _T_Div;
                            }>;
                        }>;
                    }>;
                }
            ] | readonly ['span', _T_Span] | readonly [
                'label',
                {
                    readonly 'classes': _T_Classes;
                    readonly 'text': string;
                    readonly 'div': _T_Div;
                }
            ] | readonly [
                'img',
                {
                    readonly 'classes': _T_Classes;
                    readonly 'src': string;
                    readonly 'alt': string;
                    readonly 'width': _et.Optional_Value<number>;
                    readonly 'height': _et.Optional_Value<number>;
                }
            ] | readonly [
                'svg',
                {
                    readonly 'classes': _T_Classes;
                    readonly 'content': string;
                    readonly 'width': _et.Optional_Value<number>;
                    readonly 'height': _et.Optional_Value<number>;
                }
            ]>;
        }
        type L = {
            readonly 'type': _i_core._T_State_Group<null, readonly ['div', _T_Div] | readonly [
                'table',
                {
                    readonly 'classes': _T_Classes;
                    readonly 'children': _i_core._T_List<null, {
                        readonly 'classes': _T_Classes;
                        readonly 'type': _i_core._T_State_Group<null, readonly ['header', null] | readonly ['body', null] | readonly ['footer', null]>;
                        readonly 'rows': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes;
                            readonly 'type': _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                            readonly 'height': _et.Optional_Value<number>;
                            readonly 'cells': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes;
                                readonly 'div': _T_Div;
                            }>;
                        }>;
                    }>;
                }
            ] | readonly ['span', _T_Span] | readonly [
                'label',
                {
                    readonly 'classes': _T_Classes;
                    readonly 'text': string;
                    readonly 'div': _T_Div;
                }
            ] | readonly [
                'img',
                {
                    readonly 'classes': _T_Classes;
                    readonly 'src': string;
                    readonly 'alt': string;
                    readonly 'width': _et.Optional_Value<number>;
                    readonly 'height': _et.Optional_Value<number>;
                }
            ] | readonly [
                'svg',
                {
                    readonly 'classes': _T_Classes;
                    readonly 'content': string;
                    readonly 'width': _et.Optional_Value<number>;
                    readonly 'height': _et.Optional_Value<number>;
                }
            ]>;
        };
    }
    type children = _i_core._T_List<null, {
        readonly 'type': _i_core._T_State_Group<null, readonly ['div', _T_Div] | readonly [
            'table',
            {
                readonly 'classes': _T_Classes;
                readonly 'children': _i_core._T_List<null, {
                    readonly 'classes': _T_Classes;
                    readonly 'type': _i_core._T_State_Group<null, readonly ['header', null] | readonly ['body', null] | readonly ['footer', null]>;
                    readonly 'rows': _i_core._T_List<null, {
                        readonly 'classes': _T_Classes;
                        readonly 'type': _i_core._T_State_Group<null, readonly ['th', null] | readonly ['td', null]>;
                        readonly 'height': _et.Optional_Value<number>;
                        readonly 'cells': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes;
                            readonly 'div': _T_Div;
                        }>;
                    }>;
                }>;
            }
        ] | readonly ['span', _T_Span] | readonly [
            'label',
            {
                readonly 'classes': _T_Classes;
                readonly 'text': string;
                readonly 'div': _T_Div;
            }
        ] | readonly [
            'img',
            {
                readonly 'classes': _T_Classes;
                readonly 'src': string;
                readonly 'alt': string;
                readonly 'width': _et.Optional_Value<number>;
                readonly 'height': _et.Optional_Value<number>;
            }
        ] | readonly [
            'svg',
            {
                readonly 'classes': _T_Classes;
                readonly 'content': string;
                readonly 'width': _et.Optional_Value<number>;
                readonly 'height': _et.Optional_Value<number>;
            }
        ]>;
    }>;
}
export declare namespace Document {
    type css = string;
    namespace root {
    }
    type root = _T_Div;
}
