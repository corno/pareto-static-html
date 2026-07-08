
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../generated/liana/schemas/static-html/data.js"
import type * as d_out from "../../../generated/liana/schemas/xml/data.js"
import type * as d_text from "pareto-fountain-pen/interface/generated/liana/schemas/text/data"

//dependencies
import * as t_prose_to_text from "pareto-fountain-pen/implementation/manual/transformers/prose/text"

//shorthands
import * as sh from "../../../../modules/xml/shorthands/xml/target.js"
import * as sh_fp from "pareto-fountain-pen/shorthands/prose/deprecated"



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


