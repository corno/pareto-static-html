
import * as p_ from 'pareto-core/implementation/transformer'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/xml/signatures/transformers/fountain_pen.js"

import * as v_serialize from "astn-core/implementation/manual/transformers/sealed_target/prose"

import * as v_marshall from "./astn_sealed_target.js"

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
