
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "./data"

import * as i_in from "./data"

export namespace Classes_ {
    
    export type I = i_in.Classes
    
    export type O = i_out.Classes
    
    export namespace P {
        
    }
    
}

export type Classes_ = (
    $$_: Classes_.I,
) => Classes_.O

export namespace Phrasing_Content_ {
    
    export type I = i_in.Phrasing_Content
    
    export type O = i_out.Phrasing_Content
    
    export namespace P {
        
    }
    
}

export type Phrasing_Content_ = (
    $$_: Phrasing_Content_.I,
) => Phrasing_Content_.O

export namespace Flow_Content_ {
    
    export type I = i_in.Flow_Content
    
    export type O = i_out.Flow_Content
    
    export namespace P {
        
    }
    
}

export type Flow_Content_ = (
    $$_: Flow_Content_.I,
) => Flow_Content_.O

export namespace Document_ {
    
    export type I = i_in.Document
    
    export type O = i_out.Document
    
    export namespace P {
        
    }
    
}

export type Document_ = (
    $$_: Document_.I,
) => Document_.O

export { 
    Classes_ as Classes, 
    Phrasing_Content_ as Phrasing_Content, 
    Flow_Content_ as Flow_Content, 
    Document_ as Document, 
}
