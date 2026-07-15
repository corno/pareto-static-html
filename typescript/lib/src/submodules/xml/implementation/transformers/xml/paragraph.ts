import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/xml.js"
import type * as s_out from "../../../interface/schemas/paragraph.js"

namespace declarations {
    export type Document = p_.Transformer<
        s_in.Document,
        s_out.Paragraph
    >
    export type Element = p_.Transformer<
        s_in.Element,
        s_out.Phrase
    >
    export type Qualified_Name = p_.Transformer<
        s_in.Qualified_Name,
        s_out.Phrase
    >
    export type Node = p_.Transformer<
        s_in.Node,
        s_out.Phrase
    >
    export type Mixed_Content = p_.Transformer<
        s_in.Mixed_Content,
        s_out.Phrase
    >
}

import * as sh from "pareto-fountain-pen/shorthands/paragraph/deprecated"

export const Document: declarations.Document = ($) => sh.pg.sentences(p_.literal.chain(

    p_.from.optional($['doc type']).decide(
        ($) => p_.literal.list([
            sh.sentence([
                sh.ph.text("<!DOCTYPE "),
                sh.ph.text($.name),
                sh.ph.text(">")
            ])
        ]),
        () => p_.literal.list([])
    ),
    sh.sentence([

        Element($['root'])

    ])
))

export const Element: declarations.Element = ($) => sh.ph.composed(p_.literal.segmented_list([
    p_.literal.list([
        sh.ph.text("<"),
        Qualified_Name($.name),
    ]),
    p_.from.list($['attributes']).map(
        ($) => sh.ph.composed([
            sh.ph.text(" "),
            Qualified_Name($.name),
            sh.ph.text("=\""),
            sh.ph.text($.value),
            sh.ph.text("\""),
        ])),
    p_.literal.list([
        sh.ph.text(">"),
        p_.from.state($['content type']).decide(
            ($) => {
                switch ($[0]) {
                    case 'empty': return p_.option($, ($) => sh.ph.nothing())
                    case 'mixed': return p_.option($, ($) => Mixed_Content($))
                    case 'nodes only': return p_.option($, ($) => sh.ph.indent(
                        sh.pg.sentences(p_.from.list($.children).map(
                            ($) => sh.sentence([Node($)]))
                        )))
                    case 'text only': return p_.option($, ($) => sh.ph.text($.value))
                    default: return p_.exhaustive($[0])
                }
            }),
        sh.ph.text("</"),
        Qualified_Name($.name),
        sh.ph.text(">")
    ])
]))

export const Mixed_Content: declarations.Mixed_Content = ($) => sh.ph.composed(
    p_.from.list($).map(
        ($) => p_.from.state($).decide(
            ($) => {
                switch ($[0]) {
                    case 'node': return p_.option($, ($) => Node($))
                    case 'text': return p_.option($, ($) => sh.ph.text($.value))
                    default: return p_.exhaustive($[0])
                }
            })
    )
)

export const Qualified_Name: declarations.Qualified_Name = ($) => sh.ph.composed(p_.literal.chain(
    p_.from.optional($['namespace prefix']).decide(
        ($) => p_.literal.list([
            sh.ph.text($),
            sh.ph.text(":"),
        ]),
        () => p_.literal.list([])
    ),
    sh.ph.text($['local name']),
))

export const Node: declarations.Node = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'cdata': return p_.option($, ($) => sh.ph.composed([
                sh.ph.text("<![CDATA["),
                sh.ph.text($),
                sh.ph.text("]]>")
            ]))
            case 'comment': return p_.option($, ($) => sh.ph.composed([
                sh.ph.text("<!--"),
                sh.ph.text($),
                sh.ph.text("-->")
            ]))
            case 'element': return p_.option($, ($) => sh.ph.composed([
                Element($)
            ]))
            case 'processing instruction': return p_.option($, ($) => sh.ph.composed([
                sh.ph.text("<?"),
                sh.ph.text($.target),
                sh.ph.text(" "),
                sh.ph.text($.data),
                sh.ph.text("?>")
            ]))
            default: return p_.exhaustive($[0])
        }
    })