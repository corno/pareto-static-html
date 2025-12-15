import * as _et from 'exupery-core-types'
import * as _easync from 'exupery-core-async'

import * as d_read_directory from "exupery-resources/dist/interface/generated/pareto/schemas/read_directory/data_types/source"
import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"
import * as d_directory_content from "./directory_content"
import * as d_test_result from "../../interface/data/test_result"

export type Parameters = {
    'directory contents': d_directory_content.Result,
}

export type Result = d_test_result.Test_Group_Child_Result

export type Node_Error =
    | ['tbd', null]

export type Error =
    | ['read directory', d_read_directory.Error]
    | ['directory content processing', _et.Dictionary<Node_Error>]


export type Resources = {
    'read directory': _et.Query<d_read_directory.Result, d_read_directory.Error, d_read_directory.Parameters>
    'read file': _et.Query<d_read_file.Result, d_read_file.Error, d_read_file.Parameters>

}

export type Query = _et.Query_Function<Result, Error, Parameters, Resources>