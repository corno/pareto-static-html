
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/xml/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

export const Document: t_signatures.Document = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "doc type": p_change_context(
            $['doc type'],
            ($) => ['optional', p_decide_optional(
                $,
                ($): t_out.Value.optional => ['set', ['group', ['verbose', p_.literal.dictionary(
                    {
                        "name": p_change_context(
                            $['name'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                    },
                )]]],
                () => ['not set', null],
            )],
        ),
        "root": p_change_context(
            $['root'],
            ($) => Element(
                $,
            ),
        ),
    },
)]]

export const Element: t_signatures.Element = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "name": p_change_context(
            $['name'],
            ($) => Qualified_Name(
                $,
            ),
        ),
        "attributes": p_change_context(
            $['attributes'],
            ($) => ['list', p_.from.list($,
            ).map(
                ($) => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "name": p_change_context(
                            $['name'],
                            ($) => Qualified_Name(
                                $,
                            ),
                        ),
                        "value": p_change_context(
                            $['value'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                    },
                )]],
            )],
        ),
        "content type": p_change_context(
            $['content type'],
            ($) => ['state', p_decide_state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'empty':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'empty',
                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                        {},
                                    )]],
                                }),
                            )
                        case 'text only':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'text only',
                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                        {
                                            "value": p_change_context(
                                                $['value'],
                                                ($) => ['text', {
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                }],
                                            ),
                                        },
                                    )]],
                                }),
                            )
                        case 'mixed':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'mixed',
                                    'value': Mixed_Content(
                                        $,
                                    ),
                                }),
                            )
                        case 'nodes only':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'nodes only',
                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                        {
                                            "children": p_change_context(
                                                $['children'],
                                                ($) => ['list', p_.from.list($,
                                                ).map(
                                                    ($) => Node(
                                                        $,
                                                    ),
                                                )],
                                            ),
                                        },
                                    )]],
                                }),
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]

export const Mixed_Content: t_signatures.Mixed_Content = ($) => ['list', p_.from.list($,
).map(
    ($) => ['state', p_decide_state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'node':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'node',
                            'value': Node(
                                $,
                            ),
                        }),
                    )
                case 'text':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'text',
                            'value': ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "value": p_change_context(
                                        $['value'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    ),
                                },
                            )]],
                        }),
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    )],
)]

export const Qualified_Name: t_signatures.Qualified_Name = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "namespace prefix": p_change_context(
            $['namespace prefix'],
            ($) => ['optional', p_decide_optional(
                $,
                ($): t_out.Value.optional => ['set', ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }]],
                () => ['not set', null],
            )],
        ),
        "local name": p_change_context(
            $['local name'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
    },
)]]

export const Node: t_signatures.Node = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'element':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'element',
                        'value': Element(
                            $,
                        ),
                    }),
                )
            case 'comment':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'comment',
                        'value': ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }],
                    }),
                )
            case 'cdata':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'cdata',
                        'value': ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }],
                    }),
                )
            case 'processing instruction':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'processing instruction',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "target": p_change_context(
                                    $['target'],
                                    ($) => ['text', {
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    }],
                                ),
                                "data": p_change_context(
                                    $['data'],
                                    ($) => ['text', {
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    }],
                                ),
                            },
                        )]],
                    }),
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)]
