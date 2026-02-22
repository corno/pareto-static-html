
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/unmarshall"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Document_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Document
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Document_ = (
    context: Document_.I,
    abort: _pi.Abort<Document_.E>,
) => Document_.O

export namespace Flow_Content_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Flow_Content
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Flow_Content_ = (
    context: Flow_Content_.I,
    abort: _pi.Abort<Flow_Content_.E>,
) => Flow_Content_.O

export namespace Classes_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Classes
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Classes_ = (
    context: Classes_.I,
    abort: _pi.Abort<Classes_.E>,
) => Classes_.O

export namespace Phrasing_Content_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Phrasing_Content
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Phrasing_Content_ = (
    context: Phrasing_Content_.I,
    abort: _pi.Abort<Phrasing_Content_.E>,
) => Phrasing_Content_.O

export namespace Phrasing_Element_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Phrasing_Element
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Phrasing_Element_ = (
    context: Phrasing_Element_.I,
    abort: _pi.Abort<Phrasing_Element_.E>,
) => Phrasing_Element_.O

export { 
    Document_ as Document, 
    Flow_Content_ as Flow_Content, 
    Classes_ as Classes, 
    Phrasing_Content_ as Phrasing_Content, 
    Phrasing_Element_ as Phrasing_Element, 
}
