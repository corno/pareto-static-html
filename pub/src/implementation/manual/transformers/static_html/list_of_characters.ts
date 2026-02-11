import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../interface/generated/liana/schemas/static-html/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"


//dependencies
import * as t_static_html_to_fp from "./fountain_pen"
import * as t_fp_to_text from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/list_of_characters"

export type Document = _pi.Transformer<d_in.Document, d_out.List_of_Characters>

export const Document: Document = ($) => t_fp_to_text.Paragraph(
    t_static_html_to_fp.Document($),
    {
        'indentation': "    ",
        'newline': "\n",
    }
)