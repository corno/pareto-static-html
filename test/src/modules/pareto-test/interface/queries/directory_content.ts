import * as _et from 'exupery-core-types'
import * as _easync from 'exupery-core-async'

import * as d_read_directory from "exupery-resources/dist/interface/generated/pareto/schemas/read_directory/data_types/source"
import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"
import * as d from "../../interface/data/directory_content"

export type Parameters = {
    'path': string,
}

export type Result = d.Directory

export type Node_Error =
    | ['file', d_read_file.Error]
    | ['directory', Error]

export type Error =
    | ['read directory', d_read_directory.Error]
    | ['directory content processing', _et.Dictionary<Node_Error>]


export type Resources = {
    'read directory': _et.Query<d_read_directory.Result, d_read_directory.Error, d_read_directory.Parameters>
    'read file': _et.Query<d_read_file.Result, d_read_file.Error, d_read_file.Parameters>

}

export type Query = _et.Query_Function<Result, Error, Parameters, Resources>