import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'

import * as sh from "pareto-test/dist/implementation/temp/higher_order_functions/generic_testset/testset_shorthands"
import { Directory_to_Test_Group_Result_Transformer } from "pareto-test/dist/implementation/temp/higher_order_functions/generic_testset/temp"
import { Package_Tester, Schema_Tester } from './temp_pareto-test-interface'



export const create_serializer_tester = <T>(
    initialize: _pi.Deserializer<T, string>,
    serializer: _pi.Serializer<T>,
): Directory_to_Test_Group_Result_Transformer => {
    return sh.transformer(
        ($, abort) => {
            const deserialized = initialize(
                $,
                ($) => abort(`deserializer error: ${$}`),
            )
            const serialized = serializer(
                deserialized,
            )
            return serialized
        },
    )
}
const dict_to_raw = <T>($: _pi.Dictionary<T>) => {
    const temp: { [key: string]: T } = {}
    $.map(($, key) => {
        temp[key] = $
    })
    return temp
}

const dict_to_test_group_result_transformer = <T>($: undefined | { [key: string]: T }, map: ($: T) => Directory_to_Test_Group_Result_Transformer): Directory_to_Test_Group_Result_Transformer => {
    return sh.test_group(dict_to_raw(_pt.dictionary_literal($ === undefined ? {} : $).map(($): Directory_to_Test_Group_Result_Transformer => map($))))
}

export namespace t_package_tester_to_test_group_result_transformer {

    export const Package_Tester: ($: Package_Tester) => Directory_to_Test_Group_Result_Transformer = ($) => {
        return dict_to_test_group_result_transformer($.schemas, ($) => Schema_Tester($))
    }

    export const Schema_Tester: ($: Schema_Tester) => Directory_to_Test_Group_Result_Transformer = ($) => {
        return dict_to_test_group_result_transformer({
            "serializers": dict_to_test_group_result_transformer($.serializers, ($) => $)
        }, ($) => $)
    }

}