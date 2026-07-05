
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/interface/data/unmarshall"

import * as i_out from "../../data.js"

import * as i_in from "astn-core/interface/generated/liana/schemas/parse_tree/data"

export namespace Document_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Document
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Document_ = (
    context: Document_.I,
    abort: p_i.Abort<Document_.E>,
) => Document_.O

export namespace Element_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Element
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Element_ = (
    context: Element_.I,
    abort: p_i.Abort<Element_.E>,
) => Element_.O

export namespace Mixed_Content_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Mixed_Content
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Mixed_Content_ = (
    context: Mixed_Content_.I,
    abort: p_i.Abort<Mixed_Content_.E>,
) => Mixed_Content_.O

export namespace Qualified_Name_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Qualified_Name
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Qualified_Name_ = (
    context: Qualified_Name_.I,
    abort: p_i.Abort<Qualified_Name_.E>,
) => Qualified_Name_.O

export namespace Node_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Node
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Node_ = (
    context: Node_.I,
    abort: p_i.Abort<Node_.E>,
) => Node_.O

export type { 
    Document_ as Document, 
    Element_ as Element, 
    Mixed_Content_ as Mixed_Content, 
    Qualified_Name_ as Qualified_Name, 
    Node_ as Node, 
}
