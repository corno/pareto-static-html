import * as _pi from 'pareto-core/dist/interface'
import * as _pt from 'pareto-core/dist/assign'

import * as sh from "pareto-test/dist/temporary_testset_generator/shorthands"


// import * as s_unmarshall from "pub/dist/implementation/generated/liana/serialize_unmarshall_error"

export const $$ = sh.schema(

    {},
    {},
    {},
    {},
    {},
    // {
    //     'serializers': {
    //         "Document": sh.serializer(
    //             ".html",
    //             s_static_html.Document,
    //             ($, abort) => ds_static_html.Document($, abort, { 'document resource identifier': "FIXME" }),
    //             s_unmarshall.Error,
    //         )
    //     }
    // }
)