import * as p_i from 'pareto-core/interface/transformer'

import type * as d_in from "../../../generated/liana/schemas/static-html/data.js"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"

export type Document = p_i.Transformer<
    d_in.Document,
    d_out.Paragraph
>

export type Flow_Element = p_i.Transformer<
    d_in.Flow_Element,
    d_out.Phrase
>
export type Flow_Content = p_i.Transformer<
    d_in.Flow_Content,
    d_out.Phrase
>

export type Classes = p_i.Transformer<
    d_in.Classes,
    d_out.Phrase
>

export type Phrasing_Element = p_i.Transformer<
    d_in.Phrasing_Element,
    d_out.Phrase
>
export type Phrasing_Content = p_i.Transformer<
    d_in.Phrasing_Content,
    d_out.Phrase
>
