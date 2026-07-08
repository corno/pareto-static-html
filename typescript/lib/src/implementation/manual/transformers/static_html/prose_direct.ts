import * as p_ from 'pareto-core/implementation/transformer'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import * as d_loc from "pareto-fountain-pen/interface/generated/liana/schemas/list_of_characters/data"

import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

import * as signatures from "../../../../interface/declarations/transformers/html/prose.js"

//dependencies
import * as t_xml_to_prose from "../../../../modules/xml/implementation/manual/transformers/xml/prose.js"

const temp_serialize_number = (n: number): d_loc.List_of_Characters => {
    return p_list_from_text(
        `${n}`,
        ($) => $
    )//convert number to string, then to list of characters
}

export const Document: signatures.Document = ($) => sh.pg.sentences([
    sh.sentence([
        sh.ph.literal("<!DOCTYPE html>"),
    ]),
    sh.sentence([
        sh.ph.literal("<html>"),
        sh.ph.indent(
            sh.pg.sentences([
                sh.sentence([
                    sh.ph.literal("<head>"),
                    sh.ph.indent(
                        sh.pg.sentences([
                            sh.sentence([
                                sh.ph.literal("<meta charset=\"UTF-8\">"),
                            ]),
                            sh.sentence([
                                sh.ph.literal("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"),
                            ]),
                            sh.sentence([
                                sh.ph.literal("<style>"),
                                sh.ph.indent(
                                    sh.pg.sentences([
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


export const Flow_Element: signatures.Flow_Element = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'div': return p_.option($, ($) => sh.ph.composed([
                sh.ph.literal("<div"),
                sh.ph.literal(">"),
                Flow_Content($),
                sh.ph.literal("</div>")
            ]))
            case 'dimensioned div': return p_.option($, ($) => sh.ph.composed([
                sh.ph.literal("<div"),
                p_.from.optional($.width).decide(
                    ($) => sh.ph.composed([
                        sh.ph.literal(" width=\""),
                        sh.ph.serialize(temp_serialize_number($)),
                        sh.ph.literal("\"")
                    ]),
                    () => sh.ph.nothing()
                ),
                p_.from.optional($.height).decide(
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
            case 'classified div': return p_.option($, ($) => sh.ph.composed([
                sh.ph.literal("<div"),
                Classes($.classes),
                sh.ph.literal(">"),
                Flow_Content($.content),
                sh.ph.literal("</div>")
            ]))
            case 'table': return p_.option($, ($) => sh.ph.composed([
                sh.ph.literal("<table"),
                Classes($.classes),
                sh.ph.literal(">"),
                sh.ph.indent(
                    sh.pg.sentences(p_.from.list($.sections).map(
                        ($) => sh.sentence([
                            p_.from.state($.type).decide(
                                ($) => {
                                    switch ($[0]) {
                                        case 'header': return p_.option($, () => sh.ph.literal("<thead"))
                                        case 'body': return p_.option($, () => sh.ph.literal("<tbody"))
                                        case 'footer': return p_.option($, () => sh.ph.literal("<tfoot"))
                                        default: return p_.au($[0])
                                    }
                                }),
                            Classes($.classes),
                            sh.ph.literal(">"),
                            sh.ph.indent(
                                sh.pg.sentences(p_.from.list($.rows).map(
                                    ($) => sh.sentence([
                                        sh.ph.literal("<tr"),
                                        Classes($.classes),
                                        p_.from.optional($.height).decide(
                                            ($) => sh.ph.composed([
                                                sh.ph.literal(" height=\""),
                                                sh.ph.serialize(temp_serialize_number($)),
                                                sh.ph.literal("\"")
                                            ]),
                                            () => sh.ph.nothing()
                                        ),
                                        sh.ph.literal(">"),
                                        sh.ph.indent(
                                            sh.pg.sentences(p_.from.list($.cells).map(
                                                ($) => {
                                                    return sh.sentence([
                                                        sh.ph.literal("<"),
                                                        sh.ph.literal(p_.from.state($.type).decide(
                                                            ($) => {
                                                                switch ($[0]) {
                                                                    case 'td': return p_.option($, ($) => "td")
                                                                    case 'th': return p_.option($, ($) => "th")
                                                                    default: return p_.au($[0])
                                                                }
                                                            })),
                                                        Classes($.classes),
                                                        p_.from.optional($.colspan).decide(
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
                                                        sh.ph.literal(p_.from.state($.type).decide(
                                                            ($) => {
                                                                switch ($[0]) {
                                                                    case 'td': return p_.option($, ($) => "td")
                                                                    case 'th': return p_.option($, ($) => "th")
                                                                    default: return p_.au($[0])
                                                                }
                                                            })),
                                                        sh.ph.literal(">"),
                                                    ])
                                                }))
                                        ),
                                        sh.ph.literal("</tr>")
                                    ])))
                            ),
                            p_.from.state($.type).decide(
                                ($) => {
                                    switch ($[0]) {
                                        case 'header': return p_.option($, () => sh.ph.composed([
                                            sh.ph.literal("</thead>"),

                                        ]))
                                        case 'body': return p_.option($, () => sh.ph.composed([
                                            sh.ph.literal("</tbody>"),
                                        ]))
                                        case 'footer': return p_.option($, () => sh.ph.composed([
                                            sh.ph.literal("</tfoot>"),
                                        ]))
                                        default: return p_.au($[0])
                                    }
                                })
                        ])))),
                sh.ph.literal("</table>")
            ]))
            case 'span': return p_.option($, ($) => sh.ph.composed([
                sh.ph.literal("<span"),
                sh.ph.literal(">"),
                Phrasing_Content($),
                sh.ph.literal("</span>")
            ]))
            case 'label': return p_.option($, ($) => sh.ph.composed([
                sh.ph.literal("<label"),
                Classes($.classes),
                sh.ph.literal(">"),
                sh.ph.literal($.text),
                Flow_Content($.content),
                sh.ph.literal("</label>")
            ]))
            case 'img': return p_.option($, ($) => sh.ph.composed([
                sh.ph.literal("<img"),
                Classes($.classes),
                sh.ph.literal(" src=\""),
                sh.ph.literal($.src),
                sh.ph.literal("\" alt = \""),
                sh.ph.literal($.alt),
                sh.ph.literal("\""),
                p_.from.optional($.width).decide(
                    ($) => sh.ph.composed([
                        sh.ph.literal(" width=\""),
                        sh.ph.serialize(temp_serialize_number($)),
                        sh.ph.literal("\"")
                    ]),
                    () => sh.ph.nothing()
                ),
                p_.from.optional($.height).decide(
                    ($) => sh.ph.composed([
                        sh.ph.literal(" height=\""),
                        sh.ph.serialize(temp_serialize_number($)),
                        sh.ph.literal("\"")
                    ]),
                    () => sh.ph.nothing()
                ),
                sh.ph.literal(" />")
            ]))
            case 'svg': return p_.option($, ($) => sh.ph.composed([
                sh.ph.literal("<svg"),
                Classes($.classes),
                p_.from.optional($.width).decide(
                    ($) => sh.ph.composed([sh.ph.literal(" width=\""),
                    sh.ph.serialize(temp_serialize_number($)),
                    sh.ph.literal("\"")]),
                    () => sh.ph.nothing()
                ),
                p_.from.optional($.height).decide(
                    ($) => sh.ph.composed([sh.ph.literal(" height=\""),
                    sh.ph.serialize(temp_serialize_number($)),
                    sh.ph.literal("\"")
                    ]),
                    () => sh.ph.nothing()
                ),
                sh.ph.literal(">"),
                t_xml_to_prose.Mixed_Content($.content),
                sh.ph.literal("</svg>")
            ]))
            default: return p_.au($[0])
        }
    })


export const Flow_Content: signatures.Flow_Content = ($) => sh.ph.indent(
    sh.pg.sentences(p_.from.list($).map(
        ($) => sh.sentence([Flow_Element($)])))
)

export const Classes: signatures.Classes = ($) => p_.from.list($).on_has_items(
    ($) => sh.ph.composed([
        sh.ph.literal(" class=\""),
        sh.ph.rich(
            p_.from.list($).map(
                ($) => sh.ph.literal($)),
            sh.ph.nothing(),
            sh.ph.nothing(),
            sh.ph.literal(" "),
            sh.ph.nothing(),
        ),
        sh.ph.literal("\"")
    ]),
    () => sh.ph.nothing()
)

export const Phrasing_Element: signatures.Phrasing_Element = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'span': return p_.option($, ($) => sh.ph.composed([
                sh.ph.literal("<span"),
                sh.ph.literal(">"),
                Phrasing_Content($),
                sh.ph.literal("</span>")
            ]))
            case 'classified span': return p_.option($, ($) => sh.ph.composed([
                sh.ph.literal("<span"),
                Classes($.classes),
                sh.ph.literal(">"),
                Phrasing_Content($.content),
                sh.ph.literal("</span>")
            ]))
            case 'titled span': return p_.option($, ($) => sh.ph.composed([
                sh.ph.literal("<span title=\""),
                sh.ph.literal($.title),
                sh.ph.literal("\">"),
                Phrasing_Content($.content),
                sh.ph.literal("</span>")
            ]))
            case 'a': return p_.option($, ($) => sh.ph.composed([
                sh.ph.literal("<a"),
                // Classes($.classes),
                sh.ph.literal(" href=\""),
                sh.ph.literal($.href),
                sh.ph.literal("\">"),
                sh.ph.literal($.text),
                sh.ph.literal("</a>")
            ]))
            case 'p': return p_.option($, ($) => sh.ph.composed([
                sh.ph.literal("<p"),
                // Classes($.classes),
                sh.ph.literal(">"),
                sh.ph.literal($.text),
                sh.ph.literal("</p>")
            ]))
            default: return p_.au($[0])
        }
    }
)

export const Phrasing_Content: signatures.Phrasing_Content = ($) => sh.ph.indent(
    sh.pg.sentences(
        p_.from.list($).map(
            ($) => p_.from.state($).decide(
                ($) => {
                    switch ($[0]) {
                        case 'span': return p_.option($, ($) => sh.sentence([
                            sh.ph.literal("<span"),
                            sh.ph.literal(">"),
                            Phrasing_Content($),
                            sh.ph.literal("</span>")
                        ]))
                        case 'classified span': return p_.option($, ($) => sh.sentence([
                            sh.ph.literal("<span"),
                            Classes($.classes),
                            sh.ph.literal(">"),
                            Phrasing_Content($.content),
                            sh.ph.literal("</span>")
                        ]))
                        case 'titled span': return p_.option($, ($) => sh.sentence([
                            sh.ph.literal("<span title=\""),
                            sh.ph.literal($.title),
                            sh.ph.literal("\">"),
                            Phrasing_Content($.content),
                            sh.ph.literal("</span>")
                        ]))
                        case 'a': return p_.option($, ($) => sh.sentence([
                            sh.ph.literal("<a"),
                            // Classes($.classes),
                            sh.ph.literal(" href=\""),
                            sh.ph.literal($.href),
                            sh.ph.literal("\">"),
                            sh.ph.literal($.text),
                            sh.ph.literal("</a>")
                        ]))
                        case 'p': return p_.option($, ($) => sh.sentence([
                            sh.ph.literal("<p"),
                            // Classes($.classes),
                            sh.ph.literal(">"),
                            sh.ph.literal($.text),
                            sh.ph.literal("</p>")
                        ]))
                        default: return p_.au($[0])
                    }
                }
            )
        )
    )
)