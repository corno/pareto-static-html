import * as _et from 'exupery-core-types'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_Classes = _i_core._T_List<null, string>

export type _T_Span = {
    readonly 'classes': _T_Classes
    readonly 'title': _et.Optional_Value<string>
    readonly 'children': _i_core._T_List<null, {
        readonly 'classes': _T_Classes
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['span', _T_Span]
            | readonly ['a', {
                readonly 'text': string
                readonly 'href': string
            }]
            | readonly ['p', {
                readonly 'text': string
            }]
        >
    }>
}

export type _T_Div = {
    readonly 'classes': _T_Classes
    readonly 'width': _et.Optional_Value<number>
    readonly 'height': _et.Optional_Value<number>
    readonly 'children': _i_core._T_List<null, {
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['div', _T_Div]
            | readonly ['table', {
                readonly 'classes': _T_Classes
                readonly 'children': _i_core._T_List<null, {
                    readonly 'classes': _T_Classes
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['header', null]
                        | readonly ['body', null]
                        | readonly ['footer', null]
                    >
                    readonly 'rows': _i_core._T_List<null, {
                        readonly 'classes': _T_Classes
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['th', null]
                            | readonly ['td', null]
                        >
                        readonly 'height': _et.Optional_Value<number>
                        readonly 'cells': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes
                            readonly 'div': _T_Div
                        }>
                    }>
                }>
            }]
            | readonly ['span', _T_Span]
            | readonly ['label', {
                readonly 'classes': _T_Classes
                readonly 'text': string
                readonly 'div': _T_Div
            }]
            | readonly ['img', {
                readonly 'classes': _T_Classes
                readonly 'src': string
                readonly 'alt': string
                readonly 'width': _et.Optional_Value<number>
                readonly 'height': _et.Optional_Value<number>
            }]
            | readonly ['svg', {
                readonly 'classes': _T_Classes
                readonly 'content': string
                readonly 'width': _et.Optional_Value<number>
                readonly 'height': _et.Optional_Value<number>
            }]
        >
    }>
}

export type _T_Document = {
    readonly 'css': string
    readonly 'root': _T_Div
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Classes = _T_Classes

export type Span = _T_Span

export type Div = _T_Div

export type Document = _T_Document

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Classes {
    export type L = string
}

export namespace _T_Span {
    
    export namespace classes {
    }
    export type classes = _T_Classes
    
    export namespace title {
        export type O = string
    }
    export type title = _et.Optional_Value<string>
    
    export namespace children {
        
        export namespace L {
            
            export namespace classes {
            }
            export type classes = _T_Classes
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace span {
                    }
                    export type span = _T_Span
                    
                    export namespace a {
                        export type text = string
                        export type href = string
                    }
                    export type a = {
                        readonly 'text': string
                        readonly 'href': string
                    }
                    
                    export namespace p {
                        export type text = string
                    }
                    export type p = {
                        readonly 'text': string
                    }
                }
                export type SG = 
                    | readonly ['span', _T_Span]
                    | readonly ['a', {
                        readonly 'text': string
                        readonly 'href': string
                    }]
                    | readonly ['p', {
                        readonly 'text': string
                    }]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['span', _T_Span]
                | readonly ['a', {
                    readonly 'text': string
                    readonly 'href': string
                }]
                | readonly ['p', {
                    readonly 'text': string
                }]
            >
        }
        export type L = {
            readonly 'classes': _T_Classes
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['span', _T_Span]
                | readonly ['a', {
                    readonly 'text': string
                    readonly 'href': string
                }]
                | readonly ['p', {
                    readonly 'text': string
                }]
            >
        }
    }
    export type children = _i_core._T_List<null, {
        readonly 'classes': _T_Classes
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['span', _T_Span]
            | readonly ['a', {
                readonly 'text': string
                readonly 'href': string
            }]
            | readonly ['p', {
                readonly 'text': string
            }]
        >
    }>
}

export namespace _T_Div {
    
    export namespace classes {
    }
    export type classes = _T_Classes
    
    export namespace width {
        export type O = number
    }
    export type width = _et.Optional_Value<number>
    
    export namespace height {
        export type O = number
    }
    export type height = _et.Optional_Value<number>
    
    export namespace children {
        
        export namespace L {
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace div {
                    }
                    export type div = _T_Div
                    
                    export namespace table {
                        
                        export namespace classes {
                        }
                        export type classes = _T_Classes
                        
                        export namespace children {
                            
                            export namespace L {
                                
                                export namespace classes {
                                }
                                export type classes = _T_Classes
                                
                                export namespace _type {
                                    
                                    export namespace SG {
                                        export type header = null
                                        export type body = null
                                        export type footer = null
                                    }
                                    export type SG = 
                                        | readonly ['header', null]
                                        | readonly ['body', null]
                                        | readonly ['footer', null]
                                }
                                export type _type = _i_core._T_State_Group<null, 
                                    | readonly ['header', null]
                                    | readonly ['body', null]
                                    | readonly ['footer', null]
                                >
                                
                                export namespace rows {
                                    
                                    export namespace L {
                                        
                                        export namespace classes {
                                        }
                                        export type classes = _T_Classes
                                        
                                        export namespace _type {
                                            
                                            export namespace SG {
                                                export type th = null
                                                export type td = null
                                            }
                                            export type SG = 
                                                | readonly ['th', null]
                                                | readonly ['td', null]
                                        }
                                        export type _type = _i_core._T_State_Group<null, 
                                            | readonly ['th', null]
                                            | readonly ['td', null]
                                        >
                                        
                                        export namespace height {
                                            export type O = number
                                        }
                                        export type height = _et.Optional_Value<number>
                                        
                                        export namespace cells {
                                            
                                            export namespace L {
                                                
                                                export namespace classes {
                                                }
                                                export type classes = _T_Classes
                                                
                                                export namespace div {
                                                }
                                                export type div = _T_Div
                                            }
                                            export type L = {
                                                readonly 'classes': _T_Classes
                                                readonly 'div': _T_Div
                                            }
                                        }
                                        export type cells = _i_core._T_List<null, {
                                            readonly 'classes': _T_Classes
                                            readonly 'div': _T_Div
                                        }>
                                    }
                                    export type L = {
                                        readonly 'classes': _T_Classes
                                        readonly 'type': _i_core._T_State_Group<null, 
                                            | readonly ['th', null]
                                            | readonly ['td', null]
                                        >
                                        readonly 'height': _et.Optional_Value<number>
                                        readonly 'cells': _i_core._T_List<null, {
                                            readonly 'classes': _T_Classes
                                            readonly 'div': _T_Div
                                        }>
                                    }
                                }
                                export type rows = _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes
                                    readonly 'type': _i_core._T_State_Group<null, 
                                        | readonly ['th', null]
                                        | readonly ['td', null]
                                    >
                                    readonly 'height': _et.Optional_Value<number>
                                    readonly 'cells': _i_core._T_List<null, {
                                        readonly 'classes': _T_Classes
                                        readonly 'div': _T_Div
                                    }>
                                }>
                            }
                            export type L = {
                                readonly 'classes': _T_Classes
                                readonly 'type': _i_core._T_State_Group<null, 
                                    | readonly ['header', null]
                                    | readonly ['body', null]
                                    | readonly ['footer', null]
                                >
                                readonly 'rows': _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes
                                    readonly 'type': _i_core._T_State_Group<null, 
                                        | readonly ['th', null]
                                        | readonly ['td', null]
                                    >
                                    readonly 'height': _et.Optional_Value<number>
                                    readonly 'cells': _i_core._T_List<null, {
                                        readonly 'classes': _T_Classes
                                        readonly 'div': _T_Div
                                    }>
                                }>
                            }
                        }
                        export type children = _i_core._T_List<null, {
                            readonly 'classes': _T_Classes
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['header', null]
                                | readonly ['body', null]
                                | readonly ['footer', null]
                            >
                            readonly 'rows': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes
                                readonly 'type': _i_core._T_State_Group<null, 
                                    | readonly ['th', null]
                                    | readonly ['td', null]
                                >
                                readonly 'height': _et.Optional_Value<number>
                                readonly 'cells': _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes
                                    readonly 'div': _T_Div
                                }>
                            }>
                        }>
                    }
                    export type table = {
                        readonly 'classes': _T_Classes
                        readonly 'children': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['header', null]
                                | readonly ['body', null]
                                | readonly ['footer', null]
                            >
                            readonly 'rows': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes
                                readonly 'type': _i_core._T_State_Group<null, 
                                    | readonly ['th', null]
                                    | readonly ['td', null]
                                >
                                readonly 'height': _et.Optional_Value<number>
                                readonly 'cells': _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes
                                    readonly 'div': _T_Div
                                }>
                            }>
                        }>
                    }
                    
                    export namespace span {
                    }
                    export type span = _T_Span
                    
                    export namespace label {
                        
                        export namespace classes {
                        }
                        export type classes = _T_Classes
                        export type text = string
                        
                        export namespace div {
                        }
                        export type div = _T_Div
                    }
                    export type label = {
                        readonly 'classes': _T_Classes
                        readonly 'text': string
                        readonly 'div': _T_Div
                    }
                    
                    export namespace img {
                        
                        export namespace classes {
                        }
                        export type classes = _T_Classes
                        export type src = string
                        export type alt = string
                        
                        export namespace width {
                            export type O = number
                        }
                        export type width = _et.Optional_Value<number>
                        
                        export namespace height {
                            export type O = number
                        }
                        export type height = _et.Optional_Value<number>
                    }
                    export type img = {
                        readonly 'classes': _T_Classes
                        readonly 'src': string
                        readonly 'alt': string
                        readonly 'width': _et.Optional_Value<number>
                        readonly 'height': _et.Optional_Value<number>
                    }
                    
                    export namespace svg {
                        
                        export namespace classes {
                        }
                        export type classes = _T_Classes
                        export type content = string
                        
                        export namespace width {
                            export type O = number
                        }
                        export type width = _et.Optional_Value<number>
                        
                        export namespace height {
                            export type O = number
                        }
                        export type height = _et.Optional_Value<number>
                    }
                    export type svg = {
                        readonly 'classes': _T_Classes
                        readonly 'content': string
                        readonly 'width': _et.Optional_Value<number>
                        readonly 'height': _et.Optional_Value<number>
                    }
                }
                export type SG = 
                    | readonly ['div', _T_Div]
                    | readonly ['table', {
                        readonly 'classes': _T_Classes
                        readonly 'children': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['header', null]
                                | readonly ['body', null]
                                | readonly ['footer', null]
                            >
                            readonly 'rows': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes
                                readonly 'type': _i_core._T_State_Group<null, 
                                    | readonly ['th', null]
                                    | readonly ['td', null]
                                >
                                readonly 'height': _et.Optional_Value<number>
                                readonly 'cells': _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes
                                    readonly 'div': _T_Div
                                }>
                            }>
                        }>
                    }]
                    | readonly ['span', _T_Span]
                    | readonly ['label', {
                        readonly 'classes': _T_Classes
                        readonly 'text': string
                        readonly 'div': _T_Div
                    }]
                    | readonly ['img', {
                        readonly 'classes': _T_Classes
                        readonly 'src': string
                        readonly 'alt': string
                        readonly 'width': _et.Optional_Value<number>
                        readonly 'height': _et.Optional_Value<number>
                    }]
                    | readonly ['svg', {
                        readonly 'classes': _T_Classes
                        readonly 'content': string
                        readonly 'width': _et.Optional_Value<number>
                        readonly 'height': _et.Optional_Value<number>
                    }]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['div', _T_Div]
                | readonly ['table', {
                    readonly 'classes': _T_Classes
                    readonly 'children': _i_core._T_List<null, {
                        readonly 'classes': _T_Classes
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['header', null]
                            | readonly ['body', null]
                            | readonly ['footer', null]
                        >
                        readonly 'rows': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['th', null]
                                | readonly ['td', null]
                            >
                            readonly 'height': _et.Optional_Value<number>
                            readonly 'cells': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes
                                readonly 'div': _T_Div
                            }>
                        }>
                    }>
                }]
                | readonly ['span', _T_Span]
                | readonly ['label', {
                    readonly 'classes': _T_Classes
                    readonly 'text': string
                    readonly 'div': _T_Div
                }]
                | readonly ['img', {
                    readonly 'classes': _T_Classes
                    readonly 'src': string
                    readonly 'alt': string
                    readonly 'width': _et.Optional_Value<number>
                    readonly 'height': _et.Optional_Value<number>
                }]
                | readonly ['svg', {
                    readonly 'classes': _T_Classes
                    readonly 'content': string
                    readonly 'width': _et.Optional_Value<number>
                    readonly 'height': _et.Optional_Value<number>
                }]
            >
        }
        export type L = {
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['div', _T_Div]
                | readonly ['table', {
                    readonly 'classes': _T_Classes
                    readonly 'children': _i_core._T_List<null, {
                        readonly 'classes': _T_Classes
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['header', null]
                            | readonly ['body', null]
                            | readonly ['footer', null]
                        >
                        readonly 'rows': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['th', null]
                                | readonly ['td', null]
                            >
                            readonly 'height': _et.Optional_Value<number>
                            readonly 'cells': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes
                                readonly 'div': _T_Div
                            }>
                        }>
                    }>
                }]
                | readonly ['span', _T_Span]
                | readonly ['label', {
                    readonly 'classes': _T_Classes
                    readonly 'text': string
                    readonly 'div': _T_Div
                }]
                | readonly ['img', {
                    readonly 'classes': _T_Classes
                    readonly 'src': string
                    readonly 'alt': string
                    readonly 'width': _et.Optional_Value<number>
                    readonly 'height': _et.Optional_Value<number>
                }]
                | readonly ['svg', {
                    readonly 'classes': _T_Classes
                    readonly 'content': string
                    readonly 'width': _et.Optional_Value<number>
                    readonly 'height': _et.Optional_Value<number>
                }]
            >
        }
    }
    export type children = _i_core._T_List<null, {
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['div', _T_Div]
            | readonly ['table', {
                readonly 'classes': _T_Classes
                readonly 'children': _i_core._T_List<null, {
                    readonly 'classes': _T_Classes
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['header', null]
                        | readonly ['body', null]
                        | readonly ['footer', null]
                    >
                    readonly 'rows': _i_core._T_List<null, {
                        readonly 'classes': _T_Classes
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['th', null]
                            | readonly ['td', null]
                        >
                        readonly 'height': _et.Optional_Value<number>
                        readonly 'cells': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes
                            readonly 'div': _T_Div
                        }>
                    }>
                }>
            }]
            | readonly ['span', _T_Span]
            | readonly ['label', {
                readonly 'classes': _T_Classes
                readonly 'text': string
                readonly 'div': _T_Div
            }]
            | readonly ['img', {
                readonly 'classes': _T_Classes
                readonly 'src': string
                readonly 'alt': string
                readonly 'width': _et.Optional_Value<number>
                readonly 'height': _et.Optional_Value<number>
            }]
            | readonly ['svg', {
                readonly 'classes': _T_Classes
                readonly 'content': string
                readonly 'width': _et.Optional_Value<number>
                readonly 'height': _et.Optional_Value<number>
            }]
        >
    }>
}

export namespace _T_Document {
    export type css = string
    
    export namespace root {
    }
    export type root = _T_Div
}

// *** ALIASES FOR NESTED TYPES

export namespace Classes {
    export type L = string
}

export namespace Span {
    
    export namespace classes {
    }
    export type classes = _T_Classes
    
    export namespace title {
        export type O = string
    }
    export type title = _et.Optional_Value<string>
    
    export namespace children {
        
        export namespace L {
            
            export namespace classes {
            }
            export type classes = _T_Classes
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace span {
                    }
                    export type span = _T_Span
                    
                    export namespace a {
                        export type text = string
                        export type href = string
                    }
                    export type a = {
                        readonly 'text': string
                        readonly 'href': string
                    }
                    
                    export namespace p {
                        export type text = string
                    }
                    export type p = {
                        readonly 'text': string
                    }
                }
                export type SG = 
                    | readonly ['span', _T_Span]
                    | readonly ['a', {
                        readonly 'text': string
                        readonly 'href': string
                    }]
                    | readonly ['p', {
                        readonly 'text': string
                    }]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['span', _T_Span]
                | readonly ['a', {
                    readonly 'text': string
                    readonly 'href': string
                }]
                | readonly ['p', {
                    readonly 'text': string
                }]
            >
        }
        export type L = {
            readonly 'classes': _T_Classes
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['span', _T_Span]
                | readonly ['a', {
                    readonly 'text': string
                    readonly 'href': string
                }]
                | readonly ['p', {
                    readonly 'text': string
                }]
            >
        }
    }
    export type children = _i_core._T_List<null, {
        readonly 'classes': _T_Classes
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['span', _T_Span]
            | readonly ['a', {
                readonly 'text': string
                readonly 'href': string
            }]
            | readonly ['p', {
                readonly 'text': string
            }]
        >
    }>
}

export namespace Div {
    
    export namespace classes {
    }
    export type classes = _T_Classes
    
    export namespace width {
        export type O = number
    }
    export type width = _et.Optional_Value<number>
    
    export namespace height {
        export type O = number
    }
    export type height = _et.Optional_Value<number>
    
    export namespace children {
        
        export namespace L {
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace div {
                    }
                    export type div = _T_Div
                    
                    export namespace table {
                        
                        export namespace classes {
                        }
                        export type classes = _T_Classes
                        
                        export namespace children {
                            
                            export namespace L {
                                
                                export namespace classes {
                                }
                                export type classes = _T_Classes
                                
                                export namespace _type {
                                    
                                    export namespace SG {
                                        export type header = null
                                        export type body = null
                                        export type footer = null
                                    }
                                    export type SG = 
                                        | readonly ['header', null]
                                        | readonly ['body', null]
                                        | readonly ['footer', null]
                                }
                                export type _type = _i_core._T_State_Group<null, 
                                    | readonly ['header', null]
                                    | readonly ['body', null]
                                    | readonly ['footer', null]
                                >
                                
                                export namespace rows {
                                    
                                    export namespace L {
                                        
                                        export namespace classes {
                                        }
                                        export type classes = _T_Classes
                                        
                                        export namespace _type {
                                            
                                            export namespace SG {
                                                export type th = null
                                                export type td = null
                                            }
                                            export type SG = 
                                                | readonly ['th', null]
                                                | readonly ['td', null]
                                        }
                                        export type _type = _i_core._T_State_Group<null, 
                                            | readonly ['th', null]
                                            | readonly ['td', null]
                                        >
                                        
                                        export namespace height {
                                            export type O = number
                                        }
                                        export type height = _et.Optional_Value<number>
                                        
                                        export namespace cells {
                                            
                                            export namespace L {
                                                
                                                export namespace classes {
                                                }
                                                export type classes = _T_Classes
                                                
                                                export namespace div {
                                                }
                                                export type div = _T_Div
                                            }
                                            export type L = {
                                                readonly 'classes': _T_Classes
                                                readonly 'div': _T_Div
                                            }
                                        }
                                        export type cells = _i_core._T_List<null, {
                                            readonly 'classes': _T_Classes
                                            readonly 'div': _T_Div
                                        }>
                                    }
                                    export type L = {
                                        readonly 'classes': _T_Classes
                                        readonly 'type': _i_core._T_State_Group<null, 
                                            | readonly ['th', null]
                                            | readonly ['td', null]
                                        >
                                        readonly 'height': _et.Optional_Value<number>
                                        readonly 'cells': _i_core._T_List<null, {
                                            readonly 'classes': _T_Classes
                                            readonly 'div': _T_Div
                                        }>
                                    }
                                }
                                export type rows = _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes
                                    readonly 'type': _i_core._T_State_Group<null, 
                                        | readonly ['th', null]
                                        | readonly ['td', null]
                                    >
                                    readonly 'height': _et.Optional_Value<number>
                                    readonly 'cells': _i_core._T_List<null, {
                                        readonly 'classes': _T_Classes
                                        readonly 'div': _T_Div
                                    }>
                                }>
                            }
                            export type L = {
                                readonly 'classes': _T_Classes
                                readonly 'type': _i_core._T_State_Group<null, 
                                    | readonly ['header', null]
                                    | readonly ['body', null]
                                    | readonly ['footer', null]
                                >
                                readonly 'rows': _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes
                                    readonly 'type': _i_core._T_State_Group<null, 
                                        | readonly ['th', null]
                                        | readonly ['td', null]
                                    >
                                    readonly 'height': _et.Optional_Value<number>
                                    readonly 'cells': _i_core._T_List<null, {
                                        readonly 'classes': _T_Classes
                                        readonly 'div': _T_Div
                                    }>
                                }>
                            }
                        }
                        export type children = _i_core._T_List<null, {
                            readonly 'classes': _T_Classes
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['header', null]
                                | readonly ['body', null]
                                | readonly ['footer', null]
                            >
                            readonly 'rows': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes
                                readonly 'type': _i_core._T_State_Group<null, 
                                    | readonly ['th', null]
                                    | readonly ['td', null]
                                >
                                readonly 'height': _et.Optional_Value<number>
                                readonly 'cells': _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes
                                    readonly 'div': _T_Div
                                }>
                            }>
                        }>
                    }
                    export type table = {
                        readonly 'classes': _T_Classes
                        readonly 'children': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['header', null]
                                | readonly ['body', null]
                                | readonly ['footer', null]
                            >
                            readonly 'rows': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes
                                readonly 'type': _i_core._T_State_Group<null, 
                                    | readonly ['th', null]
                                    | readonly ['td', null]
                                >
                                readonly 'height': _et.Optional_Value<number>
                                readonly 'cells': _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes
                                    readonly 'div': _T_Div
                                }>
                            }>
                        }>
                    }
                    
                    export namespace span {
                    }
                    export type span = _T_Span
                    
                    export namespace label {
                        
                        export namespace classes {
                        }
                        export type classes = _T_Classes
                        export type text = string
                        
                        export namespace div {
                        }
                        export type div = _T_Div
                    }
                    export type label = {
                        readonly 'classes': _T_Classes
                        readonly 'text': string
                        readonly 'div': _T_Div
                    }
                    
                    export namespace img {
                        
                        export namespace classes {
                        }
                        export type classes = _T_Classes
                        export type src = string
                        export type alt = string
                        
                        export namespace width {
                            export type O = number
                        }
                        export type width = _et.Optional_Value<number>
                        
                        export namespace height {
                            export type O = number
                        }
                        export type height = _et.Optional_Value<number>
                    }
                    export type img = {
                        readonly 'classes': _T_Classes
                        readonly 'src': string
                        readonly 'alt': string
                        readonly 'width': _et.Optional_Value<number>
                        readonly 'height': _et.Optional_Value<number>
                    }
                    
                    export namespace svg {
                        
                        export namespace classes {
                        }
                        export type classes = _T_Classes
                        export type content = string
                        
                        export namespace width {
                            export type O = number
                        }
                        export type width = _et.Optional_Value<number>
                        
                        export namespace height {
                            export type O = number
                        }
                        export type height = _et.Optional_Value<number>
                    }
                    export type svg = {
                        readonly 'classes': _T_Classes
                        readonly 'content': string
                        readonly 'width': _et.Optional_Value<number>
                        readonly 'height': _et.Optional_Value<number>
                    }
                }
                export type SG = 
                    | readonly ['div', _T_Div]
                    | readonly ['table', {
                        readonly 'classes': _T_Classes
                        readonly 'children': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['header', null]
                                | readonly ['body', null]
                                | readonly ['footer', null]
                            >
                            readonly 'rows': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes
                                readonly 'type': _i_core._T_State_Group<null, 
                                    | readonly ['th', null]
                                    | readonly ['td', null]
                                >
                                readonly 'height': _et.Optional_Value<number>
                                readonly 'cells': _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes
                                    readonly 'div': _T_Div
                                }>
                            }>
                        }>
                    }]
                    | readonly ['span', _T_Span]
                    | readonly ['label', {
                        readonly 'classes': _T_Classes
                        readonly 'text': string
                        readonly 'div': _T_Div
                    }]
                    | readonly ['img', {
                        readonly 'classes': _T_Classes
                        readonly 'src': string
                        readonly 'alt': string
                        readonly 'width': _et.Optional_Value<number>
                        readonly 'height': _et.Optional_Value<number>
                    }]
                    | readonly ['svg', {
                        readonly 'classes': _T_Classes
                        readonly 'content': string
                        readonly 'width': _et.Optional_Value<number>
                        readonly 'height': _et.Optional_Value<number>
                    }]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['div', _T_Div]
                | readonly ['table', {
                    readonly 'classes': _T_Classes
                    readonly 'children': _i_core._T_List<null, {
                        readonly 'classes': _T_Classes
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['header', null]
                            | readonly ['body', null]
                            | readonly ['footer', null]
                        >
                        readonly 'rows': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['th', null]
                                | readonly ['td', null]
                            >
                            readonly 'height': _et.Optional_Value<number>
                            readonly 'cells': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes
                                readonly 'div': _T_Div
                            }>
                        }>
                    }>
                }]
                | readonly ['span', _T_Span]
                | readonly ['label', {
                    readonly 'classes': _T_Classes
                    readonly 'text': string
                    readonly 'div': _T_Div
                }]
                | readonly ['img', {
                    readonly 'classes': _T_Classes
                    readonly 'src': string
                    readonly 'alt': string
                    readonly 'width': _et.Optional_Value<number>
                    readonly 'height': _et.Optional_Value<number>
                }]
                | readonly ['svg', {
                    readonly 'classes': _T_Classes
                    readonly 'content': string
                    readonly 'width': _et.Optional_Value<number>
                    readonly 'height': _et.Optional_Value<number>
                }]
            >
        }
        export type L = {
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['div', _T_Div]
                | readonly ['table', {
                    readonly 'classes': _T_Classes
                    readonly 'children': _i_core._T_List<null, {
                        readonly 'classes': _T_Classes
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['header', null]
                            | readonly ['body', null]
                            | readonly ['footer', null]
                        >
                        readonly 'rows': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['th', null]
                                | readonly ['td', null]
                            >
                            readonly 'height': _et.Optional_Value<number>
                            readonly 'cells': _i_core._T_List<null, {
                                readonly 'classes': _T_Classes
                                readonly 'div': _T_Div
                            }>
                        }>
                    }>
                }]
                | readonly ['span', _T_Span]
                | readonly ['label', {
                    readonly 'classes': _T_Classes
                    readonly 'text': string
                    readonly 'div': _T_Div
                }]
                | readonly ['img', {
                    readonly 'classes': _T_Classes
                    readonly 'src': string
                    readonly 'alt': string
                    readonly 'width': _et.Optional_Value<number>
                    readonly 'height': _et.Optional_Value<number>
                }]
                | readonly ['svg', {
                    readonly 'classes': _T_Classes
                    readonly 'content': string
                    readonly 'width': _et.Optional_Value<number>
                    readonly 'height': _et.Optional_Value<number>
                }]
            >
        }
    }
    export type children = _i_core._T_List<null, {
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['div', _T_Div]
            | readonly ['table', {
                readonly 'classes': _T_Classes
                readonly 'children': _i_core._T_List<null, {
                    readonly 'classes': _T_Classes
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['header', null]
                        | readonly ['body', null]
                        | readonly ['footer', null]
                    >
                    readonly 'rows': _i_core._T_List<null, {
                        readonly 'classes': _T_Classes
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['th', null]
                            | readonly ['td', null]
                        >
                        readonly 'height': _et.Optional_Value<number>
                        readonly 'cells': _i_core._T_List<null, {
                            readonly 'classes': _T_Classes
                            readonly 'div': _T_Div
                        }>
                    }>
                }>
            }]
            | readonly ['span', _T_Span]
            | readonly ['label', {
                readonly 'classes': _T_Classes
                readonly 'text': string
                readonly 'div': _T_Div
            }]
            | readonly ['img', {
                readonly 'classes': _T_Classes
                readonly 'src': string
                readonly 'alt': string
                readonly 'width': _et.Optional_Value<number>
                readonly 'height': _et.Optional_Value<number>
            }]
            | readonly ['svg', {
                readonly 'classes': _T_Classes
                readonly 'content': string
                readonly 'width': _et.Optional_Value<number>
                readonly 'height': _et.Optional_Value<number>
            }]
        >
    }>
}

export namespace Document {
    export type css = string
    
    export namespace root {
    }
    export type root = _T_Div
}
