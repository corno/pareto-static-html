import * as _et from "exupery-core-types"
import * as _ea from "exupery-core-alg"

import * as d_in from "exupery-resources/dist/interface/algorithms/queries/directory_content"
import * as d_out from "../../../interface/data/generic_testset"

export const Test_Group: _et.Transformer_With_Parameters<d_out.Test_Group, d_in.Directory, d_in.Directory> = ($, $p) => {
    return $.map(($, key) => {
        const bottom_node = $p.__get_entry(key)
        return _ea.cc($, ($): d_out.Test_Node => {
            switch ($[0]) {
                case 'other': return _ea.ss($, ($): d_out.Test_Node => {
                    return _ea.deprecated_panic(`expected a file or a directory`)
                })
                case 'file': return _ea.ss($, ($): d_out.Test_Node => {
                    const top_node = $
                    return ['test', bottom_node.transform<d_out.Test>(
                        ($): d_out.Test => _ea.cc($, ($) => {
                            switch ($[0]) {
                                case 'file': return _ea.ss($, ($): d_out.Test => ['valid', {
                                    'input': top_node,
                                    'expected': $
                                }])
                                case 'directory': return _ea.ss($, ($): d_out.Test => ['expected is not an individual test', null])
                                case 'other': return _ea.ss($, ($): d_out.Test => ['expected is not an individual test', null])
                                default: return _ea.au($[0])
                            }
                        }),
                        (): d_out.Test => ['expected does not exist', null]
                    )]
                })
                case 'directory': return _ea.ss($, ($) => {
                    const top_node = $
                    return ['group', bottom_node.transform(
                        ($): d_out.Test_Group_Node => _ea.cc($, ($) => {
                            switch ($[0]) {
                                case 'other': return _ea.ss($, ($): d_out.Test_Group_Node => ['expected is not a group', null])
                                case 'file': return _ea.ss($, ($): d_out.Test_Group_Node => ['expected is not a group', null])
                                case 'directory': return _ea.ss($, ($) => ['valid', Test_Group(top_node, $)])
                                default: return _ea.au($[0])
                            }
                        }),
                        (): d_out.Test_Group_Node => ['expected does not exist', null]
                    )]
                })
                default: return _ea.au($[0])
            }
        })
    })
}

