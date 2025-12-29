import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'

import * as d_in from "pareto-test/dist/interface/to_be_generated/generic_testset"
import * as d_out from "pareto-test/dist/interface/to_be_generated/test_result"

import * as r_temp_static_html from "../../../deserializers/primitives/text/temp_static_html"

import * as sh from "pareto-test/dist/implementation/temp/higher_order_functions/generic_testset/testset_shorthands"

export const Test_Result = sh.test_group(
    {
        "static-html": sh.test_group(
            {
                "fountain-pen": sh.refiner(
                    ($, abort) => {
                        return r_temp_static_html.Temp_Static_HTML(
                            $,
                            ($) => abort.refine("FIX: CREATE ERROR STRING")
                        )
                    },
                )
            }
        )
    },
)