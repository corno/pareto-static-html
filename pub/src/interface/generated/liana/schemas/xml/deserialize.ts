
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

import * as i_out from "./data"

export namespace Document_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Document
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Document_ = (
    context: Document_.I,
    abort: _pi.Abort<Document_.E>,
    parameters: {
        readonly 'document resource identifier': Document_.P.document_resource_identifier
        readonly 'tab size': Document_.P.tab_size
    },
) => Document_.O

export namespace Element_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Element
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Element_ = (
    context: Element_.I,
    abort: _pi.Abort<Element_.E>,
    parameters: {
        readonly 'document resource identifier': Element_.P.document_resource_identifier
        readonly 'tab size': Element_.P.tab_size
    },
) => Element_.O

export namespace Mixed_Content_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Mixed_Content
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Mixed_Content_ = (
    context: Mixed_Content_.I,
    abort: _pi.Abort<Mixed_Content_.E>,
    parameters: {
        readonly 'document resource identifier': Mixed_Content_.P.document_resource_identifier
        readonly 'tab size': Mixed_Content_.P.tab_size
    },
) => Mixed_Content_.O

export namespace Qualified_Name_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Qualified_Name
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Qualified_Name_ = (
    context: Qualified_Name_.I,
    abort: _pi.Abort<Qualified_Name_.E>,
    parameters: {
        readonly 'document resource identifier': Qualified_Name_.P.document_resource_identifier
        readonly 'tab size': Qualified_Name_.P.tab_size
    },
) => Qualified_Name_.O

export namespace Node_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Node
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Node_ = (
    context: Node_.I,
    abort: _pi.Abort<Node_.E>,
    parameters: {
        readonly 'document resource identifier': Node_.P.document_resource_identifier
        readonly 'tab size': Node_.P.tab_size
    },
) => Node_.O

export { 
    Document_ as Document, 
    Element_ as Element, 
    Mixed_Content_ as Mixed_Content, 
    Qualified_Name_ as Qualified_Name, 
    Node_ as Node, 
}
