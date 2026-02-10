import * as _pi from 'pareto-core/dist/interface'

import * as resources from "./resources"
import * as resoureces_fp from "pareto-fountain-pen-file-system/dist/interface/resources"

export namespace commands {


    export type write_to_directory = _pi.Command_Procedure<
        resources.commands.write_to_directory,
        {
            'write fountain pen to directory': resoureces_fp.commands.write_to_directory
        },
        null
    >

}