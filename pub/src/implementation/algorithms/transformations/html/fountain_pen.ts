import * as _ea from 'exupery-core-alg'

import * as d_in from "../../../../interface/generated/pareto/schemas/html-print/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as op_list_is_empty } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/list/is_empty"
import { $$ as op_enrich_list_elements_with_position_information } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/list/enrich_with_position_information"

import * as d from "../../../../interface/algorithms/transformations/html/fountain_pen"

export const Classes: d.Classes = ($) => {
    return op_list_is_empty($)
        ? sh.b.nothing()
        : sh.b.sub([
            sh.b.snippet(` class="`),
            sh.b.sub(op_enrich_list_elements_with_position_information($).map(($) => 
                $['is first'] 
                    ? sh.b.snippet($.value)
                    : sh.b.sub([sh.b.snippet(` `), sh.b.snippet($.value)])
            )),
            sh.b.snippet(`"`)
        ])
}

export const Span: d.Span = ($) => {
    return op_list_is_empty($.children)
        ? sh.b.sub([
            sh.b.snippet(`<span`),
            Classes($.classes),
            $.title.transform(
                ($) => sh.b.sub([sh.b.snippet(` title="`), sh.b.snippet($), sh.b.snippet(`"`)]),
                () => sh.b.nothing()
            ),
            sh.b.snippet(`></span>`)
        ])
        : sh.b.sub([
            sh.b.snippet(`<span`),
            Classes($.classes),
            $.title.transform(
                ($) => sh.b.sub([sh.b.snippet(` title="`), sh.b.snippet($), sh.b.snippet(`"`)]),
                () => sh.b.nothing()
            ),
            sh.b.snippet(`>`),
            sh.b.sub($.children.map((child) => 
                _ea.cc(child.type, ($) => {
                    switch ($[0]) {
                        case 'span': return _ea.ss($, ($) => Span($))
                        case 'a': return _ea.ss($, ($) => sh.b.sub([
                            sh.b.snippet(`<a`),
                            Classes(child.classes),
                            sh.b.snippet(` href="`),
                            sh.b.snippet($.href),
                            sh.b.snippet(`">`),
                            sh.b.snippet($.text),
                            sh.b.snippet(`</a>`)
                        ]))
                        case 'p': return _ea.ss($, ($) => sh.b.sub([
                            sh.b.snippet(`<p`),
                            Classes(child.classes),
                            sh.b.snippet(`>`),
                            sh.b.snippet($.text),
                            sh.b.snippet(`</p>`)
                        ]))
                        default: return _ea.au($[0])
                    }
                })
            )),
            sh.b.snippet(`</span>`)
        ])
}

export const Div: d.Div = ($) => {
    return op_list_is_empty($.children)
        ? sh.b.sub([
            sh.b.snippet(`<div`),
            Classes($.classes),
            $.width.transform(
                ($) => sh.b.sub([sh.b.snippet(` width="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]),
                () => sh.b.nothing()
            ),
            $.height.transform(
                ($) => sh.b.sub([sh.b.snippet(` height="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]),
                () => sh.b.nothing()
            ),
            sh.b.snippet(`></div>`)
        ])
        : sh.b.sub([
            sh.b.snippet(`<div`),
            Classes($.classes),
            $.width.transform(
                ($) => sh.b.sub([sh.b.snippet(` width="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]),
                () => sh.b.nothing()
            ),
            $.height.transform(
                ($) => sh.b.sub([sh.b.snippet(` height="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]),
                () => sh.b.nothing()
            ),
            sh.b.snippet(`>`),
            sh.b.indent([
                sh.g.sub($.children.map(($) => sh.g.nested_block([
                    _ea.cc($.type, ($) => {
                        switch ($[0]) {
                            case 'div': return _ea.ss($, ($) => Div($))
                            case 'table': return _ea.ss($, ($) => sh.b.sub([
                                sh.b.snippet(`<table`),
                                Classes($.classes),
                                sh.b.snippet(`>`),
                                sh.b.indent([
                                    sh.g.sub($.children.map((section) => sh.g.nested_block([
                                        _ea.cc(section.type, ($) => {
                                            switch ($[0]) {
                                                case 'header': return _ea.ss($, () => sh.b.sub([
                                                    sh.b.snippet(`<thead`),
                                                    Classes(section.classes),
                                                    sh.b.snippet(`>`),
                                                    sh.b.indent([
                                                        sh.g.sub(section.rows.map((row) => sh.g.nested_block([
                                                            sh.b.snippet(`<tr`),
                                                            Classes(row.classes),
                                                            row.height.transform(
                                                                ($) => sh.b.sub([sh.b.snippet(` height="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]),
                                                                () => sh.b.nothing()
                                                            ),
                                                            sh.b.snippet(`>`),
                                                            sh.b.indent([
                                                                sh.g.sub(row.cells.map((cell) => sh.g.nested_block([
                                                                    _ea.cc(row.type, ($) => {
                                                                        switch ($[0]) {
                                                                            case 'th': return _ea.ss($, () => sh.b.sub([
                                                                                sh.b.snippet(`<th`),
                                                                                Classes(cell.classes),
                                                                                sh.b.snippet(`>`),
                                                                                sh.b.indent([
                                                                                    sh.g.nested_block([
                                                                                        Div(cell.div)
                                                                                    ])
                                                                                ]),
                                                                                sh.b.snippet(`</th>`)
                                                                            ]))
                                                                            case 'td': return _ea.ss($, () => sh.b.sub([
                                                                                sh.b.snippet(`<td`),
                                                                                Classes(cell.classes),
                                                                                sh.b.snippet(`>`),
                                                                                sh.b.indent([
                                                                                    sh.g.nested_block([
                                                                                        Div(cell.div)
                                                                                    ])
                                                                                ]),
                                                                                sh.b.snippet(`</td>`)
                                                                            ]))
                                                                            default: return _ea.au($[0])
                                                                        }
                                                                    })
                                                                ])))
                                                            ]),
                                                            sh.b.snippet(`</tr>`)
                                                        ])))
                                                    ]),
                                                    sh.b.snippet(`</thead>`)
                                                ]))
                                                case 'body': return _ea.ss($, () => sh.b.sub([
                                                    sh.b.snippet(`<tbody`),
                                                    Classes(section.classes),
                                                    sh.b.snippet(`>`),
                                                    sh.b.indent([
                                                        sh.g.sub(section.rows.map((row) => sh.g.nested_block([
                                                            sh.b.snippet(`<tr`),
                                                            Classes(row.classes),
                                                            row.height.transform(
                                                                ($) => sh.b.sub([sh.b.snippet(` height="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]),
                                                                () => sh.b.nothing()
                                                            ),
                                                            sh.b.snippet(`>`),
                                                            sh.b.indent([
                                                                sh.g.sub(row.cells.map((cell) => sh.g.nested_block([
                                                                    _ea.cc(row.type, ($) => {
                                                                        switch ($[0]) {
                                                                            case 'th': return _ea.ss($, () => sh.b.sub([
                                                                                sh.b.snippet(`<th`),
                                                                                Classes(cell.classes),
                                                                                sh.b.snippet(`>`),
                                                                                sh.b.indent([
                                                                                    sh.g.nested_block([
                                                                                        Div(cell.div)
                                                                                    ])
                                                                                ]),
                                                                                sh.b.snippet(`</th>`)
                                                                            ]))
                                                                            case 'td': return _ea.ss($, () => sh.b.sub([
                                                                                sh.b.snippet(`<td`),
                                                                                Classes(cell.classes),
                                                                                sh.b.snippet(`>`),
                                                                                sh.b.indent([
                                                                                    sh.g.nested_block([
                                                                                        Div(cell.div)
                                                                                    ])
                                                                                ]),
                                                                                sh.b.snippet(`</td>`)
                                                                            ]))
                                                                            default: return _ea.au($[0])
                                                                        }
                                                                    })
                                                                ])))
                                                            ]),
                                                            sh.b.snippet(`</tr>`)
                                                        ])))
                                                    ]),
                                                    sh.b.snippet(`</tbody>`)
                                                ]))
                                                case 'footer': return _ea.ss($, () => sh.b.sub([
                                                    sh.b.snippet(`<tfoot`),
                                                    Classes(section.classes),
                                                    sh.b.snippet(`>`),
                                                    sh.b.indent([
                                                        sh.g.sub(section.rows.map((row) => sh.g.nested_block([
                                                            sh.b.snippet(`<tr`),
                                                            Classes(row.classes),
                                                            row.height.transform(
                                                                ($) => sh.b.sub([sh.b.snippet(` height="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]),
                                                                () => sh.b.nothing()
                                                            ),
                                                            sh.b.snippet(`>`),
                                                            sh.b.indent([
                                                                sh.g.sub(row.cells.map((cell) => sh.g.nested_block([
                                                                    _ea.cc(row.type, ($) => {
                                                                        switch ($[0]) {
                                                                            case 'th': return _ea.ss($, () => sh.b.sub([
                                                                                sh.b.snippet(`<th`),
                                                                                Classes(cell.classes),
                                                                                sh.b.snippet(`>`),
                                                                                sh.b.indent([
                                                                                    sh.g.nested_block([
                                                                                        Div(cell.div)
                                                                                    ])
                                                                                ]),
                                                                                sh.b.snippet(`</th>`)
                                                                            ]))
                                                                            case 'td': return _ea.ss($, () => sh.b.sub([
                                                                                sh.b.snippet(`<td`),
                                                                                Classes(cell.classes),
                                                                                sh.b.snippet(`>`),
                                                                                sh.b.indent([
                                                                                    sh.g.nested_block([
                                                                                        Div(cell.div)
                                                                                    ])
                                                                                ]),
                                                                                sh.b.snippet(`</td>`)
                                                                            ]))
                                                                            default: return _ea.au($[0])
                                                                        }
                                                                    })
                                                                ])))
                                                            ]),
                                                            sh.b.snippet(`</tr>`)
                                                        ])))
                                                    ]),
                                                    sh.b.snippet(`</tfoot>`)
                                                ]))
                                                default: return _ea.au($[0])
                                            }
                                        })
                                    ])))
                                ]),
                                sh.b.snippet(`</table>`)
                            ]))
                            case 'span': return _ea.ss($, ($) => Span($))
                            case 'label': return _ea.ss($, ($) => sh.b.sub([
                                sh.b.snippet(`<label`),
                                Classes($.classes),
                                sh.b.snippet(`>`),
                                sh.b.snippet($.text),
                                sh.b.indent([
                                    sh.g.nested_block([
                                        Div($.div)
                                    ])
                                ]),
                                sh.b.snippet(`</label>`)
                            ]))
                            case 'img': return _ea.ss($, ($) => sh.b.sub([
                                sh.b.snippet(`<img`),
                                Classes($.classes),
                                sh.b.snippet(` src="`),
                                sh.b.snippet($.src),
                                sh.b.snippet(`" alt="`),
                                sh.b.snippet($.alt),
                                sh.b.snippet(`"`),
                                $.width.transform(
                                    ($) => sh.b.sub([sh.b.snippet(` width="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]),
                                    () => sh.b.nothing()
                                ),
                                $.height.transform(
                                    ($) => sh.b.sub([sh.b.snippet(` height="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]),
                                    () => sh.b.nothing()
                                ),
                                sh.b.snippet(` />`)
                            ]))
                            case 'svg': return _ea.ss($, ($) => sh.b.sub([
                                sh.b.snippet(`<svg`),
                                Classes($.classes),
                                $.width.transform(
                                    ($) => sh.b.sub([sh.b.snippet(` width="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]),
                                    () => sh.b.nothing()
                                ),
                                $.height.transform(
                                    ($) => sh.b.sub([sh.b.snippet(` height="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]),
                                    () => sh.b.nothing()
                                ),
                                sh.b.snippet(`>`),
                                sh.b.snippet($.content),
                                sh.b.snippet(`</svg>`)
                            ]))
                            default: return _ea.au($[0])
                        }
                    })
                ])))
            ]),
            sh.b.snippet(`</div>`)
        ])
}

export const Document: d.Document = ($) => {
    return sh.group([
        sh.g.nested_block([
            sh.b.snippet(`<!DOCTYPE html>`)
        ]),
        sh.g.nested_block([
            sh.b.snippet(`<html>`)
        ]),
        sh.g.nested_block([
            sh.b.snippet(`<head>`),
            sh.b.indent([
                sh.g.nested_block([
                    sh.b.snippet(`<meta charset="UTF-8">`),
                ]),
                sh.g.nested_block([
                    sh.b.snippet(`<meta name="viewport" content="width=device-width, initial-scale=1.0">`),
                ]),
                sh.g.nested_block([
                    sh.b.snippet(`<style>`),
                    sh.b.indent([
                        sh.g.nested_block([
                            sh.b.snippet($.css)
                        ])
                    ]),
                    sh.b.snippet(`</style>`)
                ])
            ]),
            sh.b.snippet(`</head>`)
        ]),
        sh.g.nested_block([
            sh.b.snippet(`<body>`),
            sh.b.indent([
                sh.g.nested_block([
                    Div($.root)
                ])
            ]),
            sh.b.snippet(`</body>`)
        ]),
        sh.g.nested_block([
            sh.b.snippet(`</html>`)
        ])
    ])
}