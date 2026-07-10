
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../interface/data/static_html.js"
import type * as d_out from "../../../modules/xml/interface/data/xml.js"

export type Document = p_.Transformer<
    d_in.Document, d_out.Document
>
export type Flow_Element = p_.Transformer<
    d_in.Flow_Element, d_out.Element.content_type.nodes_only.children.L
>
export type Flow_Content = p_.Transformer<
    d_in.Flow_Content, d_out.Element.content_type.nodes_only.children
>
export type Classes = p_.Transformer<
    d_in.Classes, d_out.Element.attributes
>
export type Phrasing_Content = p_.Transformer<
    d_in.Phrasing_Content, d_out.Mixed_Content
>
export type Phrasing_Element = p_.Transformer<
    d_in.Phrasing_Element, d_out.Element
>


