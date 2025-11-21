import * as _et from 'exupery-core-types'

import * as d_in from "../../../generated/pareto/schemas/static-html/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"


export type Document = _et.Transformer<d_out.Group, d_in.Document>

export type Flow_Content = _et.Transformer<d_out.Block_Part, d_in.Flow_Content>

export type Classes = _et.Transformer<d_out.Block_Part, d_in.Classes>

export type Phrasing_Content = _et.Transformer<d_out.Block_Part, d_in.Phrasing_Content>
