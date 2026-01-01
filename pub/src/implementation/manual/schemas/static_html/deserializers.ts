import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'
import * as _pinternals from 'pareto-core-internals'

import * as d_out from "../../../../interface/generated/pareto/schemas/static-html/data_types/target"
import * as d_unmarshall from "../../../../interface/generated/pareto/core/unmarshall"

//dependencies
import * as r_static_html_from_astn_sealed_source from "./refiners/astn_sealed_source"
import { parse as r_parse } from "../../../generated/pareto/generic/parse/parse"


export const Document: _pi.Deserializer<d_out.Document, d_unmarshall.Error> = ($, abort) => {
    const x = r_parse(
        $,
        {
            'tab size': 4,
        },
        ($) => abort(['parse error', null])
    )

    return r_static_html_from_astn_sealed_source.Document(x, abort)

}