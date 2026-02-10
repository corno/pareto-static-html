import * as d_write_to_directory from "pareto-fountain-pen-file-system/dist/interface/to_be_generated/write_to_dictionary"
import * as d_path from "pareto-resources/dist/interface/generated/liana/schemas/path/data"
import * as d_fs from "./file_structure"

export type Error = d_write_to_directory.Error

export type Parameters = {
    'directory': d_fs.Directory,

    'escape spaces in path': boolean
    'path': d_path.Node_Path
    'indentation': string
    'newline': string
    'remove before creating': boolean
}