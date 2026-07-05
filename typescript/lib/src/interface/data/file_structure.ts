import * as p_ from 'pareto-core/interface/data'

import * as d_static_html from "../generated/liana/schemas/static-html/data.js"

export type Directory = p_.Dictionary<Node>


export type Node =
| ['file', d_static_html.Document]
| ['directory', Directory]