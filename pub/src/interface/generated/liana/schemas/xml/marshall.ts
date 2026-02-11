
import * as _pi from 'pareto-core/dist/interface'

import * as i_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as i_in from "./data"

export namespace Document_ {
    
    export type I = i_in.Document
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Document_ = (
    context: Document_.I,
) => Document_.O

export namespace Element_ {
    
    export type I = i_in.Element
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Element_ = (
    context: Element_.I,
) => Element_.O

export namespace Mixed_Content_ {
    
    export type I = i_in.Mixed_Content
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Mixed_Content_ = (
    context: Mixed_Content_.I,
) => Mixed_Content_.O

export namespace Qualified_Name_ {
    
    export type I = i_in.Qualified_Name
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Qualified_Name_ = (
    context: Qualified_Name_.I,
) => Qualified_Name_.O

export namespace Node_ {
    
    export type I = i_in.Node
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Node_ = (
    context: Node_.I,
) => Node_.O

export { 
    Document_ as Document, 
    Element_ as Element, 
    Mixed_Content_ as Mixed_Content, 
    Qualified_Name_ as Qualified_Name, 
    Node_ as Node, 
}
