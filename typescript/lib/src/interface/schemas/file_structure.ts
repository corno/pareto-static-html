import * as p_ from 'pareto-core/interface/schema'

import type * as s_static_html from "./static_html.js"

export type Directory = p_.Dictionary<Node>


export type Node =
| ['file', s_static_html.Document]
| ['directory', Directory]