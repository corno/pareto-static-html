
import * as _p from 'pareto-core/dist/assign'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/static-html/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/transformers/sealed_target/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

export const Document: t_signatures.Document = ($) => v_serialize.Document(
    v_marshall.Document(
        $,
    ),
)

export const Flow_Content: t_signatures.Flow_Content = ($) => v_serialize.Document(
    v_marshall.Flow_Content(
        $,
    ),
)

export const Classes: t_signatures.Classes = ($) => v_serialize.Document(
    v_marshall.Classes(
        $,
    ),
)

export const Phrasing_Content: t_signatures.Phrasing_Content = ($) => v_serialize.Document(
    v_marshall.Phrasing_Content(
        $,
    ),
)

export const Phrasing_Element: t_signatures.Phrasing_Element = ($) => v_serialize.Document(
    v_marshall.Phrasing_Element(
        $,
    ),
)
