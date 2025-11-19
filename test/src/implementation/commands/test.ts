import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ed from 'exupery-core-dev'


import * as d_get_instream_data from "exupery-resources/dist/interface/generated/pareto/schemas/get_instream_data/data_types/source"
import * as d_write_to_stdout from "exupery-resources/dist/interface/generated/pareto/schemas/write_to_stdout/data_types/source"
import * as d_log_error from "exupery-resources/dist/interface/generated/pareto/schemas/log_error/data_types/source"
import * as d_main from "exupery-resources/dist/interface/temp_main"

export type Query_Resources = {
    'get instream data': _et.Query<d_get_instream_data.Result, null, null>
}

export type Command_Resources = {
    'write to stdout': _et.Command<null, d_write_to_stdout.Parameters>
    'log error': _et.Command<null, d_log_error.Parameters>
}
export type Procedure = _et.Command_Procedure<d_main.Error, d_main.Parameters, Command_Resources, Query_Resources>


export const $$: Procedure = _easync.create_command_procedure(
    ($p, $cr, $qr) => [
        _easync.p.stage(
            $qr['get instream data'](
                null,
                ($): d_main.Error => ({
                    'exit code': 1,
                }),
            ),
            ($v) => [
                // $cr['write to stdout'].execute(
                //     $v,
                //     ($): d_main.Error => {
                //         //highly unlikely for log to fail
                //         return {
                //             'exit code': 1,
                //         }
                //     },
                // )
            ]
        )
    ]
)