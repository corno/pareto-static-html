import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../../interface/generated/liana/schemas/static-html/data.js"
import type * as d_out from "../../../../interface/generated/liana/schemas/xml/data.js"
import type * as d_text from "pareto-fountain-pen/interface/generated/liana/schemas/text/data"

//dependencies
import * as t_prose_to_text from "pareto-fountain-pen/implementation/manual/transformers/prose/text"

//shorthands
import * as sh from "../../../../modules/xml/shorthands/xml/target.js"
import * as sh_fp from "pareto-fountain-pen/shorthands/prose/deprecated"

export namespace interface_ {

    export type Document = p_i.Transformer<
        d_in.Document, d_out.Document
    >
    export type Flow_Element = p_i.Transformer<
        d_in.Flow_Element, d_out.Element.content_type.nodes_only.children.L
    >
    export type Flow_Content = p_i.Transformer<
        d_in.Flow_Content, d_out.Element.content_type.nodes_only.children
    >
    export type Classes = p_i.Transformer<
        d_in.Classes, d_out.Element.attributes
    >
    export type Phrasing_Content = p_i.Transformer<
        d_in.Phrasing_Content, d_out.Mixed_Content
    >
    export type Phrasing_Element = p_i.Transformer<
        d_in.Phrasing_Element, d_out.Element
    >

}


const temp_serialize_number = (n: number): d_text.Text => {
    return `${n}`
}

export const Document: interface_.Document = ($) => sh.document(
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

export const Flow_Element: interface_.Flow_Element = ($) => p_.from.state($).decide(
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

export const Flow_Content: interface_.Flow_Content = ($) => p_.from.list($).map(
    ($) => Flow_Element($)
)

export const Classes: interface_.Classes = ($) => p_.literal.list([
    sh.attribute("class", t_prose_to_text.Phrase(
        sh_fp.ph.rich(
            p_.from.list($).map(
                ($) => sh_fp.ph.literal($)),
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

export const Phrasing_Content: interface_.Phrasing_Content = ($) => p_.from.list($).map(
    ($) => sh.m.element(Phrasing_Element($))
)

export const Phrasing_Element: interface_.Phrasing_Element = ($) => p_.from.state($).decide(
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