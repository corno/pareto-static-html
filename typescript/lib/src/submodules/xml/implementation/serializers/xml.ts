import * as p_ from 'pareto-core/implementation/serializer'

//schemas
import type * as s_in from "../../interface/schemas/xml.js"

namespace declarations {
    export type Document = p_.Paragraph_Serializer<
        s_in.Document
    >
    export type Element = p_.Phrase_Serializer<
        s_in.Element
    >
    export type Qualified_Name = p_.Phrase_Serializer<
        s_in.Qualified_Name
    >
    export type Node = p_.Phrase_Serializer<
        s_in.Node
    >
    export type Mixed_Content = p_.Phrase_Serializer<
        s_in.Mixed_Content
    >
}

import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const Document: declarations.Document = ($) => sh.pg.sentences(p_.literal.chain(

    p_.from.optional($['doc type']).decide(
        ($) => p_.literal.list([
            sh.sentence([
                sh.ph.literal("<!DOCTYPE "),
                sh.ph.literal($.name),
                sh.ph.literal(">")
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
        sh.ph.literal("<"),
        Qualified_Name($.name),
    ]),
    p_.from.list($['attributes']).map(
        ($) => sh.ph.composed([
            sh.ph.literal(" "),
            Qualified_Name($.name),
            sh.ph.literal("=\""),
            sh.ph.literal($.value),
            sh.ph.literal("\""),
        ])),
    p_.literal.list([
        sh.ph.literal(">"),
        p_.from.state($['content type']).decide(
            ($) => {
                switch ($[0]) {
                    case 'empty': return p_.option($, ($) => sh.ph.nothing())
                    case 'mixed': return p_.option($, ($) => Mixed_Content($))
                    case 'nodes only': return p_.option($, ($) => sh.ph.indent(
                        sh.pg.sentences(p_.from.list($.children).map(
                            ($) => sh.sentence([Node($)]))
                        )))
                    case 'text only': return p_.option($, ($) => sh.ph.literal($.value))
                    default: return p_.exhaustive($[0])
                }
            }),
        sh.ph.literal("</"),
        Qualified_Name($.name),
        sh.ph.literal(">")
    ])
]))

export const Mixed_Content: declarations.Mixed_Content = ($) => sh.ph.composed(
    p_.from.list($).map(
        ($) => p_.from.state($).decide(
            ($) => {
                switch ($[0]) {
                    case 'node': return p_.option($, ($) => Node($))
                    case 'text': return p_.option($, ($) => sh.ph.literal($.value))
                    default: return p_.exhaustive($[0])
                }
            })
    )
)

export const Qualified_Name: declarations.Qualified_Name = ($) => sh.ph.composed(p_.literal.chain(
    p_.from.optional($['namespace prefix']).decide(
        ($) => p_.literal.list([
            sh.ph.literal($),
            sh.ph.literal(":"),
        ]),
        () => p_.literal.list([])
    ),
    sh.ph.literal($['local name']),
))

export const Node: declarations.Node = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'cdata': return p_.option($, ($) => sh.ph.composed([
                sh.ph.literal("<![CDATA["),
                sh.ph.literal($),
                sh.ph.literal("]]>")
            ]))
            case 'comment': return p_.option($, ($) => sh.ph.composed([
                sh.ph.literal("<!--"),
                sh.ph.literal($),
                sh.ph.literal("-->")
            ]))
            case 'element': return p_.option($, ($) => sh.ph.composed([
                Element($)
            ]))
            case 'processing instruction': return p_.option($, ($) => sh.ph.composed([
                sh.ph.literal("<?"),
                sh.ph.literal($.target),
                sh.ph.literal(" "),
                sh.ph.literal($.data),
                sh.ph.literal("?>")
            ]))
            default: return p_.exhaustive($[0])
        }
    })