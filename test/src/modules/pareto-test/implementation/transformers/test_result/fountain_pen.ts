import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-dev'

import * as d_in from "../../../interface/data/test_result"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"


export const Test_Group_Result = ($: d_in.Test_Group_Result): d_out.Group_Part => {
    return sh.g.sub($.deprecated_to_array(() => 0).map(($) => sh.g.nested_block([
        sh.b.snippet($.key),
        sh.b.snippet(": "),
        _ea.cc($.value, ($) => {
            switch ($[0]) {
                case 'individual test': return _ea.ss($, ($) => {
                    switch ($[0]) {
                        case 'passed': return sh.b.snippet("✅ PASS")
                        case 'failed': return sh.b.snippet("❌ FAIL")
                        case 'not an individual test': return sh.b.snippet("⚠️ NOT A TEST")
                        case 'expected is missing': return sh.b.snippet("⚠️ NO EXPECTED")
                        case 'expected is not an individual test': return sh.b.snippet("⚠️ EXPECTED NOT TEST")
                        default: return _ea.au($[0])
                    }
                })
                case 'group': return _ea.ss($, ($) => {
                    switch ($[0]) {
                        case 'valid': return _ea.ss($, ($) => sh.b.sub([
                            sh.b.indent([
                                Test_Group_Result($)
                            ])
                        ]))
                        case 'missing': return sh.b.snippet("⚠️ MISSING")
                        case 'not a group': return sh.b.snippet("⚠️ NOT A GROUP")
                        case 'expected is missing': return sh.b.snippet("⚠️ NO EXPECTED")
                        default: return _ea.au($[0])
                    }
                })
                default: return _ea.au($[0])
            }
        })
    ])))
}