import * as pt from 'pareto-core/dist/transformer/implementation'
import * as p_ti from 'pareto-core/dist/transformer/interface'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/static-html/data"
import * as d_out from "../../../../interface/generated/liana/schemas/xml/data"
import * as d_text from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"

//dependencies
import * as t_fp_to_text from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/text"

//shorthands
import * as sh from "../../../../modules/xml/shorthands/xml"
import * as sh_fp from "pareto-fountain-pen/dist/shorthands/prose"


export type Document = p_ti.Transformer<d_in.Document, d_out.Document>
export type Flow_Element = p_ti.Transformer<d_in.Flow_Element, d_out.Element.content_type.nodes_only.children.L>
export type Flow_Content = p_ti.Transformer<d_in.Flow_Content, d_out.Element.content_type.nodes_only.children>
export type Classes = p_ti.Transformer<d_in.Classes, d_out.Element.attributes>
export type Phrasing_Content = p_ti.Transformer<d_in.Phrasing_Content, d_out.Mixed_Content>
export type Phrasing_Element = p_ti.Transformer<d_in.Phrasing_Element, d_out.Element>


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

export const Flow_Element: Flow_Element = ($) => pt.decide.state($, ($): d_out.Element.content_type.nodes_only.children.L => {
    switch ($[0]) {
        case 'div': return pt.ss($, ($) => sh.no.element(sh.e.nodes_only(
            "div",
            [],
            Flow_Content($)
        )))
        case 'dimensioned div': return pt.ss($, ($) => sh.no.element(sh.e.nodes_only(
            "div",
            pt.literal.nested_list([
                pt.decide.optional(
                    $.width,
                    ($) => pt.literal.list([
                        sh.attribute("width", temp_serialize_number($)),
                    ]),
                    () => pt.literal.list([])
                ),
                pt.decide.optional(
                    $.height,
                    ($) => pt.literal.list([
                        sh.attribute("height", temp_serialize_number($)),
                    ]),
                    () => pt.literal.list([])
                )
            ]),
            Flow_Content($.content)
        )))
        case 'classified div': return pt.ss($, ($) => sh.no.element(sh.e.nodes_only(
            "div",
            Classes($.classes),
            Flow_Content($.content)
        )))
        case 'table': return pt.ss($, ($) => sh.no.element(sh.e.nodes_only(
            "table",
            Classes($.classes),
            $.sections.__l_map(($) => sh.no.element(sh.e.nodes_only(
                pt.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'header': return pt.ss($, ($) => "thead")
                        case 'body': return pt.ss($, ($) => "tbody")
                        case 'footer': return pt.ss($, ($) => "tfoot")
                        default: return pt.au($[0])
                    }
                }),
                Classes($.classes),
                $.rows.__l_map(($) => {
                    return sh.no.element(sh.e.nodes_only(
                        "tr",
                        pt.literal.nested_list([
                            Classes($.classes),
                            $.height.__decide(
                                ($) => pt.literal.list([
                                    sh.attribute("height", temp_serialize_number($)),
                                ]),
                                () => pt.literal.list([])
                            ),
                        ]),
                        $.cells.__l_map(($) => sh.no.element(sh.e.nodes_only(
                            pt.decide.state($.type, ($): string => {
                                switch ($[0]) {
                                    case 'th': return pt.ss($, ($) => "th")
                                    case 'td': return pt.ss($, ($) => "td")
                                    default: return pt.au($[0])
                                }
                            }),
                            pt.literal.nested_list([
                                Classes($.classes),
                                $.colspan.__decide(
                                    ($) => pt.literal.list([
                                        sh.attribute("colspan", temp_serialize_number($)),
                                    ]),
                                    () => pt.literal.list([])
                                ),
                            ]),
                            Flow_Content($.content)
                        )))
                    ))
                })
            )))
        )))
        case 'span': return pt.ss($, ($) => sh.no.element(sh.e.mixed(
            "span",
            [],
            Phrasing_Content($)
        )))
        case 'label': return pt.ss($, ($) => sh.no.element(sh.e.mixed(
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
        case 'img': return pt.ss($, ($) => sh.no.element(sh.e.empty(
            "img",
            pt.literal.nested_list([
                [
                    sh.attribute("src", $.src),
                    sh.attribute("alt", $.alt),
                ],
                pt.decide.optional(
                    $.width,
                    ($) => pt.literal.list([
                        sh.attribute("width", temp_serialize_number($)),
                    ]),
                    () => pt.literal.list([])
                ),
                pt.decide.optional(
                    $.height,
                    ($) => pt.literal.list([
                        sh.attribute("height", temp_serialize_number($)),
                    ]),
                    () => pt.literal.list([])
                )
            ])
        )))
        case 'svg': return pt.ss($, ($) => sh.no.element(sh.e.mixed(
            "svg",
            pt.literal.nested_list([
                Classes($.classes),
                pt.decide.optional(
                    $.width,
                    ($) => pt.literal.list([
                        sh.attribute("width", temp_serialize_number($)),
                    ]),
                    () => pt.literal.list([])
                ),
                pt.decide.optional(
                    $.height,
                    ($) => pt.literal.list([
                        sh.attribute("height", temp_serialize_number($)),
                    ]),
                    () => pt.literal.list([])
                )
            ]),
            $.content

        )))
        default: return pt.au($[0])
    }
})

export const Flow_Content: Flow_Content = ($) => pt.list.from.list(
    $
).map(
    ($) => Flow_Element($)
)

export const Classes: Classes = ($) => pt.literal.list([
    sh.attribute("class", t_fp_to_text.Phrase(
        sh_fp.ph.rich(
            $.__l_map(($) => sh_fp.ph.literal($)),
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

export const Phrasing_Content: Phrasing_Content = ($) => pt.list.from.list(
    $
).map(
    ($) => sh.m.element(Phrasing_Element($))
)

export const Phrasing_Element: Phrasing_Element = ($) => pt.decide.state($, ($): d_out.Element => {
    switch ($[0]) {
        case 'span': return pt.ss($, ($) => sh.e.mixed(
            "span",
            [],
            Phrasing_Content($)
        ))
        case 'classified span': return pt.ss($, ($) => sh.e.mixed(
            "span",
            Classes($.classes),
            Phrasing_Content($.content)
        ))
        case 'titled span': return pt.ss($, ($) => sh.e.mixed(
            "span",
            [
                sh.attribute("title", $.title)
            ],
            Phrasing_Content($.content)
        ))
        case 'a': return pt.ss($, ($) => sh.e.mixed(
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
        case 'p': return pt.ss($, ($) => sh.e.mixed(
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
        default: return pt.au($[0])
    }
})


// export const Flow_Content: signatures.Flow_Content = ($) => sh.ph.indent(
//     sh.pg.sentences($.__l_map(($) => sh.sentence([
//         pt.decide.state($, ($) => {
//             switch ($[0]) {
//                 case 'div': return pt.ss($, ($) => sh.ph.composed([
//                     sh.ph.literal("<div"),
//                     sh.ph.literal(">"),
//                     Flow_Content($),
//                     sh.ph.literal("</div>")
//                 ]))
//                 case 'dimensioned div': return pt.ss($, ($) => sh.ph.composed([
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
//                 case 'classified div': return pt.ss($, ($) => sh.ph.composed([
//                     sh.ph.literal("<div"),
//                     Classes($.classes),
//                     sh.ph.literal(">"),
//                     Flow_Content($.content),
//                     sh.ph.literal("</div>")
//                 ]))
//                 case 'table': return pt.ss($, ($) => sh.ph.composed([
//                     sh.ph.literal("<table"),
//                     Classes($.classes),
//                     sh.ph.literal(">"),
//                     sh.ph.indent(
//                         sh.pg.sentences($.sections.__l_map((section) => sh.sentence([
//                             pt.decide.state(section.type, ($) => {
//                                 switch ($[0]) {
//                                     case 'header': return pt.ss($, () => sh.ph.literal("<thead"))
//                                     case 'body': return pt.ss($, () => sh.ph.literal("<tbody"))
//                                     case 'footer': return pt.ss($, () => sh.ph.literal("<tfoot"))
//                                     default: return pt.au($[0])
//                                 }
//                             }),
//                             Classes(section.classes),
//                             sh.ph.literal(">"),
//                             sh.ph.indent(
//                                 sh.pg.sentences(section.rows.__l_map((row) => sh.sentence([
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
//                                         sh.pg.sentences(row.cells.__l_map((cell) => sh.sentence([
//                                             pt.decide.state(row.type, ($) => {
//                                                 switch ($[0]) {
//                                                     case 'th': return pt.ss($, () => sh.ph.composed([
//                                                         sh.ph.literal("<th"),
//                                                         Classes(cell.classes),
//                                                         sh.ph.literal(">"),
//                                                         Flow_Content(cell.content),
//                                                         sh.ph.literal("</th>")
//                                                     ]))
//                                                     case 'td': return pt.ss($, () => sh.ph.composed([
//                                                         sh.ph.literal("<td"),
//                                                         Classes(cell.classes),
//                                                         sh.ph.literal(">"),
//                                                         Flow_Content(cell.content),
//                                                         sh.ph.literal("</td>")
//                                                     ]))
//                                                     default: return pt.au($[0])
//                                                 }
//                                             })
//                                         ])))
//                                     ),
//                                     sh.ph.literal("</tr>")
//                                 ])))
//                             ),
//                             pt.decide.state(section.type, ($) => {
//                                 switch ($[0]) {
//                                     case 'header': return pt.ss($, () => sh.ph.composed([
//                                         sh.ph.literal("</thead>"),

//                                     ]))
//                                     case 'body': return pt.ss($, () => sh.ph.composed([
//                                         sh.ph.literal("</tbody>"),
//                                     ]))
//                                     case 'footer': return pt.ss($, () => sh.ph.composed([
//                                         sh.ph.literal("</tfoot>"),
//                                     ]))
//                                     default: return pt.au($[0])
//                                 }
//                             })
//                         ])))),
//                     sh.ph.literal("</table>")
//                 ]))
//                 case 'span': return pt.ss($, ($) => sh.ph.composed([
//                     sh.ph.literal("<span"),
//                     sh.ph.literal(">"),
//                     Phrasing_Content($),
//                     sh.ph.literal("</span>")
//                 ]))
//                 case 'label': return pt.ss($, ($) => sh.ph.composed([
//                     sh.ph.literal("<label"),
//                     Classes($.classes),
//                     sh.ph.literal(">"),
//                     sh.ph.literal($.text),
//                     Flow_Content($.content),
//                     sh.ph.literal("</label>")
//                 ]))
//                 case 'img': return pt.ss($, ($) => sh.ph.composed([
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
//                 case 'svg': return pt.ss($, ($) => sh.ph.composed([
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
//                 default: return pt.au($[0])
//             }
//         })
//     ])))
// )

// export const Classes: signatures.Classes = ($) => pt.boolean.from.list($).is_empty()
//     ? sh.ph.nothing()
//     : sh.ph.composed([
//         sh.ph.literal(" class=\""),
//         sh.ph.rich(
//             $.__l_map(($) => sh.ph.literal($)),
//             sh.ph.nothing(),
//             sh.ph.nothing(),
//             sh.ph.literal(" "),
//             sh.ph.nothing(),
//         ),
//         sh.ph.literal("\"")
//     ])

// export const Phrasing_Content: signatures.Phrasing_Content = ($) => sh.ph.indent(
//     sh.pg.sentences($.__l_map(($) => pt.decide.state($, ($): d_out.Sentence => {
//         switch ($[0]) {
//             case 'span': return pt.ss($, ($) => sh.sentence([
//                 sh.ph.literal("<span"),
//                 sh.ph.literal(">"),
//                 Phrasing_Content($),
//                 sh.ph.literal("</span>")
//             ]))
//             case 'classified span': return pt.ss($, ($) => sh.sentence([
//                 sh.ph.literal("<span"),
//                 Classes($.classes),
//                 sh.ph.literal(">"),
//                 Phrasing_Content($.content),
//                 sh.ph.literal("</span>")
//             ]))
//             case 'titled span': return pt.ss($, ($) => sh.sentence([
//                 sh.ph.literal("<span title=\""),
//                 sh.ph.literal($.title),
//                 sh.ph.literal("\">"),
//                 Phrasing_Content($.content),
//                 sh.ph.literal("</span>")
//             ]))
//             case 'a': return pt.ss($, ($) => sh.sentence([
//                 sh.ph.literal("<a"),
//                 // Classes($.classes),
//                 sh.ph.literal(" href=\""),
//                 sh.ph.literal($.href),
//                 sh.ph.literal("\">"),
//                 sh.ph.literal($.text),
//                 sh.ph.literal("</a>")
//             ]))
//             case 'p': return pt.ss($, ($) => sh.sentence([
//                 sh.ph.literal("<p"),
//                 // Classes($.classes),
//                 sh.ph.literal(">"),
//                 sh.ph.literal($.text),
//                 sh.ph.literal("</p>")
//             ]))
//             default: return pt.au($[0])
//         }
//     })))
// )