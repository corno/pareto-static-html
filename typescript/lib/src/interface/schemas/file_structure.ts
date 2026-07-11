import * as p_ from 'pareto-core/interface/data'

import type * as d_static_html from "./static_html.js"

export type Directory = p_.Dictionary<Node>


export type Node =
| ['file', d_static_html.Document]
| ['directory', Directory]