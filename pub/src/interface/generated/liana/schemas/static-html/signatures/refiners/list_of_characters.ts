
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

import * as i_out from "../../data"

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

export namespace Flow_Content_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Flow_Content
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Flow_Content_ = (
    context: Flow_Content_.I,
    abort: _pi.Abort<Flow_Content_.E>,
    parameters: {
        readonly 'document resource identifier': Flow_Content_.P.document_resource_identifier
        readonly 'tab size': Flow_Content_.P.tab_size
    },
) => Flow_Content_.O

export namespace Classes_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Classes
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Classes_ = (
    context: Classes_.I,
    abort: _pi.Abort<Classes_.E>,
    parameters: {
        readonly 'document resource identifier': Classes_.P.document_resource_identifier
        readonly 'tab size': Classes_.P.tab_size
    },
) => Classes_.O

export namespace Phrasing_Content_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Phrasing_Content
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Phrasing_Content_ = (
    context: Phrasing_Content_.I,
    abort: _pi.Abort<Phrasing_Content_.E>,
    parameters: {
        readonly 'document resource identifier': Phrasing_Content_.P.document_resource_identifier
        readonly 'tab size': Phrasing_Content_.P.tab_size
    },
) => Phrasing_Content_.O

export namespace Phrasing_Element_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Phrasing_Element
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Phrasing_Element_ = (
    context: Phrasing_Element_.I,
    abort: _pi.Abort<Phrasing_Element_.E>,
    parameters: {
        readonly 'document resource identifier': Phrasing_Element_.P.document_resource_identifier
        readonly 'tab size': Phrasing_Element_.P.tab_size
    },
) => Phrasing_Element_.O

export { 
    Document_ as Document, 
    Flow_Content_ as Flow_Content, 
    Classes_ as Classes, 
    Phrasing_Content_ as Phrasing_Content, 
    Phrasing_Element_ as Phrasing_Element, 
}
