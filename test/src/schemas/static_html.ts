import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'

import * as sh from "pareto-test/dist/temporary_testset_generator/shorthands"

import * as ds_static_html from "pub/dist/implementation/manual/schemas/static_html/temp_astn_deserializers"
import * as s_static_html from "pub/dist/implementation/manual/schemas/static_html/serializers"


import * as s_unmarshall from "pub/dist/implementation/generated/pareto/serialize_unmarshall_error"

export const $$ = sh.schema(

    {},
    {},
    {},
    {},
    {},
    // {
    //     'serializers': {
    //         "Document": sh.serializer(
    //             `.html`,
    //             s_static_html.Document,
    //             ($, abort) => ds_static_html.Document($, abort, { 'uri': "FIXME" }),
    //             s_unmarshall.Error,
    //         )
    //     }
    // }
)