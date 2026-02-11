import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/static-html/data"
import * as d_out from "../../../../interface/generated/liana/schemas/xml/data"
import * as d_text from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"

//dependencies
import * as t_fp_to_text from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/text"

//shorthands
import * as sh from "../../../../modules/xml/shorthands/xml"
import * as sh_fp from "pareto-fountain-pen/dist/shorthands/prose"


export type Document = _pi.Transformer<d_in.Document, d_out.Document>
export type Flow_Content = _pi.Transformer<d_in.Flow_Content, d_out.Element.content_type.nodes_only.children>
export type Classes = _pi.Transformer<d_in.Classes, d_out.Element.attributes>
export type Phrasing_Content = _pi.Transformer<d_in.Phrasing_Content, d_out.Mixed_Content>
export type Phrasing_Element = _pi.Transformer<d_in.Phrasing_Element, d_out.Element>


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
                Flow_Content($.root)
            )),
        ]
    )
)

export const Flow_Content: Flow_Content = ($) => _p.list.from.list(
    $
).map(
    ($) => _p.decide.state($, ($): d_out.Element.content_type.nodes_only.children.L => {
        switch ($[0]) {
            case 'div': return _p.ss($, ($) => sh.no.element(sh.e.nodes_only(
                "div",
                [],
                Flow_Content($)
            )))
            case 'dimensioned div': return _p.ss($, ($) => sh.no.element(sh.e.nodes_only(
                "div",
                _p.list.nested_literal_old([
                    _p.decide.optional(
                        $.width,
                        ($) => [
                            sh.attribute("width", temp_serialize_number($)),
                        ],
                        () => []
                    ),
                    _p.decide.optional(
                        $.height,
                        ($) => [
                            sh.attribute("height", temp_serialize_number($)),
                        ],
                        () => []
                    )
                ]),
                Flow_Content($.content)
            )))
            case 'classified div': return _p.ss($, ($) => sh.no.element(sh.e.nodes_only(
                "div",
                Classes($.classes),
                Flow_Content($.content)
            )))
            case 'table': return _p.ss($, ($) => sh.no.element(sh.e.nodes_only(
                "table",
                Classes($.classes),
                $.sections.__l_map(($) => sh.no.element(sh.e.nodes_only(
                    _p.decide.state($.type, ($) => {
                        switch ($[0]) {
                            case 'header': return _p.ss($, ($) => "thead")
                            case 'body': return _p.ss($, ($) => "tbody")
                            case 'footer': return _p.ss($, ($) => "tfoot")
                            default: return _p.au($[0])
                        }
                    }),
                    Classes($.classes),
                    $.rows.__l_map(($) => {
                        const x = _p.decide.state($.type, ($): string => {
                            switch ($[0]) {
                                case 'th': return _p.ss($, ($) => "th")
                                case 'td': return _p.ss($, ($) => "td")
                                default: return _p.au($[0])
                            }
                        })
                        return sh.no.element(sh.e.nodes_only(
                            "tr",
                            _p.list.nested_literal_old([
                                Classes($.classes),
                                $.height.__decide(
                                    ($) => [
                                        sh.attribute("height", temp_serialize_number($)),
                                    ],
                                    () => []
                                ),
                            ]),
                            $.cells.__l_map(($) => sh.no.element(sh.e.nodes_only(
                                x,
                                Classes($.classes),
                                Flow_Content($.content)
                            )))
                        ))
                    })
                )))
            )))
            case 'span': return _p.ss($, ($) => sh.no.element(sh.e.mixed(
                "span",
                [],
                Phrasing_Content($)
            )))
            case 'label': return _p.ss($, ($) => sh.no.element(sh.e.mixed(
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
            case 'img': return _p.ss($, ($) => sh.no.element(sh.e.empty(
                "img",
                _p.list.nested_literal_old([
                    [
                        sh.attribute("src", $.src),
                        sh.attribute("alt", $.alt),
                    ],
                    _p.decide.optional(
                        $.width,
                        ($) => [
                            sh.attribute("width", temp_serialize_number($)),
                        ],
                        () => []
                    ),
                    _p.decide.optional(
                        $.height,
                        ($) => [
                            sh.attribute("height", temp_serialize_number($)),
                        ],
                        () => []
                    )
                ])
            )))
            case 'svg': return _p.ss($, ($) => sh.no.element(sh.e.mixed(
                "svg",
                _p.list.nested_literal_old([
                    Classes($.classes),
                    _p.decide.optional(
                        $.width,
                        ($) => [
                            sh.attribute("width", temp_serialize_number($)),
                        ],
                        () => []
                    ),
                    _p.decide.optional(
                        $.height,
                        ($) => [
                            sh.attribute("height", temp_serialize_number($)),
                        ],
                        () => []
                    )
                ]),
                $.content

            )))
            default: return _p.au($[0])
        }
    })
)

export const Classes: Classes = ($) => _p.list.literal([
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

export const Phrasing_Content: Phrasing_Content = ($) => _p.list.from.list(
    $
).map(
    ($) => sh.m.element(Phrasing_Element($))
)

export const Phrasing_Element: Phrasing_Element = ($) => _p.decide.state($, ($): d_out.Element => {
    switch ($[0]) {
        case 'span': return _p.ss($, ($) => sh.e.mixed(
            "span",
            [],
            Phrasing_Content($)
        ))
        case 'classified span': return _p.ss($, ($) => sh.e.mixed(
            "span",
            Classes($.classes),
            Phrasing_Content($.content)
        ))
        case 'titled span': return _p.ss($, ($) => sh.e.mixed(
            "span",
            [
                sh.attribute("title", $.title)
            ],
            Phrasing_Content($.content)
        ))
        case 'a': return _p.ss($, ($) => sh.e.mixed(
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
        case 'p': return _p.ss($, ($) => sh.e.mixed(
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
        default: return _p.au($[0])
    }
})


// export const Flow_Content: signatures.Flow_Content = ($) => sh.ph.indent(
//     sh.pg.sentences($.__l_map(($) => sh.sentence([
//         _p.decide.state($, ($) => {
//             switch ($[0]) {
//                 case 'div': return _p.ss($, ($) => sh.ph.composed([
//                     sh.ph.literal("<div"),
//                     sh.ph.literal(">"),
//                     Flow_Content($),
//                     sh.ph.literal("</div>")
//                 ]))
//                 case 'dimensioned div': return _p.ss($, ($) => sh.ph.composed([
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
//                 case 'classified div': return _p.ss($, ($) => sh.ph.composed([
//                     sh.ph.literal("<div"),
//                     Classes($.classes),
//                     sh.ph.literal(">"),
//                     Flow_Content($.content),
//                     sh.ph.literal("</div>")
//                 ]))
//                 case 'table': return _p.ss($, ($) => sh.ph.composed([
//                     sh.ph.literal("<table"),
//                     Classes($.classes),
//                     sh.ph.literal(">"),
//                     sh.ph.indent(
//                         sh.pg.sentences($.sections.__l_map((section) => sh.sentence([
//                             _p.decide.state(section.type, ($) => {
//                                 switch ($[0]) {
//                                     case 'header': return _p.ss($, () => sh.ph.literal("<thead"))
//                                     case 'body': return _p.ss($, () => sh.ph.literal("<tbody"))
//                                     case 'footer': return _p.ss($, () => sh.ph.literal("<tfoot"))
//                                     default: return _p.au($[0])
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
//                                             _p.decide.state(row.type, ($) => {
//                                                 switch ($[0]) {
//                                                     case 'th': return _p.ss($, () => sh.ph.composed([
//                                                         sh.ph.literal("<th"),
//                                                         Classes(cell.classes),
//                                                         sh.ph.literal(">"),
//                                                         Flow_Content(cell.content),
//                                                         sh.ph.literal("</th>")
//                                                     ]))
//                                                     case 'td': return _p.ss($, () => sh.ph.composed([
//                                                         sh.ph.literal("<td"),
//                                                         Classes(cell.classes),
//                                                         sh.ph.literal(">"),
//                                                         Flow_Content(cell.content),
//                                                         sh.ph.literal("</td>")
//                                                     ]))
//                                                     default: return _p.au($[0])
//                                                 }
//                                             })
//                                         ])))
//                                     ),
//                                     sh.ph.literal("</tr>")
//                                 ])))
//                             ),
//                             _p.decide.state(section.type, ($) => {
//                                 switch ($[0]) {
//                                     case 'header': return _p.ss($, () => sh.ph.composed([
//                                         sh.ph.literal("</thead>"),

//                                     ]))
//                                     case 'body': return _p.ss($, () => sh.ph.composed([
//                                         sh.ph.literal("</tbody>"),
//                                     ]))
//                                     case 'footer': return _p.ss($, () => sh.ph.composed([
//                                         sh.ph.literal("</tfoot>"),
//                                     ]))
//                                     default: return _p.au($[0])
//                                 }
//                             })
//                         ])))),
//                     sh.ph.literal("</table>")
//                 ]))
//                 case 'span': return _p.ss($, ($) => sh.ph.composed([
//                     sh.ph.literal("<span"),
//                     sh.ph.literal(">"),
//                     Phrasing_Content($),
//                     sh.ph.literal("</span>")
//                 ]))
//                 case 'label': return _p.ss($, ($) => sh.ph.composed([
//                     sh.ph.literal("<label"),
//                     Classes($.classes),
//                     sh.ph.literal(">"),
//                     sh.ph.literal($.text),
//                     Flow_Content($.content),
//                     sh.ph.literal("</label>")
//                 ]))
//                 case 'img': return _p.ss($, ($) => sh.ph.composed([
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
//                 case 'svg': return _p.ss($, ($) => sh.ph.composed([
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
//                 default: return _p.au($[0])
//             }
//         })
//     ])))
// )

// export const Classes: signatures.Classes = ($) => _p.boolean.from.list($).is_empty()
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
//     sh.pg.sentences($.__l_map(($) => _p.decide.state($, ($): d_out.Sentence => {
//         switch ($[0]) {
//             case 'span': return _p.ss($, ($) => sh.sentence([
//                 sh.ph.literal("<span"),
//                 sh.ph.literal(">"),
//                 Phrasing_Content($),
//                 sh.ph.literal("</span>")
//             ]))
//             case 'classified span': return _p.ss($, ($) => sh.sentence([
//                 sh.ph.literal("<span"),
//                 Classes($.classes),
//                 sh.ph.literal(">"),
//                 Phrasing_Content($.content),
//                 sh.ph.literal("</span>")
//             ]))
//             case 'titled span': return _p.ss($, ($) => sh.sentence([
//                 sh.ph.literal("<span title=\""),
//                 sh.ph.literal($.title),
//                 sh.ph.literal("\">"),
//                 Phrasing_Content($.content),
//                 sh.ph.literal("</span>")
//             ]))
//             case 'a': return _p.ss($, ($) => sh.sentence([
//                 sh.ph.literal("<a"),
//                 // Classes($.classes),
//                 sh.ph.literal(" href=\""),
//                 sh.ph.literal($.href),
//                 sh.ph.literal("\">"),
//                 sh.ph.literal($.text),
//                 sh.ph.literal("</a>")
//             ]))
//             case 'p': return _p.ss($, ($) => sh.sentence([
//                 sh.ph.literal("<p"),
//                 // Classes($.classes),
//                 sh.ph.literal(">"),
//                 sh.ph.literal($.text),
//                 sh.ph.literal("</p>")
//             ]))
//             default: return _p.au($[0])
//         }
//     })))
// )