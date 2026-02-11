import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"
import * as d_in from "../../../../../../interface/generated/liana/schemas/xml/data"

import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export type Document = _pi.Transformer<d_in.Document, d_out.Paragraph>
export type Element = _pi.Transformer<d_in.Element, d_out.Phrase>
export type Qualified_Name = _pi.Transformer<d_in.Qualified_Name, d_out.Phrase>
export type Node = _pi.Transformer<d_in.Node, d_out.Phrase>
export type Mixed_Content = _pi.Transformer<d_in.Mixed_Content, d_out.Phrase>

export const Document: Document = ($) => sh.pg.sentences(_p.list.nested_literal_old([

    _p.decide.optional(
        $['doc type'],
        ($) => [
            sh.sentence([
                sh.ph.literal("<!DOCTYPE "),
                sh.ph.literal($.name),
                sh.ph.literal(">")
            ])
        ],
        () => [

        ]
    ),
    [
        sh.sentence([

            Element($['root'])

        ])
    ]
]))

export const Element: Element = ($) => sh.ph.composed(_p.list.nested_literal_old([
    [
        sh.ph.literal("<"),
        Qualified_Name($.name),
    ],
    _p.list.from.list(
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
        _p.decide.state($['content type'], ($) => {
            switch ($[0]) {
                case 'empty': return _p.ss($, ($) => sh.ph.nothing())
                case 'mixed': return _p.ss($, ($) => Mixed_Content($))
                case 'nodes only': return _p.ss($, ($) => sh.ph.indent(
                    sh.pg.sentences(_p.list.from.list(
                        $.children
                    ).map(($) => _p.decide.state($, ($) => {
                        switch ($[0]) {
                            case 'element': return _p.ss($, ($) => sh.sentence([
                                Element($)
                            ]))
                            default: return _p.au($[0])
                        }
                    }))
                    )))
                case 'text only': return _p.ss($, ($) => sh.ph.literal($.value))
                default: return _p.au($[0])
            }
        }),
        sh.ph.literal("</"),
        Qualified_Name($.name),
        sh.ph.literal(">")
    ],
]))

export const Mixed_Content: Mixed_Content = ($) => sh.ph.composed(
    _p.list.from.list(
        $
    ).map(($) => _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'node': return _p.ss($, ($) => Node($))
            case 'text': return _p.ss($, ($) => sh.ph.literal($.value))
            default: return _p.au($[0])
        }
    })
    )
)

export const Qualified_Name: Qualified_Name = ($) => sh.ph.composed(_p.list.nested_literal_old([
    _p.decide.optional(
        $['namespace prefix'],
        ($) => [
            sh.ph.literal($),
            sh.ph.literal(":"),
        ],
        () => []
    ),
    [
        sh.ph.literal($['local name']),
    ]
]))

export const Node: Node = ($) => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'element': return _p.ss($, ($) => Element($))
        default: return _p.au($[0])
    }
})