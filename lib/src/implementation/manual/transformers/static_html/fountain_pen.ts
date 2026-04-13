import * as _p from 'pareto-core/dist/assign'

import * as signatures from "../../../../interface/signatures/transformers/html/fountain_pen"

//dependencies
import * as t_xml_to_fountain_pen from "../../../../modules/xml/implementation/manual/transformers/xml/fountain_pen"
import * as t_to_xml from "./xml"


export const Document: signatures.Document = ($) => t_xml_to_fountain_pen.Document(
    t_to_xml.Document($),
)

export const Phrasing_Element: signatures.Phrasing_Element = ($) => t_xml_to_fountain_pen.Element(
    t_to_xml.Phrasing_Element($),
)