import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d_in from "../../../modules/pareto-test/interface/data/generic_testset"
import * as d_out from "../../../modules/pareto-test/interface/data/test_result"

import * as r_temp_static_html from "../../refiners/temp_static_html"
import { test_group_shorthand } from '../../../modules/pareto-test/implementation/temp/helpers'

export const Test_Result: _et.Transformer<d_out.Test_Group_Result, d_in.Group> = ($) => {
    return test_group_shorthand(
        {
            "static-html": ['group', {
                "fountain-pen": ['test set', ($) => r_temp_static_html.Temp_Static_HTML($).transform(
                    ($) => $,
                    ($) => _ea.deprecated_panic("implement me: make the tester able to detect failing refiners and determine if that was the expected result")
                )]
            }]
        },
        $
    )
}
