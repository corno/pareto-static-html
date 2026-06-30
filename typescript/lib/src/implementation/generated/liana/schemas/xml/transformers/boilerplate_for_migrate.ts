
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/xml/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/xml/data"

export const Document: t_signatures.Document = ($) => ({
    'doc type': p_change_context(
        $['doc type'],
        ($) => p_.from.optional($,
        ).map(
            ($) => ({
                'name': p_change_context(
                    $['name'],
                    ($) => $,
                ),
            }),
        ),
    ),
    'root': p_change_context(
        $['root'],
        ($) => Element(
            $,
        ),
    ),
})

export const Element: t_signatures.Element = ($) => ({
    'name': p_change_context(
        $['name'],
        ($) => Qualified_Name(
            $,
        ),
    ),
    'attributes': p_change_context(
        $['attributes'],
        ($) => p_.from.list($,
        ).map(
            ($) => ({
                'name': p_change_context(
                    $['name'],
                    ($) => Qualified_Name(
                        $,
                    ),
                ),
                'value': p_change_context(
                    $['value'],
                    ($) => $,
                ),
            }),
        ),
    ),
    'content type': p_change_context(
        $['content type'],
        ($) => p_decide_state(
            $,
            ($): t_out.Element.content_type => {
                switch ($[0]) {
                    case 'empty':
                        return p_.option(
                            $,
                            ($) => ['empty', p_.literal.nothing()],
                        )
                    case 'text only':
                        return p_.option(
                            $,
                            ($) => ['text only', {
                                'value': p_change_context(
                                    $['value'],
                                    ($) => $,
                                ),
                            }],
                        )
                    case 'mixed':
                        return p_.option(
                            $,
                            ($) => ['mixed', Mixed_Content(
                                $,
                            )],
                        )
                    case 'nodes only':
                        return p_.option(
                            $,
                            ($) => ['nodes only', {
                                'children': p_change_context(
                                    $['children'],
                                    ($) => p_.from.list($,
                                    ).map(
                                        ($) => Node(
                                            $,
                                        ),
                                    ),
                                ),
                            }],
                        )
                    default:
                        return p_.au(
                            $[0],
                        )
                }
            },
        ),
    ),
})

export const Mixed_Content: t_signatures.Mixed_Content = ($) => p_.from.list($,
).map(
    ($) => p_decide_state(
        $,
        ($): t_out.Mixed_Content.L => {
            switch ($[0]) {
                case 'node':
                    return p_.option(
                        $,
                        ($) => ['node', Node(
                            $,
                        )],
                    )
                case 'text':
                    return p_.option(
                        $,
                        ($) => ['text', {
                            'value': p_change_context(
                                $['value'],
                                ($) => $,
                            ),
                        }],
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    ),
)

export const Qualified_Name: t_signatures.Qualified_Name = ($) => ({
    'namespace prefix': p_change_context(
        $['namespace prefix'],
        ($) => p_.from.optional($,
        ).map(
            ($) => $,
        ),
    ),
    'local name': p_change_context(
        $['local name'],
        ($) => $,
    ),
})

export const Node: t_signatures.Node = ($) => p_decide_state(
    $,
    ($): t_out.Node => {
        switch ($[0]) {
            case 'element':
                return p_.option(
                    $,
                    ($) => ['element', Element(
                        $,
                    )],
                )
            case 'comment':
                return p_.option(
                    $,
                    ($) => ['comment', $],
                )
            case 'cdata':
                return p_.option(
                    $,
                    ($) => ['cdata', $],
                )
            case 'processing instruction':
                return p_.option(
                    $,
                    ($) => ['processing instruction', {
                        'target': p_change_context(
                            $['target'],
                            ($) => $,
                        ),
                        'data': p_change_context(
                            $['data'],
                            ($) => $,
                        ),
                    }],
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)
