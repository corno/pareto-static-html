import * as p_ from 'pareto-core/dist/interface/data'

import * as d_static_html from "../generated/liana/schemas/static-html/data"

export type Directory = p_.Dictionary<Node>


export type Node =
| ['file', d_static_html.Document]
| ['directory', Directory]