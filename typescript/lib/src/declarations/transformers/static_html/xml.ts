
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as s_in from "../../../interface/schemas/static_html.js"
import type * as s_out from "../../../submodules/xml/interface/schemas/xml.js"

export type Document = p_.Transformer<
    s_in.Document, s_out.Document
>
export type Flow_Element = p_.Transformer<
    s_in.Flow_Element, s_out.Element.content_type.nodes_only.children.L
>
export type Flow_Content = p_.Transformer<
    s_in.Flow_Content, s_out.Element.content_type.nodes_only.children
>
export type Classes = p_.Transformer<
    s_in.Classes, s_out.Element.attributes
>
export type Phrasing_Content = p_.Transformer<
    s_in.Phrasing_Content, s_out.Mixed_Content
>
export type Phrasing_Element = p_.Transformer<
    s_in.Phrasing_Element, s_out.Element
>


