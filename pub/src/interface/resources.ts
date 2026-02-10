import * as _pi from 'pareto-core/dist/interface'

import * as d_write_to_directory from "./to_be_generated/write_to_directory"
import * as d_write_to_file from "pareto-fountain-pen-file-structure/dist/interface/to_be_generated/write_to_file"

export namespace commands {

    export type write_to_directory = _pi.Command<d_write_to_directory.Error, d_write_to_directory.Parameters>
    export type write_to_file = _pi.Command<d_write_to_file.Error, d_write_to_file.Parameters>

}