import * as _p from 'pareto-core/dist/transformer'

import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as op_enrich_list_elements_with_position_information } from "pareto-fountain-pen/dist/implementation/temp/enrich_with_position_information"

import * as signatures from "../../../../../interface/signatures/transformers/html/fountain_pen"

export const Document: signatures.Document = ($) => sh.group([
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
        Flow_Content($.root),
        sh.b.snippet(`</body>`)
    ]),
    sh.g.nested_block([
        sh.b.snippet(`</html>`)
    ])
])

export const Flow_Content: signatures.Flow_Content = ($) => sh.b.indent([
    sh.g.sub($.__l_map(($) => sh.g.nested_block([

        _p.sg($, ($) => {
            switch ($[0]) {
                case 'div': return _p.ss($, ($) => sh.b.sub([
                    sh.b.snippet(`<div`),
                    sh.b.snippet(`>`),
                    Flow_Content($),
                    sh.b.snippet(`</div>`)
                ]))
                case 'dimensioned div': return _p.ss($, ($) => sh.b.sub([
                    sh.b.snippet(`<div`),
                    $.width.__decide(
                        ($) => sh.b.sub([sh.b.snippet(` width="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]),
                        () => sh.b.nothing()
                    ),
                    $.height.__decide(
                        ($) => sh.b.sub([sh.b.snippet(` height="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]),
                        () => sh.b.nothing()
                    ),
                    sh.b.snippet(`>`),
                    Flow_Content($.content),
                    sh.b.snippet(`</div>`)
                ]))
                case 'classified div': return _p.ss($, ($) => sh.b.sub([
                    sh.b.snippet(`<div`),
                    Classes($.classes),
                    sh.b.snippet(`>`),
                    Flow_Content($.content),
                    sh.b.snippet(`</div>`)
                ]))
                case 'table': return _p.ss($, ($) => sh.b.sub([
                    sh.b.snippet(`<table`),
                    Classes($.classes),
                    sh.b.snippet(`>`),
                    sh.b.indent([
                        sh.g.sub($.sections.__l_map((section) => sh.g.nested_block([
                            _p.sg(section.type, ($) => {
                                switch ($[0]) {
                                    case 'header': return _p.ss($, () => sh.b.sub([
                                        sh.b.snippet(`<thead`),

                                    ]))
                                    case 'body': return _p.ss($, () => sh.b.sub([
                                        sh.b.snippet(`<tbody`),
                                    ]))
                                    case 'footer': return _p.ss($, () => sh.b.sub([
                                        sh.b.snippet(`<tfoot`),
                                    ]))
                                    default: return _p.au($[0])
                                }
                            }),
                            Classes(section.classes),
                            sh.b.snippet(`>`),
                            sh.b.indent([
                                sh.g.sub(section.rows.__l_map((row) => sh.g.nested_block([
                                    sh.b.snippet(`<tr`),
                                    Classes(row.classes),
                                    row.height.__decide(
                                        ($) => sh.b.sub([sh.b.snippet(` height="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]),
                                        () => sh.b.nothing()
                                    ),
                                    sh.b.snippet(`>`),
                                    sh.b.indent([
                                        sh.g.sub(row.cells.__l_map((cell) => sh.g.nested_block([
                                            _p.sg(row.type, ($) => {
                                                switch ($[0]) {
                                                    case 'th': return _p.ss($, () => sh.b.sub([
                                                        sh.b.snippet(`<th`),
                                                        Classes(cell.classes),
                                                        sh.b.snippet(`>`),
                                                        Flow_Content(cell.content),
                                                        sh.b.snippet(`</th>`)
                                                    ]))
                                                    case 'td': return _p.ss($, () => sh.b.sub([
                                                        sh.b.snippet(`<td`),
                                                        Classes(cell.classes),
                                                        sh.b.snippet(`>`),
                                                        Flow_Content(cell.content),
                                                        sh.b.snippet(`</td>`)
                                                    ]))
                                                    default: return _p.au($[0])
                                                }
                                            })
                                        ])))
                                    ]),
                                    sh.b.snippet(`</tr>`)
                                ])))
                            ]),
                            _p.sg(section.type, ($) => {
                                switch ($[0]) {
                                    case 'header': return _p.ss($, () => sh.b.sub([
                                        sh.b.snippet(`</thead>`),

                                    ]))
                                    case 'body': return _p.ss($, () => sh.b.sub([
                                        sh.b.snippet(`</tbody>`),
                                    ]))
                                    case 'footer': return _p.ss($, () => sh.b.sub([
                                        sh.b.snippet(`</tfoot>`),
                                    ]))
                                    default: return _p.au($[0])
                                }
                            })
                        ])))
                    ]),
                    sh.b.snippet(`</table>`)
                ]))
                case 'span': return _p.ss($, ($) => sh.b.sub([
                    sh.b.snippet(`<span`),
                    sh.b.snippet(`>`),
                    Phrasing_Content($),
                    sh.b.snippet(`</span>`)
                ]))
                case 'label': return _p.ss($, ($) => sh.b.sub([
                    sh.b.snippet(`<label`),
                    Classes($.classes),
                    sh.b.snippet(`>`),
                    sh.b.snippet($.text),
                    Flow_Content($.content),
                    sh.b.snippet(`</label>`)
                ]))
                case 'img': return _p.ss($, ($) => sh.b.sub([
                    sh.b.snippet(`<img`),
                    Classes($.classes),
                    sh.b.snippet(` src="`),
                    sh.b.snippet($.src),
                    sh.b.snippet(`" alt="`),
                    sh.b.snippet($.alt),
                    sh.b.snippet(`"`),
                    $.width.__decide(
                        ($) => sh.b.sub([sh.b.snippet(` width="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]),
                        () => sh.b.nothing()
                    ),
                    $.height.__decide(
                        ($) => sh.b.sub([sh.b.snippet(` height="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]),
                        () => sh.b.nothing()
                    ),
                    sh.b.snippet(` />`)
                ]))
                case 'svg': return _p.ss($, ($) => sh.b.sub([
                    sh.b.snippet(`<svg`),
                    Classes($.classes),
                    $.width.__decide(
                        ($) => sh.b.sub([sh.b.snippet(` width="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]),
                        () => sh.b.nothing()
                    ),
                    $.height.__decide(
                        ($) => sh.b.sub([sh.b.snippet(` height="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]),
                        () => sh.b.nothing()
                    ),
                    sh.b.snippet(`>`),
                    sh.b.snippet($.content),
                    sh.b.snippet(`</svg>`)
                ]))
                default: return _p.au($[0])
            }
        })
    ])))
])

export const Classes: signatures.Classes = ($) => _p.boolean.list_is_empty($)
    ? sh.b.nothing()
    : sh.b.sub([
        sh.b.snippet(` class="`),
        sh.b.sub(op_enrich_list_elements_with_position_information($).__l_map(($) =>
            $['is first']
                ? sh.b.snippet($.value)
                : sh.b.sub([sh.b.snippet(` `), sh.b.snippet($.value)])
        )),
        sh.b.snippet(`"`)
    ])

export const Phrasing_Content: signatures.Phrasing_Content = ($) => sh.b.indent([
    sh.g.sub($.__l_map(($) => sh.g.nested_block([
        _p.sg($, ($): d_out.Block_Part => {
            switch ($[0]) {
                case 'span': return _p.ss($, ($) => sh.b.sub([
                    sh.b.snippet(`<span`),
                    sh.b.snippet(`>`),
                    Phrasing_Content($),
                    sh.b.snippet(`</span>`)
                ]))
                case 'classified span': return _p.ss($, ($) => sh.b.sub([
                    sh.b.snippet(`<span`),
                    Classes($.classes),
                    sh.b.snippet(`>`),
                    Phrasing_Content($.content),
                    sh.b.snippet(`</span>`)
                ]))
                case 'titled span': return _p.ss($, ($) => sh.b.sub([
                    sh.b.snippet(`<span`),
                    sh.b.sub([sh.b.snippet(` title="`), sh.b.snippet($.title), sh.b.snippet(`"`)]),
                    sh.b.snippet(`>`),
                    Phrasing_Content($.content),
                    sh.b.snippet(`</span>`)
                ]))
                case 'a': return _p.ss($, ($) => sh.b.sub([
                    sh.b.snippet(`<a`),
                    // Classes($.classes),
                    sh.b.snippet(` href="`),
                    sh.b.snippet($.href),
                    sh.b.snippet(`">`),
                    sh.b.snippet($.text),
                    sh.b.snippet(`</a>`)
                ]))
                case 'p': return _p.ss($, ($) => sh.b.sub([
                    sh.b.snippet(`<p`),
                    // Classes($.classes),
                    sh.b.snippet(`>`),
                    sh.b.snippet($.text),
                    sh.b.snippet(`</p>`)
                ]))
                default: return _p.au($[0])
            }
        })
    ])))
])