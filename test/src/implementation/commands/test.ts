import * as _pt from 'pareto-core-transformer'
import * as _easync from 'exupery-core-async'

import { $$ as command_creator } from "pareto-test/dist/implementation/temp/higher_order_functions/command_creators/test"
import * as t_generic_testset_to_test_result from "../transformers/schemas/generic_testset/test_result"

import * as sh from "pareto-test/dist/implementation/temp/higher_order_functions/generic_testset/testset_shorthands"

export const $$ = command_creator(
    {
        'text to astn': sh.test_group({}),
        'astn to astn': sh.test_group({}),
        'astn to text': t_generic_testset_to_test_result.Test_Result,
    }
)