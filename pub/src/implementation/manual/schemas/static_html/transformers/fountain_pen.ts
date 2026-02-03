import * as _p from 'pareto-core/dist/expression'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"
import * as d_text from "pareto-fountain-pen/dist/interface/to_be_generated/text"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as op_enrich_list_elements_with_position_information } from "pareto-fountain-pen/dist/implementation/temp/enrich_with_position_information"

import * as signatures from "../../../../../interface/signatures/transformers/html/fountain_pen"

const temp_serialize_number = (n: number): d_text.Text => {
    return _p_list_from_text(`${n}`, ($) => $)
}

export const Document: signatures.Document = ($) => sh.group([
    sh.g.nested_block([
        sh.b.literal("<!DOCTYPE html>")
    ]),
    sh.g.nested_block([
        sh.b.literal("<html>")
    ]),
    sh.g.nested_block([
        sh.b.literal("<head>"),
        sh.b.indent([
            sh.g.nested_block([
                sh.b.literal("<meta charset=\"UTF-8\">"),
            ]),
            sh.g.nested_block([
                sh.b.literal("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"),
            ]),
            sh.g.nested_block([
                sh.b.literal("<style>"),
                sh.b.indent([
                    sh.g.nested_block([
                        sh.b.literal($.css)
                    ])
                ]),
                sh.b.literal("</style>")
            ])
        ]),
        sh.b.literal("</head>")
    ]),
    sh.g.nested_block([
        sh.b.literal("<body>"),
        Flow_Content($.root),
        sh.b.literal("</body>")
    ]),
    sh.g.nested_block([
        sh.b.literal("</html>")
    ])
])

export const Flow_Content: signatures.Flow_Content = ($) => sh.b.indent([
    sh.g.sub($.__l_map(($) => sh.g.nested_block([

        _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'div': return _p.ss($, ($) => sh.b.sub([
                    sh.b.literal("<div"),
                    sh.b.literal(">"),
                    Flow_Content($),
                    sh.b.literal("</div>")
                ]))
                case 'dimensioned div': return _p.ss($, ($) => sh.b.sub([
                    sh.b.literal("<div"),
                    $.width.__decide(
                        ($) => sh.b.sub([
                            sh.b.literal(" width=\""),
                            sh.b.text(temp_serialize_number($)),
                            sh.b.literal("\"")
                        ]),
                        () => sh.b.nothing()
                    ),
                    $.height.__decide(
                        ($) => sh.b.sub([
                            sh.b.literal(" height=\""),
                            sh.b.text(temp_serialize_number($)),
                            sh.b.literal("\"")
                        ]),
                        () => sh.b.nothing()
                    ),
                    sh.b.literal(">"),
                    Flow_Content($.content),
                    sh.b.literal("</div>")
                ]))
                case 'classified div': return _p.ss($, ($) => sh.b.sub([
                    sh.b.literal("<div"),
                    Classes($.classes),
                    sh.b.literal(">"),
                    Flow_Content($.content),
                    sh.b.literal("</div>")
                ]))
                case 'table': return _p.ss($, ($) => sh.b.sub([
                    sh.b.literal("<table"),
                    Classes($.classes),
                    sh.b.literal(">"),
                    sh.b.indent([
                        sh.g.sub($.sections.__l_map((section) => sh.g.nested_block([
                            _p.decide.state(section.type, ($) => {
                                switch ($[0]) {
                                    case 'header': return _p.ss($, () => sh.b.sub([
                                        sh.b.literal("<thead"),

                                    ]))
                                    case 'body': return _p.ss($, () => sh.b.sub([
                                        sh.b.literal("<tbody"),
                                    ]))
                                    case 'footer': return _p.ss($, () => sh.b.sub([
                                        sh.b.literal("<tfoot"),
                                    ]))
                                    default: return _p.au($[0])
                                }
                            }),
                            Classes(section.classes),
                            sh.b.literal(">"),
                            sh.b.indent([
                                sh.g.sub(section.rows.__l_map((row) => sh.g.nested_block([
                                    sh.b.literal("<tr"),
                                    Classes(row.classes),
                                    row.height.__decide(
                                        ($) => sh.b.sub([
                                            sh.b.literal(" height=\""),
                                            sh.b.text(temp_serialize_number($)),
                                            sh.b.literal("\"")
                                        ]),
                                        () => sh.b.nothing()
                                    ),
                                    sh.b.literal(">"),
                                    sh.b.indent([
                                        sh.g.sub(row.cells.__l_map((cell) => sh.g.nested_block([
                                            _p.decide.state(row.type, ($) => {
                                                switch ($[0]) {
                                                    case 'th': return _p.ss($, () => sh.b.sub([
                                                        sh.b.literal("<th"),
                                                        Classes(cell.classes),
                                                        sh.b.literal(">"),
                                                        Flow_Content(cell.content),
                                                        sh.b.literal("</th>")
                                                    ]))
                                                    case 'td': return _p.ss($, () => sh.b.sub([
                                                        sh.b.literal("<td"),
                                                        Classes(cell.classes),
                                                        sh.b.literal(">"),
                                                        Flow_Content(cell.content),
                                                        sh.b.literal("</td>")
                                                    ]))
                                                    default: return _p.au($[0])
                                                }
                                            })
                                        ])))
                                    ]),
                                    sh.b.literal("</tr>")
                                ])))
                            ]),
                            _p.decide.state(section.type, ($) => {
                                switch ($[0]) {
                                    case 'header': return _p.ss($, () => sh.b.sub([
                                        sh.b.literal("</thead>"),

                                    ]))
                                    case 'body': return _p.ss($, () => sh.b.sub([
                                        sh.b.literal("</tbody>"),
                                    ]))
                                    case 'footer': return _p.ss($, () => sh.b.sub([
                                        sh.b.literal("</tfoot>"),
                                    ]))
                                    default: return _p.au($[0])
                                }
                            })
                        ])))
                    ]),
                    sh.b.literal("</table>")
                ]))
                case 'span': return _p.ss($, ($) => sh.b.sub([
                    sh.b.literal("<span"),
                    sh.b.literal(">"),
                    Phrasing_Content($),
                    sh.b.literal("</span>")
                ]))
                case 'label': return _p.ss($, ($) => sh.b.sub([
                    sh.b.literal("<label"),
                    Classes($.classes),
                    sh.b.literal(">"),
                    sh.b.literal($.text),
                    Flow_Content($.content),
                    sh.b.literal("</label>")
                ]))
                case 'img': return _p.ss($, ($) => sh.b.sub([
                    sh.b.literal("<img"),
                    Classes($.classes),
                    sh.b.literal(" src=\""),
                    sh.b.literal($.src),
                    sh.b.literal("\" alt = \""),
                    sh.b.literal($.alt),
                    sh.b.literal("\""),
                    $.width.__decide(
                        ($) => sh.b.sub([
                            sh.b.literal(" width=\""),
                            sh.b.text(temp_serialize_number($)),
                            sh.b.literal("\"")
                        ]),
                        () => sh.b.nothing()
                    ),
                    $.height.__decide(
                        ($) => sh.b.sub([
                            sh.b.literal(" height=\""),
                            sh.b.text(temp_serialize_number($)),
                            sh.b.literal("\"")
                        ]),
                        () => sh.b.nothing()
                    ),
                    sh.b.literal(" />")
                ]))
                case 'svg': return _p.ss($, ($) => sh.b.sub([
                    sh.b.literal("<svg"),
                    Classes($.classes),
                    $.width.__decide(
                        ($) => sh.b.sub([sh.b.literal(" width=\""),
                        sh.b.text(temp_serialize_number($)),
                        sh.b.literal("\"")]),
                        () => sh.b.nothing()
                    ),
                    $.height.__decide(
                        ($) => sh.b.sub([sh.b.literal(" height=\""),
                        sh.b.text(temp_serialize_number($)),
                        sh.b.literal("\"")
                        ]),
                        () => sh.b.nothing()
                    ),
                    sh.b.literal(">"),
                    sh.b.literal($.content),
                    sh.b.literal("</svg>")
                ]))
                default: return _p.au($[0])
            }
        })
    ])))
])

export const Classes: signatures.Classes = ($) => _p.boolean.list_is_empty($)
    ? sh.b.nothing()
    : sh.b.sub([
        sh.b.literal(" class=\""),
        sh.b.sub(op_enrich_list_elements_with_position_information($).__l_map(($) =>
            $['is first']
                ? sh.b.literal($.value)
                : sh.b.sub([sh.b.literal(" "), sh.b.literal($.value)])
        )),
        sh.b.literal("\"")
    ])

export const Phrasing_Content: signatures.Phrasing_Content = ($) => sh.b.indent([
    sh.g.sub($.__l_map(($) => sh.g.nested_block([
        _p.decide.state($, ($): d_out.Block_Part => {
            switch ($[0]) {
                case 'span': return _p.ss($, ($) => sh.b.sub([
                    sh.b.literal("<span"),
                    sh.b.literal(">"),
                    Phrasing_Content($),
                    sh.b.literal("</span>")
                ]))
                case 'classified span': return _p.ss($, ($) => sh.b.sub([
                    sh.b.literal("<span"),
                    Classes($.classes),
                    sh.b.literal(">"),
                    Phrasing_Content($.content),
                    sh.b.literal("</span>")
                ]))
                case 'titled span': return _p.ss($, ($) => sh.b.sub([
                    sh.b.literal("<span title=\""),
                    sh.b.literal($.title),
                    sh.b.literal("\">"),
                    Phrasing_Content($.content),
                    sh.b.literal("</span>")
                ]))
                case 'a': return _p.ss($, ($) => sh.b.sub([
                    sh.b.literal("<a"),
                    // Classes($.classes),
                    sh.b.literal(" href=\""),
                    sh.b.literal($.href),
                    sh.b.literal("\">"),
                    sh.b.literal($.text),
                    sh.b.literal("</a>")
                ]))
                case 'p': return _p.ss($, ($) => sh.b.sub([
                    sh.b.literal("<p"),
                    // Classes($.classes),
                    sh.b.literal(">"),
                    sh.b.literal($.text),
                    sh.b.literal("</p>")
                ]))
                default: return _p.au($[0])
            }
        })
    ])))
])