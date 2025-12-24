import * as _et from 'exupery-core-types'

import * as d_in from "../../../generated/pareto/schemas/static-html/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"


export type Document = _et.Transformer<d_in.Document, d_out.Group>

export type Flow_Content = _et.Transformer<d_in.Flow_Content, d_out.Block_Part>

export type Classes = _et.Transformer<d_in.Classes, d_out.Block_Part>

export type Phrasing_Content = _et.Transformer<d_in.Phrasing_Content, d_out.Block_Part>