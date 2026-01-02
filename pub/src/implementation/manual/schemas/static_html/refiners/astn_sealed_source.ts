import * as _p from 'pareto-core-refiner'
import * as _pi from 'pareto-core-interface'

import * as d_out from "../../../../../interface/generated/pareto/schemas/static-html/data_types/target"
import * as d_unmarshall from "../../../../../interface/generated/pareto/core/unmarshall"
import * as d_astn_sealed_source from "../../../../../interface/generated/pareto/core/astn_source"

//dependencies
import { parse as r_parse } from "../../../../generated/pareto/generic/parse/parse"
import * as r_unmarshall_static_html from "../../../../generated/pareto/schemas/static-html/unmarshall"
import { $$ as deser_boolean } from "pareto-standard-operations/dist/implementation/manual/primitives/boolean/deserializers/true_false"
import { $$ as deser_decimal } from "pareto-standard-operations/dist/implementation/manual/primitives/integer/deserializers/decimal"


export const Document: _pi.Refiner<d_out.Document, d_unmarshall.Error, d_astn_sealed_source._T_Document> = ($, abort) => {
    return r_unmarshall_static_html.Document(
        $.content,
        {
            'value deserializers': {
                'boolean': ($) => deser_boolean($, () => abort(['primitive deserialization', null])),
                'default number': ($) => deser_decimal($, () => abort(['primitive deserialization', null])),
                'custom numbers': {
                    'Position': ($) => deser_decimal($, () => abort(['primitive deserialization', null])),
                }
            }
        },
    )

}