import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d_in from "pareto-test/dist/interface/data/generic_testset"
import * as d_out from "pareto-test/dist/interface/data/test_result"

import * as r_temp_static_html from "../../refiners/temp_static_html"

import * as sh from "pareto-test/dist/implementation/temp/higher_order_functions/generic_testset/testset"

export const Test_Result: _et.Transformer<d_out.Test_Group_Result, d_in.Group> = ($) => {
    return sh.test_group_shorthand(
        {
            "static-html": sh.group({
                "fountain-pen": sh.refiner(
                    ($, abort) => r_temp_static_html.Temp_Static_HTML($).transform(
                        ($) => $,
                        ($) => abort.refine("FIX: CREATE ERROR STRING")
                    ),
                )
            })
        },
        $
    )
}
