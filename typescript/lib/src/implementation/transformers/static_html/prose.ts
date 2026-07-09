
import type * as interface_ from "../../../declarations/transformers/html/prose.js"

//dependencies
import * as t_xml_to_prose from "../../../modules/xml/implementation/transformers/xml/prose.js"
import * as t_to_xml from "./xml.js"


export const Document: interface_.Document = ($) => t_xml_to_prose.Document(
    t_to_xml.Document($),
)

export const Phrasing_Element: interface_.Phrasing_Element = ($) => t_xml_to_prose.Element(
    t_to_xml.Phrasing_Element($),
)