
import * as _p from "pareto-core/dist/refiner"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/static-html/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_generic from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"
export const Classes: t_signatures.Classes = ($,abort) => v_generic.expect_list(
    $, 
    ($) => abort(
        ['expected a list', null]
    )
).__l_map(
    ($) => v_generic.expect_text(
        $, 
        ($) => abort(
            ['expected a text', null]
        )
    )
)
export const Phrasing_Content: t_signatures.Phrasing_Content = ($,abort) => v_generic.expect_list(
    $, 
    ($) => abort(
        ['expected a list', null]
    )
).__l_map(
    ($) => _p_unreachable_code_path(
    )
)
export const Flow_Content: t_signatures.Flow_Content = ($,abort) => v_generic.expect_list(
    $, 
    ($) => abort(
        ['expected a list', null]
    )
).__l_map(
    ($) => _p_unreachable_code_path(
    )
)
export const Document: t_signatures.Document = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'css': _p_cc(
            $.__get_entry(
                'css', 
                ($) => abort(
                    ['no such entry', "css"]
                )
            ), 
            ($) => v_generic.expect_text(
                $, 
                ($) => abort(
                    ['expected a text', null]
                )
            )
        ),
        'root': _p_cc(
            $.__get_entry(
                'root', 
                ($) => abort(
                    ['no such entry', "root"]
                )
            ), 
            ($) => Flow_Content(
                $, 
                ($) => abort(
                    $
                )
            )
        ),
    })
)
