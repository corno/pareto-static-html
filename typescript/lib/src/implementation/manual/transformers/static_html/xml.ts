import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/static-html/data"
import * as d_out from "../../../../interface/generated/liana/schemas/xml/data"
import * as d_text from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"

//dependencies
import * as t_fp_to_text from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/text"

//shorthands
import * as sh from "../../../../modules/xml/shorthands/xml"
import * as sh_fp from "pareto-fountain-pen/dist/shorthands/prose"


export type Document = p_i.Transformer<d_in.Document, d_out.Document>
export type Flow_Element = p_i.Transformer<d_in.Flow_Element, d_out.Element.content_type.nodes_only.children.L>
export type Flow_Content = p_i.Transformer<d_in.Flow_Content, d_out.Element.content_type.nodes_only.children>
export type Classes = p_i.Transformer<d_in.Classes, d_out.Element.attributes>
export type Phrasing_Content = p_i.Transformer<d_in.Phrasing_Content, d_out.Mixed_Content>
export type Phrasing_Element = p_i.Transformer<d_in.Phrasing_Element, d_out.Element>


const temp_serialize_number = (n: number): d_text.Text => {
    return `${n}`
}

export const Document: Document = ($) => sh.document(
    "html",
    sh.e.nodes_only(
        "html",
        [],
        [
            sh.no.element(sh.e.nodes_only(
                "head",
                [],
                [
                    sh.no.element(sh.e.empty(
                        "meta",
                        [
                            sh.attribute("charset", "UTF-8"),
                        ],
                    )),
                    sh.no.element(sh.e.empty(
                        "meta",
                        [
                            sh.attribute("name", "viewport"),
                            sh.attribute("content", "width=device-width, initial-scale=1.0"),
                        ],
                    )),
                    sh.no.element(sh.e.text_only(
                        "style",
                        [],
                        $.css
                    )),
                ]
            )),
            sh.no.element(sh.e.nodes_only(
                "body",
                [],
                [
                    Flow_Element($.root)
                ]
            )),
        ]
    )
)

export const Flow_Element: Flow_Element = ($) => p_.from.state($).decide(($): d_out.Element.content_type.nodes_only.children.L => {
    switch ($[0]) {
        case 'div': return p_.ss($, ($) => sh.no.element(sh.e.nodes_only(
            "div",
            [],
            Flow_Content($)
        )))
        case 'dimensioned div': return p_.ss($, ($) => sh.no.element(sh.e.nodes_only(
            "div",
            p_.literal.nested_list([
                p_.from.optional(
                    $.width,
                ).decide(
                    ($) => p_.literal.list([
                        sh.attribute("width", temp_serialize_number($)),
                    ]),
                    () => p_.literal.list([])
                ),
                p_.from.optional(
                    $.height,
                ).decide(
                    ($) => p_.literal.list([
                        sh.attribute("height", temp_serialize_number($)),
                    ]),
                    () => p_.literal.list([])
                )
            ]),
            Flow_Content($.content)
        )))
        case 'classified div': return p_.ss($, ($) => sh.no.element(sh.e.nodes_only(
            "div",
            Classes($.classes),
            Flow_Content($.content)
        )))
        case 'table': return p_.ss($, ($) => sh.no.element(sh.e.nodes_only(
            "table",
            Classes($.classes),
            $.sections.__l_map_deprecated(($) => sh.no.element(sh.e.nodes_only(
                p_.from.state($.type).decide(($) => {
                    switch ($[0]) {
                        case 'header': return p_.ss($, ($) => "thead")
                        case 'body': return p_.ss($, ($) => "tbody")
                        case 'footer': return p_.ss($, ($) => "tfoot")
                        default: return p_.au($[0])
                    }
                }),
                Classes($.classes),
                $.rows.__l_map_deprecated(($) => {
                    return sh.no.element(sh.e.nodes_only(
                        "tr",
                        p_.literal.nested_list([
                            Classes($.classes),
                            $.height.__decide(
                                ($) => p_.literal.list([
                                    sh.attribute("height", temp_serialize_number($)),
                                ]),
                                () => p_.literal.list([])
                            ),
                        ]),
                        $.cells.__l_map_deprecated(($) => sh.no.element(sh.e.nodes_only(
                            p_.from.state($.type).decide(($): string => {
                                switch ($[0]) {
                                    case 'th': return p_.ss($, ($) => "th")
                                    case 'td': return p_.ss($, ($) => "td")
                                    default: return p_.au($[0])
                                }
                            }),
                            p_.literal.nested_list([
                                Classes($.classes),
                                $.colspan.__decide(
                                    ($) => p_.literal.list([
                                        sh.attribute("colspan", temp_serialize_number($)),
                                    ]),
                                    () => p_.literal.list([])
                                ),
                            ]),
                            Flow_Content($.content)
                        )))
                    ))
                })
            )))
        )))
        case 'span': return p_.ss($, ($) => sh.no.element(sh.e.mixed(
            "span",
            [],
            Phrasing_Content($)
        )))
        case 'label': return p_.ss($, ($) => sh.no.element(sh.e.mixed(
            "label",
            Classes($.classes),
            [
                sh.m.text($.text),
                sh.m.node(sh.no.element(sh.e.nodes_only(
                    "div",
                    [],
                    Flow_Content($.content)
                )))
            ]
        )))
        case 'img': return p_.ss($, ($) => sh.no.element(sh.e.empty(
            "img",
            p_.literal.nested_list([
                [
                    sh.attribute("src", $.src),
                    sh.attribute("alt", $.alt),
                ],
                p_.from.optional(
                    $.width,
                ).decide(
                    ($) => p_.literal.list([
                        sh.attribute("width", temp_serialize_number($)),
                    ]),
                    () => p_.literal.list([])
                ),
                p_.from.optional(
                    $.height,
                ).decide(
                    ($) => p_.literal.list([
                        sh.attribute("height", temp_serialize_number($)),
                    ]),
                    () => p_.literal.list([])
                )
            ])
        )))
        case 'svg': return p_.ss($, ($) => sh.no.element(sh.e.mixed(
            "svg",
            p_.literal.nested_list([
                Classes($.classes),
                p_.from.optional(
                    $.width,
                ).decide(
                    ($) => p_.literal.list([
                        sh.attribute("width", temp_serialize_number($)),
                    ]),
                    () => p_.literal.list([])
                ),
                p_.from.optional(
                    $.height,
                ).decide(
                    ($) => p_.literal.list([
                        sh.attribute("height", temp_serialize_number($)),
                    ]),
                    () => p_.literal.list([])
                )
            ]),
            $.content

        )))
        default: return p_.au($[0])
    }
})

export const Flow_Content: Flow_Content = ($) => p_.from.list(
    $
).map(
    ($) => Flow_Element($)
)

export const Classes: Classes = ($) => p_.literal.list([
    sh.attribute("class", t_fp_to_text.Phrase(
        sh_fp.ph.rich(
            $.__l_map_deprecated(($) => sh_fp.ph.literal($)),
            sh_fp.ph.nothing(),
            sh_fp.ph.nothing(),
            sh_fp.ph.literal(" "),
            sh_fp.ph.nothing(),
        ),
        {
            'indentation': "    ",
            'newline': "\n",
        }
    )),
])

export const Phrasing_Content: Phrasing_Content = ($) => p_.from.list(
    $
).map(
    ($) => sh.m.element(Phrasing_Element($))
)

export const Phrasing_Element: Phrasing_Element = ($) => p_.from.state($).decide(($): d_out.Element => {
    switch ($[0]) {
        case 'span': return p_.ss($, ($) => sh.e.mixed(
            "span",
            [],
            Phrasing_Content($)
        ))
        case 'classified span': return p_.ss($, ($) => sh.e.mixed(
            "span",
            Classes($.classes),
            Phrasing_Content($.content)
        ))
        case 'titled span': return p_.ss($, ($) => sh.e.mixed(
            "span",
            [
                sh.attribute("title", $.title)
            ],
            Phrasing_Content($.content)
        ))
        case 'a': return p_.ss($, ($) => sh.e.mixed(
            "a",
            [
                sh.attribute("href", $.href)
            ],
            [
                sh.m.text($.text),
                sh.m.node(sh.no.element(sh.e.nodes_only(
                    "div",
                    [],
                    []
                )))
            ]
        ))
        case 'p': return p_.ss($, ($) => sh.e.mixed(
            "p",
            [],
            [
                sh.m.text($.text),
                sh.m.node(sh.no.element(sh.e.empty(
                    "div",
                    [],
                )))
            ]
        ))
        default: return p_.au($[0])
    }
})


// export const Flow_Content: signatures.Flow_Content = ($) => sh.ph.indent(
//     sh.pg.sentences($.__l_map_deprecated(($) => sh.sentence([
//         p_.from.state($).decide(($) => {
//             switch ($[0]) {
//                 case 'div': return p_.ss($, ($) => sh.ph.composed([
//                     sh.ph.literal("<div"),
//                     sh.ph.literal(">"),
//                     Flow_Content($),
//                     sh.ph.literal("</div>")
//                 ]))
//                 case 'dimensioned div': return p_.ss($, ($) => sh.ph.composed([
//                     sh.ph.literal("<div"),
//                     $.width.__decide(
//                         ($) => sh.ph.composed([
//                             sh.ph.literal(" width=\""),
//                             sh.ph.serialize(temp_serialize_number($)),
//                             sh.ph.literal("\"")
//                         ]),
//                         () => sh.ph.nothing()
//                     ),
//                     $.height.__decide(
//                         ($) => sh.ph.composed([
//                             sh.ph.literal(" height=\""),
//                             sh.ph.serialize(temp_serialize_number($)),
//                             sh.ph.literal("\"")
//                         ]),
//                         () => sh.ph.nothing()
//                     ),
//                     sh.ph.literal(">"),
//                     Flow_Content($.content),
//                     sh.ph.literal("</div>")
//                 ]))
//                 case 'classified div': return p_.ss($, ($) => sh.ph.composed([
//                     sh.ph.literal("<div"),
//                     Classes($.classes),
//                     sh.ph.literal(">"),
//                     Flow_Content($.content),
//                     sh.ph.literal("</div>")
//                 ]))
//                 case 'table': return p_.ss($, ($) => sh.ph.composed([
//                     sh.ph.literal("<table"),
//                     Classes($.classes),
//                     sh.ph.literal(">"),
//                     sh.ph.indent(
//                         sh.pg.sentences($.sections.__l_map_deprecated((section) => sh.sentence([
//                             p_.from.state(section.type).decide(($) => {
//                                 switch ($[0]) {
//                                     case 'header': return p_.ss($, () => sh.ph.literal("<thead"))
//                                     case 'body': return p_.ss($, () => sh.ph.literal("<tbody"))
//                                     case 'footer': return p_.ss($, () => sh.ph.literal("<tfoot"))
//                                     default: return p_.au($[0])
//                                 }
//                             }),
//                             Classes(section.classes),
//                             sh.ph.literal(">"),
//                             sh.ph.indent(
//                                 sh.pg.sentences(section.rows.__l_map_deprecated((row) => sh.sentence([
//                                     sh.ph.literal("<tr"),
//                                     Classes(row.classes),
//                                     row.height.__decide(
//                                         ($) => sh.ph.composed([
//                                             sh.ph.literal(" height=\""),
//                                             sh.ph.serialize(temp_serialize_number($)),
//                                             sh.ph.literal("\"")
//                                         ]),
//                                         () => sh.ph.nothing()
//                                     ),
//                                     sh.ph.literal(">"),
//                                     sh.ph.indent(
//                                         sh.pg.sentences(row.cells.__l_map_deprecated((cell) => sh.sentence([
//                                             p_.from.state(row.type).decide(($) => {
//                                                 switch ($[0]) {
//                                                     case 'th': return p_.ss($, () => sh.ph.composed([
//                                                         sh.ph.literal("<th"),
//                                                         Classes(cell.classes),
//                                                         sh.ph.literal(">"),
//                                                         Flow_Content(cell.content),
//                                                         sh.ph.literal("</th>")
//                                                     ]))
//                                                     case 'td': return p_.ss($, () => sh.ph.composed([
//                                                         sh.ph.literal("<td"),
//                                                         Classes(cell.classes),
//                                                         sh.ph.literal(">"),
//                                                         Flow_Content(cell.content),
//                                                         sh.ph.literal("</td>")
//                                                     ]))
//                                                     default: return p_.au($[0])
//                                                 }
//                                             })
//                                         ])))
//                                     ),
//                                     sh.ph.literal("</tr>")
//                                 ])))
//                             ),
//                             p_.from.state(section.type).decide(($) => {
//                                 switch ($[0]) {
//                                     case 'header': return p_.ss($, () => sh.ph.composed([
//                                         sh.ph.literal("</thead>"),

//                                     ]))
//                                     case 'body': return p_.ss($, () => sh.ph.composed([
//                                         sh.ph.literal("</tbody>"),
//                                     ]))
//                                     case 'footer': return p_.ss($, () => sh.ph.composed([
//                                         sh.ph.literal("</tfoot>"),
//                                     ]))
//                                     default: return p_.au($[0])
//                                 }
//                             })
//                         ])))),
//                     sh.ph.literal("</table>")
//                 ]))
//                 case 'span': return p_.ss($, ($) => sh.ph.composed([
//                     sh.ph.literal("<span"),
//                     sh.ph.literal(">"),
//                     Phrasing_Content($),
//                     sh.ph.literal("</span>")
//                 ]))
//                 case 'label': return p_.ss($, ($) => sh.ph.composed([
//                     sh.ph.literal("<label"),
//                     Classes($.classes),
//                     sh.ph.literal(">"),
//                     sh.ph.literal($.text),
//                     Flow_Content($.content),
//                     sh.ph.literal("</label>")
//                 ]))
//                 case 'img': return p_.ss($, ($) => sh.ph.composed([
//                     sh.ph.literal("<img"),
//                     Classes($.classes),
//                     sh.ph.literal(" src=\""),
//                     sh.ph.literal($.src),
//                     sh.ph.literal("\" alt = \""),
//                     sh.ph.literal($.alt),
//                     sh.ph.literal("\""),
//                     $.width.__decide(
//                         ($) => sh.ph.composed([
//                             sh.ph.literal(" width=\""),
//                             sh.ph.serialize(temp_serialize_number($)),
//                             sh.ph.literal("\"")
//                         ]),
//                         () => sh.ph.nothing()
//                     ),
//                     $.height.__decide(
//                         ($) => sh.ph.composed([
//                             sh.ph.literal(" height=\""),
//                             sh.ph.serialize(temp_serialize_number($)),
//                             sh.ph.literal("\"")
//                         ]),
//                         () => sh.ph.nothing()
//                     ),
//                     sh.ph.literal(" />")
//                 ]))
//                 case 'svg': return p_.ss($, ($) => sh.ph.composed([
//                     sh.ph.literal("<svg"),
//                     Classes($.classes),
//                     $.width.__decide(
//                         ($) => sh.ph.composed([sh.ph.literal(" width=\""),
//                         sh.ph.serialize(temp_serialize_number($)),
//                         sh.ph.literal("\"")]),
//                         () => sh.ph.nothing()
//                     ),
//                     $.height.__decide(
//                         ($) => sh.ph.composed([sh.ph.literal(" height=\""),
//                         sh.ph.serialize(temp_serialize_number($)),
//                         sh.ph.literal("\"")
//                         ]),
//                         () => sh.ph.nothing()
//                     ),
//                     sh.ph.literal(">"),
//                     sh.ph.literal($.content),
//                     sh.ph.literal("</svg>")
//                 ]))
//                 default: return p_.au($[0])
//             }
//         })
//     ])))
// )

// export const Classes: signatures.Classes = ($) => p_.from.list($).is_empty()
//     ? sh.ph.nothing()
//     : sh.ph.composed([
//         sh.ph.literal(" class=\""),
//         sh.ph.rich(
//             $.__l_map_deprecated(($) => sh.ph.literal($)),
//             sh.ph.nothing(),
//             sh.ph.nothing(),
//             sh.ph.literal(" "),
//             sh.ph.nothing(),
//         ),
//         sh.ph.literal("\"")
//     ])

// export const Phrasing_Content: signatures.Phrasing_Content = ($) => sh.ph.indent(
//     sh.pg.sentences($.__l_map_deprecated(($) => p_.from.state($).decide(($): d_out.Sentence => {
//         switch ($[0]) {
//             case 'span': return p_.ss($, ($) => sh.sentence([
//                 sh.ph.literal("<span"),
//                 sh.ph.literal(">"),
//                 Phrasing_Content($),
//                 sh.ph.literal("</span>")
//             ]))
//             case 'classified span': return p_.ss($, ($) => sh.sentence([
//                 sh.ph.literal("<span"),
//                 Classes($.classes),
//                 sh.ph.literal(">"),
//                 Phrasing_Content($.content),
//                 sh.ph.literal("</span>")
//             ]))
//             case 'titled span': return p_.ss($, ($) => sh.sentence([
//                 sh.ph.literal("<span title=\""),
//                 sh.ph.literal($.title),
//                 sh.ph.literal("\">"),
//                 Phrasing_Content($.content),
//                 sh.ph.literal("</span>")
//             ]))
//             case 'a': return p_.ss($, ($) => sh.sentence([
//                 sh.ph.literal("<a"),
//                 // Classes($.classes),
//                 sh.ph.literal(" href=\""),
//                 sh.ph.literal($.href),
//                 sh.ph.literal("\">"),
//                 sh.ph.literal($.text),
//                 sh.ph.literal("</a>")
//             ]))
//             case 'p': return p_.ss($, ($) => sh.sentence([
//                 sh.ph.literal("<p"),
//                 // Classes($.classes),
//                 sh.ph.literal(">"),
//                 sh.ph.literal($.text),
//                 sh.ph.literal("</p>")
//             ]))
//             default: return p_.au($[0])
//         }
//     })))
// )