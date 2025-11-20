import * as _et from 'exupery-core-types'


export type Test_Group_Result = _et.Dictionary<Test_Node_Result>

export type Test_Node_Result =
    | ['group', Test_Group_Child_Result]
    | ['individual test', Individual_Test_Result]

export type Test_Group_Child_Result =
    | ['missing', null]
    | ['valid', Test_Group_Result]
    | ['not a group', null]
    | ['expected is missing', null]

export type Individual_Test_Result =
    | ['not an individual test', null]
    | ['passed', null]
    | ['failed', {
        'expected': string,
    }]
    | ['expected is missing', null]
    | ['expected is not an individual test', null]
