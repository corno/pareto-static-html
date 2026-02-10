
import * as _p from 'pareto-core/dist/command'
import * as _pt from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as signatures from "../../../interface/signatures"

//data types

//dependencies
import * as t_file_structure_to_fp_file_structure from "../transformers/file_structure/foutain_pen_file_structure"


export const $$: signatures.commands.write_to_directory = _p.command_procedure(
    ($p, $cr, $qr) => [
        $cr['write fountain pen to directory'].execute(
            {
                'directory': t_file_structure_to_fp_file_structure.Directory($p.directory),
                'path': $p.path,
                'generic': {
                    'prose serialize': {
                        'indentation': $p.indentation,
                        'newline': $p.newline,
                    },
                    'escape spaces in path': $p['escape spaces in path'],
                },
                'remove before creating': $p['remove before creating'],
            },
            ($) => $,
        )
    ]
)