#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ as procedure } from "../implementation/commands/test"

import * as d_resources from "../implementation/commands/test"

_eb.run_main_procedure(
    ($r) => {
        return procedure(
            {
                'write to stdout': $r.commands['write to stdout'],
                'log error': $r.commands['log error'],
            },
            {
                'get instream data': $r.queries['get instream data'],
            },
        )
    },
)
