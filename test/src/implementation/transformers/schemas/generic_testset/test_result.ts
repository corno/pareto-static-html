import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'

import * as r_temp_static_html from "../../../deserializers/primitives/text/temp_static_html"

import * as sh from "pareto-test/dist/implementation/temp/higher_order_functions/generic_testset/testset_shorthands"
import { Directory_to_Test_Group_Result_Transformer } from "pareto-test/dist/implementation/temp/higher_order_functions/generic_testset/temp"
import { Package_Tester } from '../../../../temp_pareto-test-interface'
import { create_serializer_tester, t_package_tester_to_test_group_result_transformer } from '../../../../temp_pareto-test-implementation'


const this_package_tester: Package_Tester = {
    'schemas': {
        "static-html": {
            'serializers': {
                "Document": create_serializer_tester(
                    r_temp_static_html.Document_Deserialize,
                    r_temp_static_html.Document_Serialize,
                )
            }
        }
    }
}


export const Test_Result = t_package_tester_to_test_group_result_transformer.Package_Tester(this_package_tester)