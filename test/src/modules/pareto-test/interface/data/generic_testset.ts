import * as _et from 'exupery-core-types'

export type Test =
    ['valid', {
        'input': string,
        'expected': string,

    }]
    | ['expected does not exist', null]
    | ['expected is not an individual test', null]

export type Test_Node =
    | ['test', Test]
    | ['group', Test_Group_Node]

export type Test_Group_Node =
    | ['valid', Test_Group]
    | ['expected does not exist', null]
    | ['expected is not a group', null]

export type Test_Group = _et.Dictionary<Test_Node>