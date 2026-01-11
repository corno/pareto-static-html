import * as _pi from "pareto-core-interface"
    
    import * as _i_out from "./data_types/target"
    import * as _i_in from "./data_types/source"
    
    // **** TYPES
    
    export type _T_Classes = (
        $$_: _i_in._T_Classes,
        $$_p: null,
    ) => _i_out._T_Classes
    
    export type _T_Phrasing_Content = (
        $$_: _i_in._T_Phrasing_Content,
        $$_p: null,
    ) => _i_out._T_Phrasing_Content
    
    export type _T_Flow_Content = (
        $$_: _i_in._T_Flow_Content,
        $$_p: null,
    ) => _i_out._T_Flow_Content
    
    export type _T_Document = (
        $$_: _i_in._T_Document,
        $$_p: null,
    ) => _i_out._T_Document
    
    // **** FRIENDLY NAMES FOR THE GLOBAL TYPES
    
    export type Classes = _T_Classes
    
    export type Phrasing_Content = _T_Phrasing_Content
    
    export type Flow_Content = _T_Flow_Content
    
    export type Document = _T_Document
    
    // **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES
    
    export namespace _T_Classes {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Classes
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Classes
    }
    
    export namespace _T_Phrasing_Content {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Phrasing_Content
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Phrasing_Content
    }
    
    export namespace _T_Flow_Content {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Flow_Content
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Flow_Content
    }
    
    export namespace _T_Document {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Document
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Document
    }
    
    // *** ALIASES FOR NESTED TYPES
    
    export namespace Classes {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Classes
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Classes
    }
    
    export namespace Phrasing_Content {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Phrasing_Content
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Phrasing_Content
    }
    
    export namespace Flow_Content {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Flow_Content
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Flow_Content
    }
    
    export namespace Document {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Document
        
        export namespace PARAMS {
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Document
    }
