import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'

import * as sh from "pareto-test/dist/temporary_testset_generator/shorthands"

import { $$ as schema_static_html } from "./schemas/static_html"

export const $$ = sh.package_({
    'schemas': {
        "static-html": schema_static_html
    }
})
