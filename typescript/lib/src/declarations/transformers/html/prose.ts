import * as p_ from 'pareto-core/interface/transformer'

import type * as d_in from "../../../interface/data/static_html.js"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"

export type Document = p_.Transformer<
    d_in.Document,
    d_out.Paragraph
>

export type Flow_Element = p_.Transformer<
    d_in.Flow_Element,
    d_out.Phrase
>
export type Flow_Content = p_.Transformer<
    d_in.Flow_Content,
    d_out.Phrase
>

export type Classes = p_.Transformer<
    d_in.Classes,
    d_out.Phrase
>

export type Phrasing_Element = p_.Transformer<
    d_in.Phrasing_Element,
    d_out.Phrase
>
export type Phrasing_Content = p_.Transformer<
    d_in.Phrasing_Content,
    d_out.Phrase
>
