import * as p_ from 'pareto-core/interface/transformer'

import type * as s_in from "../../../interface/schemas/static_html.js"
import type * as s_out from "pareto-fountain-pen/interface/data/prose"

export type Document = p_.Transformer<
    s_in.Document,
    s_out.Paragraph
>

export type Flow_Element = p_.Transformer<
    s_in.Flow_Element,
    s_out.Phrase
>
export type Flow_Content = p_.Transformer<
    s_in.Flow_Content,
    s_out.Phrase
>

export type Classes = p_.Transformer<
    s_in.Classes,
    s_out.Phrase
>

export type Phrasing_Element = p_.Transformer<
    s_in.Phrasing_Element,
    s_out.Phrase
>
export type Phrasing_Content = p_.Transformer<
    s_in.Phrasing_Content,
    s_out.Phrase
>
