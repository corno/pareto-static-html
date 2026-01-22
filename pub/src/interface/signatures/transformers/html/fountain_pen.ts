import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../generated/pareto/schemas/static-html/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data"

export type Document = _pi.Transformer<d_in.Document, d_out.Group>

export type Flow_Content = _pi.Transformer<d_in.Flow_Content, d_out.Block_Part>

export type Classes = _pi.Transformer<d_in.Classes, d_out.Block_Part>

export type Phrasing_Content = _pi.Transformer<d_in.Phrasing_Content, d_out.Block_Part>
