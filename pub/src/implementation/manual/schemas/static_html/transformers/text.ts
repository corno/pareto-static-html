import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/liana/schemas/static-html/data"
import * as d_out from "pareto-fountain-pen/dist/interface/to_be_generated/text"


//dependencies
import * as t_static_html_to_fp from "./fountain_pen"
import * as t_fp_to_text from "pareto-fountain-pen/dist/implementation/manual/schemas/block/transformers/text"

export type Document = _pi.Transformer<d_in.Document, d_out.Text>

export const Document: Document = ($) => t_fp_to_text.Group(
    t_static_html_to_fp.Document($),
    {
        'indentation': `    `,
        'newline': `\n`,
    }
)