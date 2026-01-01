
import { Directory_to_Test_Group_Result_Transformer } from "pareto-test/dist/implementation/temp/higher_order_functions/generic_testset/temp"

export type Package_Tester = {
    'schemas': { [key: string]: Schema_Tester }
}

export type Schema_Tester = {
    'serializers'?: {
        [key: string]: Directory_to_Test_Group_Result_Transformer
    }
}