import * as _p from 'pareto-core/dist/expression'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"
import * as d_text from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as op_enrich_list_elements_with_position_information } from "pareto-fountain-pen/dist/implementation/temp/enrich_with_position_information"

import * as signatures from "../../../../../interface/signatures/transformers/html/fountain_pen"

const temp_serialize_number = (n: number): d_text.List_of_Characters => {
    return _p_list_from_text(`${n}`, ($) => $)
}

export const Document: signatures.Document = ($) => sh.pg.sentences([
    sh.ph.literal("<!DOCTYPE html>"),
    sh.ph.composed([
        sh.ph.literal("<html>"),
        sh.ph.indent(sh.pg.sentences([
            sh.ph.literal("<head>"),
            sh.ph.indent(sh.pg.sentences([
                sh.ph.literal("<meta charset=\"UTF-8\">"),
                sh.ph.literal("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"),
                sh.ph.composed([
                    sh.ph.literal("<style>"),
                    sh.ph.indent(sh.pg.sentences([
                        sh.ph.literal($.css)
                    ])),
                    sh.ph.literal("</style>")
                ])
            ])),
            sh.ph.literal("</head>"),
            sh.ph.composed([
                sh.ph.literal("<body>"),
                Flow_Content($.root),
                sh.ph.literal("</body>")
            ]),
        ])),
        sh.ph.literal("</html>")
    ]),
])

export const Flow_Content: signatures.Flow_Content = ($) => sh.ph.indent(
    sh.pg.sentences($.__l_map(($) => _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'div': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("<div"),
                sh.ph.literal(">"),
                Flow_Content($),
                sh.ph.literal("</div>")
            ]))
            case 'dimensioned div': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("<div"),
                $.width.__decide(
                    ($) => sh.ph.composed([
                        sh.ph.literal(" width=\""),
                        sh.ph.serialize(temp_serialize_number($)),
                        sh.ph.literal("\"")
                    ]),
                    () => sh.ph.nothing()
                ),
                $.height.__decide(
                    ($) => sh.ph.composed([
                        sh.ph.literal(" height=\""),
                        sh.ph.serialize(temp_serialize_number($)),
                        sh.ph.literal("\"")
                    ]),
                    () => sh.ph.nothing()
                ),
                sh.ph.literal(">"),
                Flow_Content($.content),
                sh.ph.literal("</div>")
            ]))
            case 'classified div': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("<div"),
                Classes($.classes),
                sh.ph.literal(">"),
                Flow_Content($.content),
                sh.ph.literal("</div>")
            ]))
            case 'table': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("<table"),
                Classes($.classes),
                sh.ph.literal(">"),
                sh.ph.indent(
                    sh.pg.sentences($.sections.__l_map((section) => sh.ph.composed([
                        _p.decide.state(section.type, ($) => {
                            switch ($[0]) {
                                case 'header': return _p.ss($, () => sh.ph.composed([
                                    sh.ph.literal("<thead"),

                                ]))
                                case 'body': return _p.ss($, () => sh.ph.composed([
                                    sh.ph.literal("<tbody"),
                                ]))
                                case 'footer': return _p.ss($, () => sh.ph.composed([
                                    sh.ph.literal("<tfoot"),
                                ]))
                                default: return _p.au($[0])
                            }
                        }),
                        Classes(section.classes),
                        sh.ph.literal(">"),
                        sh.ph.indent(
                            sh.pg.sentences(section.rows.__l_map((row) => sh.ph.composed([
                                sh.ph.literal("<tr"),
                                Classes(row.classes),
                                row.height.__decide(
                                    ($) => sh.ph.composed([
                                        sh.ph.literal(" height=\""),
                                        sh.ph.serialize(temp_serialize_number($)),
                                        sh.ph.literal("\"")
                                    ]),
                                    () => sh.ph.nothing()
                                ),
                                sh.ph.literal(">"),
                                sh.ph.indent(
                                    sh.pg.sentences(row.cells.__l_map((cell) => sh.ph.composed([
                                        _p.decide.state(row.type, ($) => {
                                            switch ($[0]) {
                                                case 'th': return _p.ss($, () => sh.ph.composed([
                                                    sh.ph.literal("<th"),
                                                    Classes(cell.classes),
                                                    sh.ph.literal(">"),
                                                    Flow_Content(cell.content),
                                                    sh.ph.literal("</th>")
                                                ]))
                                                case 'td': return _p.ss($, () => sh.ph.composed([
                                                    sh.ph.literal("<td"),
                                                    Classes(cell.classes),
                                                    sh.ph.literal(">"),
                                                    Flow_Content(cell.content),
                                                    sh.ph.literal("</td>")
                                                ]))
                                                default: return _p.au($[0])
                                            }
                                        })
                                    ])))
                                ),
                                sh.ph.literal("</tr>")
                            ])))
                        ),
                        _p.decide.state(section.type, ($) => {
                            switch ($[0]) {
                                case 'header': return _p.ss($, () => sh.ph.composed([
                                    sh.ph.literal("</thead>"),

                                ]))
                                case 'body': return _p.ss($, () => sh.ph.composed([
                                    sh.ph.literal("</tbody>"),
                                ]))
                                case 'footer': return _p.ss($, () => sh.ph.composed([
                                    sh.ph.literal("</tfoot>"),
                                ]))
                                default: return _p.au($[0])
                            }
                        })
                    ])))),
                sh.ph.literal("</table>")
            ]))
            case 'span': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("<span"),
                sh.ph.literal(">"),
                Phrasing_Content($),
                sh.ph.literal("</span>")
            ]))
            case 'label': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("<label"),
                Classes($.classes),
                sh.ph.literal(">"),
                sh.ph.literal($.text),
                Flow_Content($.content),
                sh.ph.literal("</label>")
            ]))
            case 'img': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("<img"),
                Classes($.classes),
                sh.ph.literal(" src=\""),
                sh.ph.literal($.src),
                sh.ph.literal("\" alt = \""),
                sh.ph.literal($.alt),
                sh.ph.literal("\""),
                $.width.__decide(
                    ($) => sh.ph.composed([
                        sh.ph.literal(" width=\""),
                        sh.ph.serialize(temp_serialize_number($)),
                        sh.ph.literal("\"")
                    ]),
                    () => sh.ph.nothing()
                ),
                $.height.__decide(
                    ($) => sh.ph.composed([
                        sh.ph.literal(" height=\""),
                        sh.ph.serialize(temp_serialize_number($)),
                        sh.ph.literal("\"")
                    ]),
                    () => sh.ph.nothing()
                ),
                sh.ph.literal(" />")
            ]))
            case 'svg': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("<svg"),
                Classes($.classes),
                $.width.__decide(
                    ($) => sh.ph.composed([sh.ph.literal(" width=\""),
                    sh.ph.serialize(temp_serialize_number($)),
                    sh.ph.literal("\"")]),
                    () => sh.ph.nothing()
                ),
                $.height.__decide(
                    ($) => sh.ph.composed([sh.ph.literal(" height=\""),
                    sh.ph.serialize(temp_serialize_number($)),
                    sh.ph.literal("\"")
                    ]),
                    () => sh.ph.nothing()
                ),
                sh.ph.literal(">"),
                sh.ph.literal($.content),
                sh.ph.literal("</svg>")
            ]))
            default: return _p.au($[0])
        }
    })))
)

export const Classes: signatures.Classes = ($) => _p.boolean.list_is_empty($)
    ? sh.ph.nothing()
    : sh.ph.composed([
        sh.ph.literal(" class=\""),
        sh.ph.composed(op_enrich_list_elements_with_position_information($).__l_map(($) =>
            $['is first']
                ? sh.ph.literal($.value)
                : sh.ph.composed([sh.ph.literal(" "), sh.ph.literal($.value)])
        )),
        sh.ph.literal("\"")
    ])

export const Phrasing_Content: signatures.Phrasing_Content = ($) => sh.ph.indent(
    sh.pg.sentences($.__l_map(($) => _p.decide.state($, ($): d_out.Phrase => {
        switch ($[0]) {
            case 'span': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("<span"),
                sh.ph.literal(">"),
                Phrasing_Content($),
                sh.ph.literal("</span>")
            ]))
            case 'classified span': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("<span"),
                Classes($.classes),
                sh.ph.literal(">"),
                Phrasing_Content($.content),
                sh.ph.literal("</span>")
            ]))
            case 'titled span': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("<span title=\""),
                sh.ph.literal($.title),
                sh.ph.literal("\">"),
                Phrasing_Content($.content),
                sh.ph.literal("</span>")
            ]))
            case 'a': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("<a"),
                // Classes($.classes),
                sh.ph.literal(" href=\""),
                sh.ph.literal($.href),
                sh.ph.literal("\">"),
                sh.ph.literal($.text),
                sh.ph.literal("</a>")
            ]))
            case 'p': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("<p"),
                // Classes($.classes),
                sh.ph.literal(">"),
                sh.ph.literal($.text),
                sh.ph.literal("</p>")
            ]))
            default: return _p.au($[0])
        }
    })))
)