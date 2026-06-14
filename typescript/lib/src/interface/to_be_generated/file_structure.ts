import * as p_di from 'pareto-core/dist/data/interface'

import * as d_static_html from "../generated/liana/schemas/static-html/data"

export type Directory = p_di.Dictionary<Node>


export type Node =
| ['file', d_static_html.Document]
| ['directory', Directory]