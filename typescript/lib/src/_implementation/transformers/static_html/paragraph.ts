import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/static_html.js"
import type * as s_out from "../../../interface/schemas/paragraph.js"


namespace declarations {
    export type Document = p_.Transformer<
        s_in.Document,
        s_out.Paragraph
    >
    // export type Flow_Element = p_.Serializer<
    //     s_in.Flow_Element
    // >
    // export type Flow_Content = p_.Serializer<
    //     s_in.Flow_Content
    // >
    // export type Classes = p_.Serializer<
    //     s_in.Classes
    // >
    export type Phrasing_Element = p_.Transformer<
        s_in.Phrasing_Element,
        s_out.Phrase
    >
    // export type Phrasing_Content = p_.Serializer<
    //     s_in.Phrasing_Content
    // >
}

//dependencies
import * as t_xml_to_prose from "../../../submodules/xml/implementation/transformers/xml/paragraph.js"
import * as t_to_xml from "./xml.js"


export const Document: declarations.Document = ($) => t_xml_to_prose.Document(
    t_to_xml.Document($),
)

export const Phrasing_Element: declarations.Phrasing_Element = ($) => t_xml_to_prose.Element(
    t_to_xml.Phrasing_Element($),
)