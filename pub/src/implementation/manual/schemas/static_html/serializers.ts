import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../interface/generated/pareto/schemas/static-html/data"


//dependencies
import * as t_static_html_to_fp from "./transformers/fountain_pen"
import * as s_fp from "pareto-fountain-pen/dist/implementation/manual/schemas/block/serializers"

export type Document = _pi.Serializer<d_in.Document>

export const Document: Document = ($) => s_fp.Group(
    t_static_html_to_fp.Document($),
    {
        'indentation': `    `,
        'newline': `\n`,
    }
)