
import * as signatures from "../../../../interface/transformers/html/prose"

//dependencies
import * as t_xml_to_fountain_pen from "../../../../modules/xml/implementation/manual/transformers/xml/prose"
import * as t_to_xml from "./xml"


export const Document: signatures.Document = ($) => t_xml_to_fountain_pen.Document(
    t_to_xml.Document($),
)

export const Phrasing_Element: signatures.Phrasing_Element = ($) => t_xml_to_fountain_pen.Element(
    t_to_xml.Phrasing_Element($),
)