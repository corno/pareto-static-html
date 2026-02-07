
import * as _p from 'pareto-core/dist/expression'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/static-html/deserialize"

import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/refiners/list_of_characters"

import * as v_unmarshall from "./astn_parse_tree"

export const Document: t_signatures.Document = ($, abort, $p) => v_unmarshall.Document(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)

export const Flow_Content: t_signatures.Flow_Content = ($, abort, $p) => v_unmarshall.Flow_Content(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)

export const Classes: t_signatures.Classes = ($, abort, $p) => v_unmarshall.Classes(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)

export const Phrasing_Content: t_signatures.Phrasing_Content = ($, abort, $p) => v_unmarshall.Phrasing_Content(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)
