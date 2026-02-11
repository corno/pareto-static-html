
import * as _p from 'pareto-core/dist/assign'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/xml/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/transformers/sealed_target/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

export const Document: t_signatures.Document = ($) => v_serialize.Document(
    v_marshall.Document(
        $,
    ),
)

export const Element: t_signatures.Element = ($) => v_serialize.Document(
    v_marshall.Element(
        $,
    ),
)

export const Mixed_Content: t_signatures.Mixed_Content = ($) => v_serialize.Document(
    v_marshall.Mixed_Content(
        $,
    ),
)

export const Qualified_Name: t_signatures.Qualified_Name = ($) => v_serialize.Document(
    v_marshall.Qualified_Name(
        $,
    ),
)

export const Node: t_signatures.Node = ($) => v_serialize.Document(
    v_marshall.Node(
        $,
    ),
)
