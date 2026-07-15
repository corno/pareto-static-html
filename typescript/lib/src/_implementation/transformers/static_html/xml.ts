import * as p_ from 'pareto-core/implementation/transformer'
import * as p_s from 'pareto-core/implementation/serializer'

//schemas
import type * as s_in from "../../../interface/schemas/static_html.js"
import type * as s_out from "../../../submodules/xml/interface/schemas/xml.js"

namespace declarations {
    export type Document = p_.Transformer<
        s_in.Document,
        s_out.Document
    >
    export type Flow_Element = p_.Transformer<
        s_in.Flow_Element,
        s_out.Element.content_type.nodes_only.children.L
    >
    export type Flow_Content = p_.Transformer<
        s_in.Flow_Content,
        s_out.Element.content_type.nodes_only.children
    >
    export type Classes = p_.Transformer<
        s_in.Classes,
        s_out.Element.attributes
    >
    export type Phrasing_Content = p_.Transformer<
        s_in.Phrasing_Content,
        s_out.Mixed_Content
    >
    export type Phrasing_Element = p_.Transformer<
        s_in.Phrasing_Element,
        s_out.Element
    >
}

//dependencies

//shorthands
import * as sh from "../../../submodules/xml/shorthands/xml/target.js"
import * as sh_fp from "pareto-fountain-pen/shorthands/prose_simple_with_rich/deprecated"

const temp_serialize_number = (n: number): string => {
    return `${n}`
}

export const Document: declarations.Document = ($) => sh.document(
    "html",
    sh.e.nodes_only(
        "html",
        p_.literal.list([]),
        p_.literal.list([
            sh.no.element(
                sh.e.nodes_only(
                    "head",
                    p_.literal.list([]),
                    p_.literal.list([
                        sh.no.element(
                            sh.e.empty(
                                "meta",
                                p_.literal.list([
                                    sh.attribute("charset", "UTF-8"),
                                ]),
                            )),
                        sh.no.element(
                            sh.e.empty(
                                "meta",
                                p_.literal.list([
                                    sh.attribute("name", "viewport"),
                                    sh.attribute("content", "width=device-width, initial-scale=1.0"),
                                ]),
                            )),
                        sh.no.element(
                            sh.e.text_only(
                                "style",
                                p_.literal.list([]),
                                $.css
                            )),
                    ])
                )),
            sh.no.element(
                sh.e.nodes_only(
                    "body",
                    p_.literal.list([]),
                    p_.literal.list([
                        Flow_Element($.root)
                    ])
                )),
        ])
    )
)

export const Flow_Element: declarations.Flow_Element = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'div': return p_.option($, ($) => sh.no.element(
                sh.e.nodes_only(
                    "div",
                    p_.literal.list([]),
                    Flow_Content($)
                )))
            case 'dimensioned div': return p_.option($, ($) => sh.no.element(
                sh.e.nodes_only(
                    "div",
                    p_.literal.segmented_list([
                        p_.from.optional($.width).decide(
                            ($) => p_.literal.list([
                                sh.attribute("width", temp_serialize_number($)),
                            ]),
                            () => p_.literal.list([])
                        ),
                        p_.from.optional($.height).decide(
                            ($) => p_.literal.list([
                                sh.attribute("height", temp_serialize_number($)),
                            ]),
                            () => p_.literal.list([])
                        )
                    ]),
                    Flow_Content($.content)
                )))
            case 'classified div': return p_.option($, ($) => sh.no.element(
                sh.e.nodes_only(
                    "div",
                    Classes($.classes),
                    Flow_Content($.content)
                )))
            case 'table': return p_.option($, ($) => sh.no.element(
                sh.e.nodes_only(
                    "table",
                    Classes($.classes),
                    p_.from.list($.sections).map(
                        ($) => sh.no.element(
                            sh.e.nodes_only(
                                p_.from.state($.type).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'header': return p_.option($, ($) => "thead")
                                            case 'body': return p_.option($, ($) => "tbody")
                                            case 'footer': return p_.option($, ($) => "tfoot")
                                            default: return p_.exhaustive($[0])
                                        }
                                    }),
                                Classes($.classes),
                                p_.from.list($.rows).map(
                                    ($) => {
                                        return sh.no.element(
                                            sh.e.nodes_only(
                                                "tr",
                                                p_.literal.segmented_list([
                                                    Classes($.classes),
                                                    p_.from.optional($.height).decide(
                                                        ($) => p_.literal.list([
                                                            sh.attribute("height", temp_serialize_number($)),
                                                        ]),
                                                        () => p_.literal.list([])
                                                    ),
                                                ]),
                                                p_.from.list($.cells).map(
                                                    ($) => sh.no.element(
                                                        sh.e.nodes_only(
                                                            p_.from.state($.type).decide(
                                                                ($): string => {
                                                                    switch ($[0]) {
                                                                        case 'th': return p_.option($, ($) => "th")
                                                                        case 'td': return p_.option($, ($) => "td")
                                                                        default: return p_.exhaustive($[0])
                                                                    }
                                                                }),
                                                            p_.literal.segmented_list([
                                                                Classes($.classes),
                                                                p_.from.optional($.colspan).decide(
                                                                    ($) => p_.literal.list([
                                                                        sh.attribute("colspan", temp_serialize_number($)),
                                                                    ]),
                                                                    () => p_.literal.list([])
                                                                ),
                                                            ]),
                                                            Flow_Content($.content)
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    }
                                )
                            )
                        )
                    )
                )
            ))
            case 'span': return p_.option($, ($) => sh.no.element(
                sh.e.mixed(
                    "span",
                    p_.literal.list([]),
                    Phrasing_Content($)
                )
            ))
            case 'label': return p_.option($, ($) => sh.no.element(
                sh.e.mixed(
                    "label",
                    Classes($.classes),
                    p_.literal.list([
                        sh.m.text($.text),
                        sh.m.node(
                            sh.no.element(
                                sh.e.nodes_only(
                                    "div",
                                    p_.literal.list([]),
                                    Flow_Content($.content)
                                )
                            )
                        )
                    ])
                )
            ))
            case 'img': return p_.option($, ($) => sh.no.element(
                sh.e.empty(
                    "img",
                    p_.literal.segmented_list([
                        p_.literal.list([
                            sh.attribute("src", $.src),
                            sh.attribute("alt", $.alt),
                        ]),
                        p_.from.optional($.width).decide(
                            ($) => p_.literal.list([
                                sh.attribute("width", temp_serialize_number($)),
                            ]),
                            () => p_.literal.list([])
                        ),
                        p_.from.optional($.height).decide(
                            ($) => p_.literal.list([
                                sh.attribute("height", temp_serialize_number($)),
                            ]),
                            () => p_.literal.list([])
                        )
                    ])
                )
            ))
            case 'svg': return p_.option($, ($) => sh.no.element(
                sh.e.mixed(
                    "svg",
                    p_.literal.segmented_list([
                        Classes($.classes),
                        p_.from.optional($.width).decide(
                            ($) => p_.literal.list([
                                sh.attribute("width", temp_serialize_number($)),
                            ]),
                            () => p_.literal.list([])
                        ),
                        p_.from.optional($.height).decide(
                            ($) => p_.literal.list([
                                sh.attribute("height", temp_serialize_number($)),
                            ]),
                            () => p_.literal.list([])
                        )
                    ]),
                    $.content
                )
            ))
            default: return p_.exhaustive($[0])
        }
    })

export const Flow_Content: declarations.Flow_Content = ($) => p_.from.list($).map(
    ($) => Flow_Element($)
)

export const Classes: declarations.Classes = ($) => p_.literal.list([
    sh.attribute("class", p_s.text_from_phrase(
        sh_fp.ph.rich_phrase(
            p_.from.list($).map(
                ($) => sh_fp.ph.literal($)),
            null,
            null,
            sh_fp.ph.literal(" "),
            null,
        ),
        "    ", //should not occur
        "\n", //should not occur
    )),
])

export const Phrasing_Content: declarations.Phrasing_Content = ($) => p_.from.list($).map(
    ($) => sh.m.element(Phrasing_Element($))
)

export const Phrasing_Element: declarations.Phrasing_Element = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'span': return p_.option($, ($) => sh.e.mixed(
                "span",
                p_.literal.list([]),
                Phrasing_Content($)
            ))
            case 'classified span': return p_.option($, ($) => sh.e.mixed(
                "span",
                Classes($.classes),
                Phrasing_Content($.content)
            ))
            case 'titled span': return p_.option($, ($) => sh.e.mixed(
                "span",
                p_.literal.list([
                    sh.attribute("title", $.title)
                ]),
                Phrasing_Content($.content)
            ))
            case 'a': return p_.option($, ($) => sh.e.mixed(
                "a",
                p_.literal.list([
                    sh.attribute("href", $.href)
                ]),
                p_.literal.list([
                    sh.m.text($.text),
                    sh.m.node(
                        sh.no.element(
                            sh.e.nodes_only(
                                "div",
                                p_.literal.list([]),
                                p_.literal.list([])
                            )))
                ]
                )))
            case 'p': return p_.option($, ($) => sh.e.mixed(
                "p",
                p_.literal.list([]),
                p_.literal.list([
                    sh.m.text($.text),
                    sh.m.node(
                        sh.no.element(
                            sh.e.empty(
                                "div",
                                p_.literal.list([]),
                            )))
                ]
                )))
            default: return p_.exhaustive($[0])
        }
    }
)