
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "../../core/location"

export namespace Classes_ {
    
    export type L = string
    
}

export type Classes_ = _pi.List<Classes_.L>

export namespace Phrasing_Content_ {
    
    export namespace L {
        
        export type span = Phrasing_Content_
        
        export namespace classified_span {
            
            export type classes = Classes_
            
            export type content = Phrasing_Content_
            
        }
        
        export type classified_span = {
            readonly 'classes': classified_span.classes
            readonly 'content': classified_span.content
        }
        
        export namespace titled_span {
            
            export type title = string
            
            export type content = Phrasing_Content_
            
        }
        
        export type titled_span = {
            readonly 'title': titled_span.title
            readonly 'content': titled_span.content
        }
        
        export namespace a {
            
            export type text = string
            
            export type href = string
            
        }
        
        export type a = {
            readonly 'text': a.text
            readonly 'href': a.href
        }
        
        export namespace p {
            
            export type text = string
            
        }
        
        export type p = {
            readonly 'text': p.text
        }
        
    }
    
    export type L = 
        | readonly ['span', L.span]
        | readonly ['classified span', L.classified_span]
        | readonly ['titled span', L.titled_span]
        | readonly ['a', L.a]
        | readonly ['p', L.p]
    
}

export type Phrasing_Content_ = _pi.List<Phrasing_Content_.L>

export namespace Flow_Content_ {
    
    export namespace L {
        
        export type div = Flow_Content_
        
        export namespace dimensioned_div {
            
            export namespace width {
                
                export type O = number
                
            }
            
            export type width = _pi.Optional_Value<width.O>
            
            export namespace height {
                
                export type O = number
                
            }
            
            export type height = _pi.Optional_Value<height.O>
            
            export type content = Flow_Content_
            
        }
        
        export type dimensioned_div = {
            readonly 'width': dimensioned_div.width
            readonly 'height': dimensioned_div.height
            readonly 'content': dimensioned_div.content
        }
        
        export namespace classified_div {
            
            export type classes = Classes_
            
            export type content = Flow_Content_
            
        }
        
        export type classified_div = {
            readonly 'classes': classified_div.classes
            readonly 'content': classified_div.content
        }
        
        export namespace table {
            
            export type classes = Classes_
            
            export namespace sections {
                
                export namespace L {
                    
                    export type classes = Classes_
                    
                    export namespace _type {
                        
                        export type header = null
                        
                        export type body = null
                        
                        export type footer = null
                        
                    }
                    
                    export type _type = 
                        | readonly ['header', _type.header]
                        | readonly ['body', _type.body]
                        | readonly ['footer', _type.footer]
                    
                    export namespace rows {
                        
                        export namespace L {
                            
                            export type classes = Classes_
                            
                            export namespace _type {
                                
                                export type th = null
                                
                                export type td = null
                                
                            }
                            
                            export type _type = 
                                | readonly ['th', _type.th]
                                | readonly ['td', _type.td]
                            
                            export namespace height {
                                
                                export type O = number
                                
                            }
                            
                            export type height = _pi.Optional_Value<height.O>
                            
                            export namespace cells {
                                
                                export namespace L {
                                    
                                    export type classes = Classes_
                                    
                                    export type content = Flow_Content_
                                    
                                }
                                
                                export type L = {
                                    readonly 'classes': L.classes
                                    readonly 'content': L.content
                                }
                                
                            }
                            
                            export type cells = _pi.List<cells.L>
                            
                        }
                        
                        export type L = {
                            readonly 'classes': L.classes
                            readonly 'type': L._type
                            readonly 'height': L.height
                            readonly 'cells': L.cells
                        }
                        
                    }
                    
                    export type rows = _pi.List<rows.L>
                    
                }
                
                export type L = {
                    readonly 'classes': L.classes
                    readonly 'type': L._type
                    readonly 'rows': L.rows
                }
                
            }
            
            export type sections = _pi.List<sections.L>
            
        }
        
        export type table = {
            readonly 'classes': table.classes
            readonly 'sections': table.sections
        }
        
        export type span = Phrasing_Content_
        
        export namespace label {
            
            export type classes = Classes_
            
            export type text = string
            
            export type content = Flow_Content_
            
        }
        
        export type label = {
            readonly 'classes': label.classes
            readonly 'text': label.text
            readonly 'content': label.content
        }
        
        export namespace img {
            
            export type classes = Classes_
            
            export type src = string
            
            export type alt = string
            
            export namespace width {
                
                export type O = number
                
            }
            
            export type width = _pi.Optional_Value<width.O>
            
            export namespace height {
                
                export type O = number
                
            }
            
            export type height = _pi.Optional_Value<height.O>
            
        }
        
        export type img = {
            readonly 'classes': img.classes
            readonly 'src': img.src
            readonly 'alt': img.alt
            readonly 'width': img.width
            readonly 'height': img.height
        }
        
        export namespace svg {
            
            export type classes = Classes_
            
            export type content = string
            
            export namespace width {
                
                export type O = number
                
            }
            
            export type width = _pi.Optional_Value<width.O>
            
            export namespace height {
                
                export type O = number
                
            }
            
            export type height = _pi.Optional_Value<height.O>
            
        }
        
        export type svg = {
            readonly 'classes': svg.classes
            readonly 'content': svg.content
            readonly 'width': svg.width
            readonly 'height': svg.height
        }
        
    }
    
    export type L = 
        | readonly ['div', L.div]
        | readonly ['dimensioned div', L.dimensioned_div]
        | readonly ['classified div', L.classified_div]
        | readonly ['table', L.table]
        | readonly ['span', L.span]
        | readonly ['label', L.label]
        | readonly ['img', L.img]
        | readonly ['svg', L.svg]
    
}

export type Flow_Content_ = _pi.List<Flow_Content_.L>

export namespace Document_ {
    
    export type css = string
    
    export type root = Flow_Content_
    
}

export type Document_ = {
    readonly 'css': Document_.css
    readonly 'root': Document_.root
}

export { 
    Classes_ as Classes, 
    Phrasing_Content_ as Phrasing_Content, 
    Flow_Content_ as Flow_Content, 
    Document_ as Document, 
}
