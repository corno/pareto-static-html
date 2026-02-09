import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../generated/liana/schemas/static-html/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export type Document = _pi.Transformer<d_in.Document, d_out.Paragraph>

export type Flow_Content = _pi.Transformer<d_in.Flow_Content, d_out.Phrase>

export type Classes = _pi.Transformer<d_in.Classes, d_out.Phrase>

export type Phrasing_Content = _pi.Transformer<d_in.Phrasing_Content, d_out.Phrase>
