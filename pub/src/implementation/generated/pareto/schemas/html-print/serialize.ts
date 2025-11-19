import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/html-print/serialize"
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
export const Span: _i_signatures._T_Span = ($, $p) => _i_serialize.Document(
    _i_marshall.Span(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Div: _i_signatures._T_Div = ($, $p) => _i_serialize.Document(
    _i_marshall.Div(
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
