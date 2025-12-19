#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ as procedure } from "../implementation/commands/test"

import * as d_resources from "../implementation/commands/test"

import { $$ as q_read_directory_content } from "exupery-resources/dist/implementation/queries/directory_content"

_eb.run_main_procedure(
    ($r) => {
        return procedure(
            {
                'write to stdout': $r.commands['write to stdout'],
                'log error': $r.commands['log error'],
                'log': $r.commands['log'],
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
