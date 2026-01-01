import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'
import * as _pinternals from 'pareto-core-internals'

import * as d_static_html from "pub/dist/interface/generated/pareto/schemas/static-html/data_types/target"

import * as ds_static_html from "pub/dist/implementation/manual/schemas/static_html/deserializers"
import * as s_static_html from "pub/dist/implementation/manual/schemas/static_html/serializers"


export const Document_Deserialize: _pi.Deserializer<d_static_html.Document, string> = ($, abort) => {
    return ds_static_html.Document(
        $,
        ($) => abort(`fix the deserialize error serialization`),
    )
}

export const Document_Serialize: _pi.Serializer<d_static_html.Document> = ($) => {
    return s_static_html.Document(
        $,
    )
}