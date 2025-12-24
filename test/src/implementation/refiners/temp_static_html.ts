import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'

import { parse as r_parse } from "pub/dist/implementation/generated/pareto/generic/parse/parse"
import * as r_unmarshall_static_html from "pub/dist/implementation/generated/pareto/schemas/static-html/unmarshall"

import * as t_static_html_to_fountain_pen from "pub/dist/implementation/transformers/schemas/html/fountain_pen"
import * as t_fountain_pen_to_text from "pareto-fountain-pen/dist/implementation/algorithms/transformations/block/text"

import { $$ as deser_boolean } from "pareto-standard-operations/dist/implementation/deserializers/primitives/boolean/true_false"
import { $$ as deser_decimal } from "pareto-standard-operations/dist/implementation/deserializers/primitives/integer/decimal"

export type Error =
    | ['parse error', null]
    | ['unmarshall error', null]

export const Temp_Static_HTML: _et.Deprecated_Refiner_Catcher<string, Error, string> = ($) => {
    return r_parse(
        $,
        {
            'tab size': 4,
        }
    ).deprecated_transform_error(
        (): Error => ['parse error', null],
    ).deprecated_refine_old(
        ($) => _ei.__create_success_refinement_result(r_unmarshall_static_html.Document(
            $.content,
            {
                'value deserializers': {
                    'boolean': ($) => deser_boolean($, () => _ea.deprecated_panic("boolean deserializer error in temp static html test")),
                    'default number': ($) => deser_decimal($, () => _ea.deprecated_panic("decimal deserializer error in temp static html test")),
                    'custom numbers': {
                        'Position': ($) => deser_decimal($, () => _ea.deprecated_panic("decimal deserializer error in temp static html test")),
                    }
                }
            }
        )),
        ($) => ['unmarshall error', null],
    ).transform_result(
        ($): string => {
            const fp = t_static_html_to_fountain_pen.Document($)
            const text = t_fountain_pen_to_text.Group(fp, { 'indentation': `    ` })
            return text
        }
    )
}