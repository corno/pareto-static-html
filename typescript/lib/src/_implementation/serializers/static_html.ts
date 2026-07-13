import * as p_ from 'pareto-core/implementation/serializer'

//schemas
import type * as s_in from "../../interface/schemas/static_html.js"


namespace declarations {
    export type Document = p_.Paragraph_Serializer<
        s_in.Document
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
    export type Phrasing_Element = p_.Phrase_Serializer<
        s_in.Phrasing_Element
    >
    // export type Phrasing_Content = p_.Serializer<
    //     s_in.Phrasing_Content
    // >
}

//dependencies
import * as t_xml_to_prose from "../../submodules/xml/implementation/serializers/xml.js"
import * as t_to_xml from "../transformers/static_html/xml.js"


export const Document: declarations.Document = ($) => t_xml_to_prose.Document(
    t_to_xml.Document($),
)

export const Phrasing_Element: declarations.Phrasing_Element = ($) => t_xml_to_prose.Element(
    t_to_xml.Phrasing_Element($),
)