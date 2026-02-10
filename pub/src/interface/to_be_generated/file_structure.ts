import * as _pi from 'pareto-core/dist/interface'

import * as d_static_html from "../generated/liana/schemas/static-html/data"

export type Directory = _pi.Dictionary<Node>


export type Node =
| ['file', d_static_html.Document]
| ['directory', Directory]