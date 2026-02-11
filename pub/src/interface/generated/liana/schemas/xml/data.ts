
import * as _pi from 'pareto-core/dist/interface'

export namespace Document_ {
    
    export namespace doc_type {
        
        export namespace O {
            
            export type name = string
            
        }
        
        export type O = {
            readonly 'name': O.name
        }
        
    }
    
    export type doc_type = _pi.Optional_Value<doc_type.O>
    
    export type root = Element_
    
}

export type Document_ = {
    readonly 'doc type': Document_.doc_type
    readonly 'root': Document_.root
}

export namespace Element_ {
    
    export type name = Qualified_Name_
    
    export namespace attributes {
        
        export namespace L {
            
            export type name = Qualified_Name_
            
            export type value = string
            
        }
        
        export type L = {
            readonly 'name': L.name
            readonly 'value': L.value
        }
        
    }
    
    export type attributes = _pi.List<attributes.L>
    
    export namespace content_type {
        
        export namespace empty {
            
        }
        
        export type empty = null
        
        export namespace text_only {
            
            export type value = string
            
        }
        
        export type text_only = {
            readonly 'value': text_only.value
        }
        
        export type mixed = Mixed_Content_
        
        export namespace nodes_only {
            
            export namespace children {
                
                export type L = Node_
                
            }
            
            export type children = _pi.List<children.L>
            
        }
        
        export type nodes_only = {
            readonly 'children': nodes_only.children
        }
        
    }
    
    export type content_type = 
        | readonly ['empty', content_type.empty]
        | readonly ['text only', content_type.text_only]
        | readonly ['mixed', content_type.mixed]
        | readonly ['nodes only', content_type.nodes_only]
    
}

export type Element_ = {
    readonly 'name': Element_.name
    readonly 'attributes': Element_.attributes
    readonly 'content type': Element_.content_type
}

export namespace Mixed_Content_ {
    
    export namespace L {
        
        export type node = Node_
        
        export namespace text {
            
            export type value = string
            
        }
        
        export type text = {
            readonly 'value': text.value
        }
        
    }
    
    export type L = 
        | readonly ['node', L.node]
        | readonly ['text', L.text]
    
}

export type Mixed_Content_ = _pi.List<Mixed_Content_.L>

export namespace Qualified_Name_ {
    
    export namespace namespace_prefix {
        
        export type O = string
        
    }
    
    export type namespace_prefix = _pi.Optional_Value<namespace_prefix.O>
    
    export type local_name = string
    
}

export type Qualified_Name_ = {
    readonly 'namespace prefix': Qualified_Name_.namespace_prefix
    readonly 'local name': Qualified_Name_.local_name
}

export namespace Node_ {
    
    export type element = Element_
    
}

export type Node_ = 
    | readonly ['element', Node_.element]

export { 
    Document_ as Document, 
    Element_ as Element, 
    Mixed_Content_ as Mixed_Content, 
    Qualified_Name_ as Qualified_Name, 
    Node_ as Node, 
}
