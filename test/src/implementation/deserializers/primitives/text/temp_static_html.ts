import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'
import * as _pinternals from 'pareto-core-internals'

import * as ds_static_html from "pub/dist/implementation/manual/schemas/static_html/deserializers"
import * as s_static_html from "pub/dist/implementation/manual/schemas/static_html/serializers"


export const Static_HTML: _pi.Deserializer<string, string> = ($, abort) => {
    return s_static_html.Document(
        ds_static_html.Document(
            $,
            ($) => abort(`fix the error serialization`),
        ),
    )

}