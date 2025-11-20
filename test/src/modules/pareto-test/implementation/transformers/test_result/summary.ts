import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-dev'

import * as d_in from "../../../interface/data/test_result"
import * as d_out from "../../../interface/data/summary"

export type Parameters = {
    'include passed tests': boolean
    'include structural problems': boolean
}

export const Test_Group_Result: _et.Transformer_With_Parameters<d_out.Test_count, d_in.Test_Group_Result, Parameters> = ($, $p) => {
    const structural_problem_amount = $p['include structural problems'] ? 1 : 0
    let count = 0
    $.map(($): number => _ea.cc($, ($) => {
        switch ($[0]) {
            case 'group': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'missing': return _ea.ss($, ($) => structural_problem_amount)
                    case 'not a group': return _ea.ss($, ($) => structural_problem_amount)
                    case 'expected is missing': return _ea.ss($, ($) => structural_problem_amount)
                    case 'valid': return _ea.ss($, ($) => Test_Group_Result($, $p))
                    default: return _ea.au($[0])
                }
            }))
            case 'individual test': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'expected is missing': return _ea.ss($, ($) => structural_problem_amount)
                    case 'not an individual test': return _ea.ss($, ($) => structural_problem_amount)

                    case 'passed': return _ea.ss($, ($) => $p['include passed tests'] ? 1 : 0)
                    case 'failed': return _ea.ss($, ($) => 1)

                    case 'expected is not an individual test': return _ea.ss($, ($) => structural_problem_amount)
                    default: return _ea.au($[0])
                }
            }))
            default: return _ea.au($[0])
        }
    })).map(($) => count += $)
    return count
}
