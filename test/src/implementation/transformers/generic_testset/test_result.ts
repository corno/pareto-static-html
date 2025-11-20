import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d_in from "../../../modules/pareto-test/interface/data/generic_testset"
import * as d_out from "../../../modules/pareto-test/interface/data/test_result"

import * as r_temp_static_html from "../../refiners/temp_static_html"

export const Test_Result: _et.Transformer<d_out.Test_Group_Result, d_in.Test_Group> = ($) => {
    return _ea.dictionary_literal({
        "static-html": ['group', $.__get_entry("static-html").transform(
            ($) => _ea.cc($, ($): d_out.Test_Group_Child_Result => {
                switch ($[0]) {
                    case 'group': return _ea.ss($, ($): d_out.Test_Group_Child_Result => _ea.cc($, ($) => {
                        switch ($[0]) {
                            case 'valid': return _ea.ss($, ($) => ['valid', _ea.dictionary_literal({
                                "fountain-pen": ['group', $.__get_entry("fountain-pen").transform(
                                    ($) => _ea.cc($, ($): d_out.Test_Group_Child_Result => {
                                        switch ($[0]) {
                                            case 'group': return _ea.ss($, ($): d_out.Test_Group_Child_Result => _ea.cc($, ($) => {
                                                switch ($[0]) {
                                                    case 'valid': return _ea.ss($, ($) => ['valid', $.map(($, key): d_out.Test_Node_Result => ['individual test', _ea.cc($, ($): d_out.Individual_Test_Result => {
                                                        switch ($[0]) {
                                                            case 'group': return _ea.ss($, ($): d_out.Individual_Test_Result => ['not an individual test', null])
                                                            case 'test': return _ea.ss($, ($): d_out.Individual_Test_Result => _ea.cc($, ($) => {
                                                                switch ($[0]) {
                                                                    case 'valid': return _ea.ss($, ($) => {
                                                                        const out = r_temp_static_html.Temp_Static_HTML($.input).transform(
                                                                            ($) => $,
                                                                            ($) => _ea.deprecated_panic("implement me: make the tester able to detect failing refiners and determine if that was the expected result")
                                                                            )
                                                                        return out === $.expected
                                                                            ? ['passed', null]
                                                                            : ['failed', {
                                                                                'expected': $.expected,
                                                                                'actual': out,
                                                                            }]
                                                                    })
                                                                    case 'expected does not exist': return _ea.ss($, ($) => ['expected is missing', null])
                                                                    case 'expected is not an individual test': return _ea.ss($, ($) => ['expected is not an individual test', null])
                                                                    default: return _ea.au($[0])
                                                                }
                                                            }))
                                                            default: return _ea.au($[0])
                                                        }
                                                    })])])
                                                    case 'expected does not exist': return _ea.ss($, ($) => ['expected is missing', null])
                                                    case 'expected is not a group': return _ea.ss($, ($) => ['not a group', null])
                                                    default: return _ea.au($[0])
                                                }
                                            }))
                                            case 'test': return _ea.ss($, ($): d_out.Test_Group_Child_Result => ['not a group', null])
                                            default: return _ea.au($[0])
                                        }
                                    }),
                                    (): d_out.Test_Group_Child_Result => ['missing', null],
                                )]
                            })])
                            case 'expected does not exist': return _ea.ss($, ($) => ['expected is missing', null])
                            case 'expected is not a group': return _ea.ss($, ($) => ['not a group', null])
                            default: return _ea.au($[0])
                        }
                    }))
                    case 'test': return _ea.ss($, ($): d_out.Test_Group_Child_Result => ['not a group', null])
                    default: return _ea.au($[0])
                }
            }),
            (): d_out.Test_Group_Child_Result => ['missing', null],
        )]
    })
}
