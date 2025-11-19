export type _T_Value_Deserializers = {
    readonly 'default number': ($$_: string, $$_p: null) => number;
    readonly 'boolean': ($$_: string, $$_p: null) => boolean;
    readonly 'custom numbers': {
        readonly 'Position': ($$_: string, $$_p: null) => number;
    };
};
export type Value_Deserializers = _T_Value_Deserializers;
export declare namespace _T_Value_Deserializers {
    namespace default_number {
        type CONTEXT = string;
        namespace PARAMS {
        }
        type RESULT = number;
    }
    type default_number = ($$_: string, $$_p: null) => number;
    namespace _boolean {
        type CONTEXT = string;
        namespace PARAMS {
        }
        type RESULT = boolean;
    }
    type _boolean = ($$_: string, $$_p: null) => boolean;
    namespace custom_numbers {
        namespace Position {
            type CONTEXT = string;
            namespace PARAMS {
            }
            type RESULT = number;
        }
        type Position = ($$_: string, $$_p: null) => number;
    }
    type custom_numbers = {
        readonly 'Position': ($$_: string, $$_p: null) => number;
    };
}
export declare namespace Value_Deserializers {
    namespace default_number {
        type CONTEXT = string;
        namespace PARAMS {
        }
        type RESULT = number;
    }
    type default_number = ($$_: string, $$_p: null) => number;
    namespace _boolean {
        type CONTEXT = string;
        namespace PARAMS {
        }
        type RESULT = boolean;
    }
    type _boolean = ($$_: string, $$_p: null) => boolean;
    namespace custom_numbers {
        namespace Position {
            type CONTEXT = string;
            namespace PARAMS {
            }
            type RESULT = number;
        }
        type Position = ($$_: string, $$_p: null) => number;
    }
    type custom_numbers = {
        readonly 'Position': ($$_: string, $$_p: null) => number;
    };
}
