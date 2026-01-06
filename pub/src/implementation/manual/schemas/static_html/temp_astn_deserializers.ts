import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'

import * as d_out from "../../../../interface/generated/pareto/schemas/static-html/data_types/target"
import * as d_unmarshall from "../../../../interface/generated/pareto/core/unmarshall"

//dependencies
import * as r_static_html_from_astn_sealed_source from "./refiners/astn_sealed_source"
import { Document as r_parse } from "astn-sealed/dist/implementation/schemas/astn_source/deserializers"


export const Document: _pi.Deserializer_With_Parameters<d_out.Document, d_unmarshall.Error, { 'uri': string }> = ($, abort, $p) => r_static_html_from_astn_sealed_source.Document(
    r_parse(
        $,
        ($) => abort(['parse error', null]),
        {
            'tab size': 4,
            'uri': $p.uri
        },
    ),
    abort
)