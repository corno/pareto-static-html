import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ed from 'exupery-core-dev'

import * as d_main from "exupery-resources/dist/interface/temp_main"

import * as test_command_refiner from "../refiners/test_command/refiners"

export type Query_Resources = {
}

export type Command_Resources = {
    'write to stdout': _et.Command<d_main.Error, string>
    'log error': _et.Command<d_main.Error, string>
}
export type Procedure = _et.Command_Procedure<d_main.Error, d_main.Parameters, Command_Resources, Query_Resources>


export const $$: Procedure = _easync.create_command_procedure(
    ($p, $cr, $qr) => [
        _easync.p.stage(
            test_command_refiner.Parameters($p.arguments),
            ($v) => [
                $cr['write to stdout'].execute(
                    `Testing with data from: ${($v as any)['path to test data']}\n`,
                    ($): d_main.Error => {
                        return {
                            'exit code': 1,
                        }
                    },
                ),
            ]
        )
    ]
)