import * as pt from 'pareto-core/dist/transformer/implementation'
import * as p_ti from 'pareto-core/dist/transformer/interface'

import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"
import * as d_in from "../../../../../../interface/generated/liana/schemas/xml/data"

import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export type Document = p_ti.Transformer<d_in.Document, d_out.Paragraph>
export type Element = p_ti.Transformer<d_in.Element, d_out.Phrase>
export type Qualified_Name = p_ti.Transformer<d_in.Qualified_Name, d_out.Phrase>
export type Node = p_ti.Transformer<d_in.Node, d_out.Phrase>
export type Mixed_Content = p_ti.Transformer<d_in.Mixed_Content, d_out.Phrase>

export const Document: Document = ($) => sh.pg.sentences(pt.literal.nested_list([

    pt.decide.optional(
        $['doc type'],
        ($) => pt.literal.list([
            sh.sentence([
                sh.ph.literal("<!DOCTYPE "),
                sh.ph.literal($.name),
                sh.ph.literal(">")
            ])
        ]),
        () => pt.literal.list([])
    ),
    [
        sh.sentence([

            Element($['root'])

        ])
    ]
]))

export const Element: Element = ($) => sh.ph.composed(pt.literal.nested_list([
    [
        sh.ph.literal("<"),
        Qualified_Name($.name),
    ],
    pt.list.from.list(
        $['attributes'],
    ).map(($) => sh.ph.composed([
        sh.ph.literal(" "),
        Qualified_Name($.name),
        sh.ph.literal("=\""),
        sh.ph.literal($.value),
        sh.ph.literal("\""),
    ])),
    [
        sh.ph.literal(">"),
        pt.decide.state($['content type'], ($) => {
            switch ($[0]) {
                case 'empty': return pt.ss($, ($) => sh.ph.nothing())
                case 'mixed': return pt.ss($, ($) => Mixed_Content($))
                case 'nodes only': return pt.ss($, ($) => sh.ph.indent(
                    sh.pg.sentences(pt.list.from.list(
                        $.children
                    ).map(($) => sh.sentence([Node($)]))
                    )))
                case 'text only': return pt.ss($, ($) => sh.ph.literal($.value))
                default: return pt.au($[0])
            }
        }),
        sh.ph.literal("</"),
        Qualified_Name($.name),
        sh.ph.literal(">")
    ],
]))

export const Mixed_Content: Mixed_Content = ($) => sh.ph.composed(
    pt.list.from.list(
        $
    ).map(($) => pt.decide.state($, ($) => {
        switch ($[0]) {
            case 'node': return pt.ss($, ($) => Node($))
            case 'text': return pt.ss($, ($) => sh.ph.literal($.value))
            default: return pt.au($[0])
        }
    })
    )
)

export const Qualified_Name: Qualified_Name = ($) => sh.ph.composed(pt.literal.nested_list([
    pt.decide.optional(
        $['namespace prefix'],
        ($) => pt.literal.list([
            sh.ph.literal($),
            sh.ph.literal(":"),
        ]),
        () => pt.literal.list([])
    ),
    [
        sh.ph.literal($['local name']),
    ]
]))

export const Node: Node = ($) => pt.decide.state($, ($) => {
    switch ($[0]) {
        case 'cdata': return pt.ss($, ($) => sh.ph.composed([
            sh.ph.literal("<![CDATA["),
            sh.ph.literal($),
            sh.ph.literal("]]>")
        ]))
        case 'comment': return pt.ss($, ($) => sh.ph.composed([
            sh.ph.literal("<!--"),
            sh.ph.literal($),
            sh.ph.literal("-->")
        ]))
        case 'element': return pt.ss($, ($) => sh.ph.composed([
            Element($)
        ]))
        case 'processing instruction': return pt.ss($, ($) => sh.ph.composed([
            sh.ph.literal("<?"),
            sh.ph.literal($.target),
            sh.ph.literal(" "),
            sh.ph.literal($.data),
            sh.ph.literal("?>")
        ]))
        default: return pt.au($[0])
    }
})