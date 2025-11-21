import * as _et from 'exupery-core-types'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Classes = _i_core._T_List<null, string>

export type _T_Phrasing_Content = _i_core._T_List<null, _i_core._T_State_Group<null, 
    | readonly ['span', _T_Phrasing_Content]
    | readonly ['classified span', {
        readonly 'classes': _T_Classes
        readonly 'content': _T_Phrasing_Content
    }]
    | readonly ['titled span', {
        readonly 'title': string
        readonly 'content': _T_Phrasing_Content
    }]
    | readonly ['a', {
        readonly 'text': string
        readonly 'href': string
    }]
    | readonly ['p', {
        readonly 'text': string
    }]
>>

export type _T_Flow_Content = _i_core._T_List<null, _i_core._T_State_Group<null, 
    | readonly ['div', _T_Flow_Content]
    | readonly ['dimensioned div', {
        readonly 'width': _et.Optional_Value<number>
        readonly 'height': _et.Optional_Value<number>
        readonly 'content': _T_Flow_Content
    }]
    | readonly ['classified div', {
        readonly 'classes': _T_Classes
        readonly 'content': _T_Flow_Content
    }]
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
                    readonly 'content': _T_Flow_Content
                }>
            }>
        }>
    }]
    | readonly ['span', _T_Phrasing_Content]
    | readonly ['label', {
        readonly 'classes': _T_Classes
        readonly 'text': string
        readonly 'content': _T_Flow_Content
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
>>

export type _T_Document = {
    readonly 'css': string
    readonly 'root': _T_Flow_Content
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Classes = _T_Classes

export type Phrasing_Content = _T_Phrasing_Content

export type Flow_Content = _T_Flow_Content

export type Document = _T_Document

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Classes {
    export type L = string
}

export namespace _T_Phrasing_Content {
    
    export namespace L {
        
        export namespace SG {
            
            export namespace span {
            }
            export type span = _T_Phrasing_Content
            
            export namespace classified_span {
                
                export namespace classes {
                }
                export type classes = _T_Classes
                
                export namespace content {
                }
                export type content = _T_Phrasing_Content
            }
            export type classified_span = {
                readonly 'classes': _T_Classes
                readonly 'content': _T_Phrasing_Content
            }
            
            export namespace titled_span {
                export type title = string
                
                export namespace content {
                }
                export type content = _T_Phrasing_Content
            }
            export type titled_span = {
                readonly 'title': string
                readonly 'content': _T_Phrasing_Content
            }
            
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
            | readonly ['span', _T_Phrasing_Content]
            | readonly ['classified span', {
                readonly 'classes': _T_Classes
                readonly 'content': _T_Phrasing_Content
            }]
            | readonly ['titled span', {
                readonly 'title': string
                readonly 'content': _T_Phrasing_Content
            }]
            | readonly ['a', {
                readonly 'text': string
                readonly 'href': string
            }]
            | readonly ['p', {
                readonly 'text': string
            }]
    }
    export type L = _i_core._T_State_Group<null, 
        | readonly ['span', _T_Phrasing_Content]
        | readonly ['classified span', {
            readonly 'classes': _T_Classes
            readonly 'content': _T_Phrasing_Content
        }]
        | readonly ['titled span', {
            readonly 'title': string
            readonly 'content': _T_Phrasing_Content
        }]
        | readonly ['a', {
            readonly 'text': string
            readonly 'href': string
        }]
        | readonly ['p', {
            readonly 'text': string
        }]
    >
}

export namespace _T_Flow_Content {
    
    export namespace L {
        
        export namespace SG {
            
            export namespace div {
            }
            export type div = _T_Flow_Content
            
            export namespace dimensioned_div {
                
                export namespace width {
                    export type O = number
                }
                export type width = _et.Optional_Value<number>
                
                export namespace height {
                    export type O = number
                }
                export type height = _et.Optional_Value<number>
                
                export namespace content {
                }
                export type content = _T_Flow_Content
            }
            export type dimensioned_div = {
                readonly 'width': _et.Optional_Value<number>
                readonly 'height': _et.Optional_Value<number>
                readonly 'content': _T_Flow_Content
            }
            
            export namespace classified_div {
                
                export namespace classes {
                }
                export type classes = _T_Classes
                
                export namespace content {
                }
                export type content = _T_Flow_Content
            }
            export type classified_div = {
                readonly 'classes': _T_Classes
                readonly 'content': _T_Flow_Content
            }
            
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
                                        
                                        export namespace content {
                                        }
                                        export type content = _T_Flow_Content
                                    }
                                    export type L = {
                                        readonly 'classes': _T_Classes
                                        readonly 'content': _T_Flow_Content
                                    }
                                }
                                export type cells = _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes
                                    readonly 'content': _T_Flow_Content
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
                                    readonly 'content': _T_Flow_Content
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
                                readonly 'content': _T_Flow_Content
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
                                readonly 'content': _T_Flow_Content
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
                            readonly 'content': _T_Flow_Content
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
                            readonly 'content': _T_Flow_Content
                        }>
                    }>
                }>
            }
            
            export namespace span {
            }
            export type span = _T_Phrasing_Content
            
            export namespace label {
                
                export namespace classes {
                }
                export type classes = _T_Classes
                export type text = string
                
                export namespace content {
                }
                export type content = _T_Flow_Content
            }
            export type label = {
                readonly 'classes': _T_Classes
                readonly 'text': string
                readonly 'content': _T_Flow_Content
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
            | readonly ['div', _T_Flow_Content]
            | readonly ['dimensioned div', {
                readonly 'width': _et.Optional_Value<number>
                readonly 'height': _et.Optional_Value<number>
                readonly 'content': _T_Flow_Content
            }]
            | readonly ['classified div', {
                readonly 'classes': _T_Classes
                readonly 'content': _T_Flow_Content
            }]
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
                            readonly 'content': _T_Flow_Content
                        }>
                    }>
                }>
            }]
            | readonly ['span', _T_Phrasing_Content]
            | readonly ['label', {
                readonly 'classes': _T_Classes
                readonly 'text': string
                readonly 'content': _T_Flow_Content
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
    export type L = _i_core._T_State_Group<null, 
        | readonly ['div', _T_Flow_Content]
        | readonly ['dimensioned div', {
            readonly 'width': _et.Optional_Value<number>
            readonly 'height': _et.Optional_Value<number>
            readonly 'content': _T_Flow_Content
        }]
        | readonly ['classified div', {
            readonly 'classes': _T_Classes
            readonly 'content': _T_Flow_Content
        }]
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
                        readonly 'content': _T_Flow_Content
                    }>
                }>
            }>
        }]
        | readonly ['span', _T_Phrasing_Content]
        | readonly ['label', {
            readonly 'classes': _T_Classes
            readonly 'text': string
            readonly 'content': _T_Flow_Content
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

export namespace _T_Document {
    export type css = string
    
    export namespace root {
    }
    export type root = _T_Flow_Content
}

// *** ALIASES FOR NESTED TYPES

export namespace Classes {
    export type L = string
}

export namespace Phrasing_Content {
    
    export namespace L {
        
        export namespace SG {
            
            export namespace span {
            }
            export type span = _T_Phrasing_Content
            
            export namespace classified_span {
                
                export namespace classes {
                }
                export type classes = _T_Classes
                
                export namespace content {
                }
                export type content = _T_Phrasing_Content
            }
            export type classified_span = {
                readonly 'classes': _T_Classes
                readonly 'content': _T_Phrasing_Content
            }
            
            export namespace titled_span {
                export type title = string
                
                export namespace content {
                }
                export type content = _T_Phrasing_Content
            }
            export type titled_span = {
                readonly 'title': string
                readonly 'content': _T_Phrasing_Content
            }
            
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
            | readonly ['span', _T_Phrasing_Content]
            | readonly ['classified span', {
                readonly 'classes': _T_Classes
                readonly 'content': _T_Phrasing_Content
            }]
            | readonly ['titled span', {
                readonly 'title': string
                readonly 'content': _T_Phrasing_Content
            }]
            | readonly ['a', {
                readonly 'text': string
                readonly 'href': string
            }]
            | readonly ['p', {
                readonly 'text': string
            }]
    }
    export type L = _i_core._T_State_Group<null, 
        | readonly ['span', _T_Phrasing_Content]
        | readonly ['classified span', {
            readonly 'classes': _T_Classes
            readonly 'content': _T_Phrasing_Content
        }]
        | readonly ['titled span', {
            readonly 'title': string
            readonly 'content': _T_Phrasing_Content
        }]
        | readonly ['a', {
            readonly 'text': string
            readonly 'href': string
        }]
        | readonly ['p', {
            readonly 'text': string
        }]
    >
}

export namespace Flow_Content {
    
    export namespace L {
        
        export namespace SG {
            
            export namespace div {
            }
            export type div = _T_Flow_Content
            
            export namespace dimensioned_div {
                
                export namespace width {
                    export type O = number
                }
                export type width = _et.Optional_Value<number>
                
                export namespace height {
                    export type O = number
                }
                export type height = _et.Optional_Value<number>
                
                export namespace content {
                }
                export type content = _T_Flow_Content
            }
            export type dimensioned_div = {
                readonly 'width': _et.Optional_Value<number>
                readonly 'height': _et.Optional_Value<number>
                readonly 'content': _T_Flow_Content
            }
            
            export namespace classified_div {
                
                export namespace classes {
                }
                export type classes = _T_Classes
                
                export namespace content {
                }
                export type content = _T_Flow_Content
            }
            export type classified_div = {
                readonly 'classes': _T_Classes
                readonly 'content': _T_Flow_Content
            }
            
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
                                        
                                        export namespace content {
                                        }
                                        export type content = _T_Flow_Content
                                    }
                                    export type L = {
                                        readonly 'classes': _T_Classes
                                        readonly 'content': _T_Flow_Content
                                    }
                                }
                                export type cells = _i_core._T_List<null, {
                                    readonly 'classes': _T_Classes
                                    readonly 'content': _T_Flow_Content
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
                                    readonly 'content': _T_Flow_Content
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
                                readonly 'content': _T_Flow_Content
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
                                readonly 'content': _T_Flow_Content
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
                            readonly 'content': _T_Flow_Content
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
                            readonly 'content': _T_Flow_Content
                        }>
                    }>
                }>
            }
            
            export namespace span {
            }
            export type span = _T_Phrasing_Content
            
            export namespace label {
                
                export namespace classes {
                }
                export type classes = _T_Classes
                export type text = string
                
                export namespace content {
                }
                export type content = _T_Flow_Content
            }
            export type label = {
                readonly 'classes': _T_Classes
                readonly 'text': string
                readonly 'content': _T_Flow_Content
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
            | readonly ['div', _T_Flow_Content]
            | readonly ['dimensioned div', {
                readonly 'width': _et.Optional_Value<number>
                readonly 'height': _et.Optional_Value<number>
                readonly 'content': _T_Flow_Content
            }]
            | readonly ['classified div', {
                readonly 'classes': _T_Classes
                readonly 'content': _T_Flow_Content
            }]
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
                            readonly 'content': _T_Flow_Content
                        }>
                    }>
                }>
            }]
            | readonly ['span', _T_Phrasing_Content]
            | readonly ['label', {
                readonly 'classes': _T_Classes
                readonly 'text': string
                readonly 'content': _T_Flow_Content
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
    export type L = _i_core._T_State_Group<null, 
        | readonly ['div', _T_Flow_Content]
        | readonly ['dimensioned div', {
            readonly 'width': _et.Optional_Value<number>
            readonly 'height': _et.Optional_Value<number>
            readonly 'content': _T_Flow_Content
        }]
        | readonly ['classified div', {
            readonly 'classes': _T_Classes
            readonly 'content': _T_Flow_Content
        }]
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
                        readonly 'content': _T_Flow_Content
                    }>
                }>
            }>
        }]
        | readonly ['span', _T_Phrasing_Content]
        | readonly ['label', {
            readonly 'classes': _T_Classes
            readonly 'text': string
            readonly 'content': _T_Flow_Content
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

export namespace Document {
    export type css = string
    
    export namespace root {
    }
    export type root = _T_Flow_Content
}
