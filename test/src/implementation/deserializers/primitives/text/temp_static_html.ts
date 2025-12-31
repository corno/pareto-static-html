import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'
import * as _pinternals from 'pareto-core-internals'

import { parse as r_parse } from "pub/dist/implementation/generated/pareto/generic/parse/parse"
import * as r_unmarshall_static_html from "pub/dist/implementation/generated/pareto/schemas/static-html/unmarshall"

import * as t_static_html_to_fountain_pen from "pub/dist/implementation/manual/schemas/html/transformers/fountain_pen"
import * as t_fountain_pen_to_text from "pareto-fountain-pen/dist/implementation/manual/schemas/block/serializers"

import { $$ as deser_boolean } from "pareto-standard-operations/dist/implementation/manual/primitives/boolean/deserializers/true_false"
import { $$ as deser_decimal } from "pareto-standard-operations/dist/implementation/manual/primitives/integer/deserializers/decimal"

export type Error =
    | ['parse error', null]
    | ['unmarshall error', null]

export const Temp_Static_HTML: _pi.Deserializer<string, Error> = ($, abort) => {
    const x = r_parse(
        $,
        {
            'tab size': 4,
        },
        ($) => abort(['parse error', null])
    )

    const x2 = r_unmarshall_static_html.Document(
        x.content,
        {
            'value deserializers': {
                'boolean': ($) => deser_boolean($, () => _pinternals.panic("boolean deserializer error in temp static html test")),
                'default number': ($) => deser_decimal($, () => _pinternals.panic("decimal deserializer error in temp static html test")),
                'custom numbers': {
                    'Position': ($) => deser_decimal($, () => _pinternals.panic("decimal deserializer error in temp static html test")),
                }
            }
        },
        //($) => ['unmarshall error', null],
    )


    const fp = t_static_html_to_fountain_pen.Document(x2)
    const text = t_fountain_pen_to_text.Group(fp, { 'indentation': `    `, 'newline': `\n` })
    return text

}