#!/usr/bin/env -S node --enable-source-maps

import * as _pn from 'pareto-host-nodejs'

import { $$ as procedure } from "../implementation/commands/test"

import * as d_resources from "../implementation/commands/test"

import { $$ as q_read_directory_content } from "pareto-resources/dist/implementation/manual/queries/read_directory_content"
import { $$ as c_write_directory_content } from "pareto-resources/dist/implementation/manual/commands/write_directory_content"

_pn.run_main_procedure(
    ($r) => {
        return procedure(
            {
                'write to stdout': $r.commands['write to stdout'],
                'log error': $r.commands['log error'],
                'log': $r.commands['log'],
                'write directory content': c_write_directory_content(
                    {
                        'write file': $r.commands['write file'],
                    },
                    null,
                )
            },
            {
                'read directory': $r.queries['read directory'],
                'read file': $r.queries['read file'],
                'read directory content': q_read_directory_content(
                    {
                        'read directory': $r.queries['read directory'],
                        'read file': $r.queries['read file'],
                    }
                ),
            },
        )
    },
)
