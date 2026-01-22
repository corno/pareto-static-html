// import * as _p from 'pareto-core/dist/refiner'
// import * as _pi from 'pareto-core/dist/interface'

// import * as d_out from "../../../../../interface/generated/pareto/schemas/static-html/data"
// import * as d_unmarshall from "../../../../../interface/to_be_generated/unmarshall"
// import * as d_astn_sealed_source from "astn-core/dist/interface/generated/pareto/schemas/parse_tree/data"

// //dependencies
// // import * as r_unmarshall_static_html from "../../../../generated/pareto/schemas/static-html/unmarshall"
// import { $$ as deser_boolean } from "pareto-standard-operations/dist/implementation/manual/primitives/boolean/deserializers/true_false"
// import { $$ as deser_decimal } from "pareto-standard-operations/dist/implementation/manual/primitives/integer/deserializers/decimal"


// export const Document: _pi.Refiner<d_out.Document, d_unmarshall.Error, d_astn_sealed_source.Document> = ($, abort) => r_unmarshall_static_html.Document(
//     $.content,
//     {
//         'value deserializers': {
//             'boolean': ($) => deser_boolean($, () => abort(['primitive deserialization', null])),
//             'default number': ($) => deser_decimal($, () => abort(['primitive deserialization', null])),
//             'custom numbers': {
//                 'Position': ($) => deser_decimal($, () => abort(['primitive deserialization', null])),
//             }
//         }
//     },
// )