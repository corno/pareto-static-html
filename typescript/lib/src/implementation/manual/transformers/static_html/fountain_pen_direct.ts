import * as pt from 'pareto-core/dist/transformer/implementation'
import p_list_from_text from 'pareto-core/dist/specials/list_from_text'

import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"
import * as d_loc from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

import * as signatures from "../../../../interface/signatures/transformers/html/fountain_pen"

//dependencies
import * as t_xml_to_fountain_pen from "../../../../modules/xml/implementation/manual/transformers/xml/fountain_pen"

const temp_serialize_number = (n: number): d_loc.List_of_Characters => {
    return p_list_from_text(`${n}`, ($) => $)//convert number to string, then to list of characters
}

export const Document: signatures.Document = ($) => sh.pg.sentences([
    sh.sentence([
        sh.ph.literal("<!DOCTYPE html>"),
    ]),
    sh.sentence([
        sh.ph.literal("<html>"),
        sh.ph.indent(sh.pg.sentences([
            sh.sentence([
                sh.ph.literal("<head>"),
                sh.ph.indent(sh.pg.sentences([
                    sh.sentence([
                        sh.ph.literal("<meta charset=\"UTF-8\">"),
                    ]),
                    sh.sentence([
                        sh.ph.literal("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"),
                    ]),
                    sh.sentence([
                        sh.ph.literal("<style>"),
                        sh.ph.indent(sh.pg.sentences([
                            sh.sentence([
                                sh.ph.literal($.css)
                            ])
                        ])),
                        sh.ph.literal("</style>")
                    ])
                ])),
                sh.ph.literal("</head>"),
            ]),
            sh.sentence([
                sh.ph.literal("<body>"),
                sh.ph.indent(
                    sh.pg.sentences([
                        sh.sentence([Flow_Element($.root)])
                    ])
                ),
                sh.ph.literal("</body>")
            ]),
        ])),
        sh.ph.literal("</html>")
    ]),
])


export const Flow_Element: signatures.Flow_Element = ($) => pt.decide.state($, ($) => {
    switch ($[0]) {
        case 'div': return pt.ss($, ($) => sh.ph.composed([
            sh.ph.literal("<div"),
            sh.ph.literal(">"),
            Flow_Content($),
            sh.ph.literal("</div>")
        ]))
        case 'dimensioned div': return pt.ss($, ($) => sh.ph.composed([
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
        case 'classified div': return pt.ss($, ($) => sh.ph.composed([
            sh.ph.literal("<div"),
            Classes($.classes),
            sh.ph.literal(">"),
            Flow_Content($.content),
            sh.ph.literal("</div>")
        ]))
        case 'table': return pt.ss($, ($) => sh.ph.composed([
            sh.ph.literal("<table"),
            Classes($.classes),
            sh.ph.literal(">"),
            sh.ph.indent(
                sh.pg.sentences($.sections.__l_map((section) => sh.sentence([
                    pt.decide.state(section.type, ($) => {
                        switch ($[0]) {
                            case 'header': return pt.ss($, () => sh.ph.literal("<thead"))
                            case 'body': return pt.ss($, () => sh.ph.literal("<tbody"))
                            case 'footer': return pt.ss($, () => sh.ph.literal("<tfoot"))
                            default: return pt.au($[0])
                        }
                    }),
                    Classes(section.classes),
                    sh.ph.literal(">"),
                    sh.ph.indent(
                        sh.pg.sentences(section.rows.__l_map(($) => sh.sentence([
                            sh.ph.literal("<tr"),
                            Classes($.classes),
                            $.height.__decide(
                                ($) => sh.ph.composed([
                                    sh.ph.literal(" height=\""),
                                    sh.ph.serialize(temp_serialize_number($)),
                                    sh.ph.literal("\"")
                                ]),
                                () => sh.ph.nothing()
                            ),
                            sh.ph.literal(">"),
                            sh.ph.indent(
                                sh.pg.sentences($.cells.__l_map(($) => {
                                    return sh.sentence([
                                        sh.ph.literal("<"),
                                        sh.ph.literal(pt.decide.state($.type, ($) => {
                                            switch ($[0]) {
                                                case 'td': return pt.ss($, ($) => "td")
                                                case 'th': return pt.ss($, ($) => "th")
                                                default: return pt.au($[0])
                                            }
                                        })),
                                        Classes($.classes),
                                        $.colspan.__decide(
                                            ($) => sh.ph.composed([
                                                sh.ph.literal(" colspan=\""),
                                                sh.ph.serialize(temp_serialize_number($)),
                                                sh.ph.literal("\"")
                                            ]),
                                            () => sh.ph.nothing()
                                        ),
                                        sh.ph.literal(">"),
                                        Flow_Content($.content),
                                        sh.ph.literal("</"),
                                        sh.ph.literal(pt.decide.state($.type, ($) => {
                                            switch ($[0]) {
                                                case 'td': return pt.ss($, ($) => "td")
                                                case 'th': return pt.ss($, ($) => "th")
                                                default: return pt.au($[0])
                                            }
                                        })),
                                        sh.ph.literal(">"),
                                    ])
                                }))
                            ),
                            sh.ph.literal("</tr>")
                        ])))
                    ),
                    pt.decide.state(section.type, ($) => {
                        switch ($[0]) {
                            case 'header': return pt.ss($, () => sh.ph.composed([
                                sh.ph.literal("</thead>"),

                            ]))
                            case 'body': return pt.ss($, () => sh.ph.composed([
                                sh.ph.literal("</tbody>"),
                            ]))
                            case 'footer': return pt.ss($, () => sh.ph.composed([
                                sh.ph.literal("</tfoot>"),
                            ]))
                            default: return pt.au($[0])
                        }
                    })
                ])))),
            sh.ph.literal("</table>")
        ]))
        case 'span': return pt.ss($, ($) => sh.ph.composed([
            sh.ph.literal("<span"),
            sh.ph.literal(">"),
            Phrasing_Content($),
            sh.ph.literal("</span>")
        ]))
        case 'label': return pt.ss($, ($) => sh.ph.composed([
            sh.ph.literal("<label"),
            Classes($.classes),
            sh.ph.literal(">"),
            sh.ph.literal($.text),
            Flow_Content($.content),
            sh.ph.literal("</label>")
        ]))
        case 'img': return pt.ss($, ($) => sh.ph.composed([
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
        case 'svg': return pt.ss($, ($) => sh.ph.composed([
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
            t_xml_to_fountain_pen.Mixed_Content($.content),
            sh.ph.literal("</svg>")
        ]))
        default: return pt.au($[0])
    }
})


export const Flow_Content: signatures.Flow_Content = ($) => sh.ph.indent(
    sh.pg.sentences($.__l_map(($) => sh.sentence([Flow_Element($)])))
)

export const Classes: signatures.Classes = ($) => pt.boolean.from.list($).is_empty()
    ? sh.ph.nothing()
    : sh.ph.composed([
        sh.ph.literal(" class=\""),
        sh.ph.rich(
            $.__l_map(($) => sh.ph.literal($)),
            sh.ph.nothing(),
            sh.ph.nothing(),
            sh.ph.literal(" "),
            sh.ph.nothing(),
        ),
        sh.ph.literal("\"")
    ])

export const Phrasing_Element: signatures.Phrasing_Element = ($) => pt.decide.state($, ($): d_out.Phrase => {
    switch ($[0]) {
        case 'span': return pt.ss($, ($) => sh.ph.composed([
            sh.ph.literal("<span"),
            sh.ph.literal(">"),
            Phrasing_Content($),
            sh.ph.literal("</span>")
        ]))
        case 'classified span': return pt.ss($, ($) => sh.ph.composed([
            sh.ph.literal("<span"),
            Classes($.classes),
            sh.ph.literal(">"),
            Phrasing_Content($.content),
            sh.ph.literal("</span>")
        ]))
        case 'titled span': return pt.ss($, ($) => sh.ph.composed([
            sh.ph.literal("<span title=\""),
            sh.ph.literal($.title),
            sh.ph.literal("\">"),
            Phrasing_Content($.content),
            sh.ph.literal("</span>")
        ]))
        case 'a': return pt.ss($, ($) => sh.ph.composed([
            sh.ph.literal("<a"),
            // Classes($.classes),
            sh.ph.literal(" href=\""),
            sh.ph.literal($.href),
            sh.ph.literal("\">"),
            sh.ph.literal($.text),
            sh.ph.literal("</a>")
        ]))
        case 'p': return pt.ss($, ($) => sh.ph.composed([
            sh.ph.literal("<p"),
            // Classes($.classes),
            sh.ph.literal(">"),
            sh.ph.literal($.text),
            sh.ph.literal("</p>")
        ]))
        default: return pt.au($[0])
    }
})

export const Phrasing_Content: signatures.Phrasing_Content = ($) => sh.ph.indent(
    sh.pg.sentences($.__l_map(($) => pt.decide.state($, ($): d_out.Sentence => {
        switch ($[0]) {
            case 'span': return pt.ss($, ($) => sh.sentence([
                sh.ph.literal("<span"),
                sh.ph.literal(">"),
                Phrasing_Content($),
                sh.ph.literal("</span>")
            ]))
            case 'classified span': return pt.ss($, ($) => sh.sentence([
                sh.ph.literal("<span"),
                Classes($.classes),
                sh.ph.literal(">"),
                Phrasing_Content($.content),
                sh.ph.literal("</span>")
            ]))
            case 'titled span': return pt.ss($, ($) => sh.sentence([
                sh.ph.literal("<span title=\""),
                sh.ph.literal($.title),
                sh.ph.literal("\">"),
                Phrasing_Content($.content),
                sh.ph.literal("</span>")
            ]))
            case 'a': return pt.ss($, ($) => sh.sentence([
                sh.ph.literal("<a"),
                // Classes($.classes),
                sh.ph.literal(" href=\""),
                sh.ph.literal($.href),
                sh.ph.literal("\">"),
                sh.ph.literal($.text),
                sh.ph.literal("</a>")
            ]))
            case 'p': return pt.ss($, ($) => sh.sentence([
                sh.ph.literal("<p"),
                // Classes($.classes),
                sh.ph.literal(">"),
                sh.ph.literal($.text),
                sh.ph.literal("</p>")
            ]))
            default: return pt.au($[0])
        }
    })))
)