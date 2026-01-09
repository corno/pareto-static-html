import * as _p from 'pareto-core-serializer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/static-html/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"


export const Classes: _i_signatures._T_Classes = ($, $p) => _i_serialize.Document(
    _i_marshall.Classes(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Phrasing_Content: _i_signatures._T_Phrasing_Content = ($, $p) => _i_serialize.Document(
    _i_marshall.Phrasing_Content(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Flow_Content: _i_signatures._T_Flow_Content = ($, $p) => _i_serialize.Document(
    _i_marshall.Flow_Content(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Document: _i_signatures._T_Document = ($, $p) => _i_serialize.Document(
    _i_marshall.Document(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
