
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/xml/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

export const Document: t_signatures.Document = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "doc type": _p_change_context(
            $['doc type'],
            ($) => ['optional', _p.decide.optional(
                $,
                ($): t_out.Value.optional => ['set', ['group', ['verbose', _p.dictionary.literal(
                    {
                        "name": _p_change_context(
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
        "root": _p_change_context(
            $['root'],
            ($) => Element(
                $,
            ),
        ),
    },
)]]

export const Element: t_signatures.Element = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "name": _p_change_context(
            $['name'],
            ($) => Qualified_Name(
                $,
            ),
        ),
        "attributes": _p_change_context(
            $['attributes'],
            ($) => ['list', _p.list.from.list(
                $,
            ).map(
                ($) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "name": _p_change_context(
                            $['name'],
                            ($) => Qualified_Name(
                                $,
                            ),
                        ),
                        "value": _p_change_context(
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
        "content type": _p_change_context(
            $['content type'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'empty':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'empty',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {},
                                    )]],
                                }),
                            )
                        case 'text only':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'text only',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "value": _p_change_context(
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
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'mixed',
                                    'value': Mixed_Content(
                                        $,
                                    ),
                                }),
                            )
                        case 'nodes only':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'nodes only',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "children": _p_change_context(
                                                $['children'],
                                                ($) => ['list', _p.list.from.list(
                                                    $,
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
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]

export const Mixed_Content: t_signatures.Mixed_Content = ($) => ['list', _p.list.from.list(
    $,
).map(
    ($) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'node':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'node',
                            'value': Node(
                                $,
                            ),
                        }),
                    )
                case 'text':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'text',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "value": _p_change_context(
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
                    return _p.au(
                        $[0],
                    )
            }
        },
    )],
)]

export const Qualified_Name: t_signatures.Qualified_Name = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "namespace prefix": _p_change_context(
            $['namespace prefix'],
            ($) => ['optional', _p.decide.optional(
                $,
                ($): t_out.Value.optional => ['set', ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }]],
                () => ['not set', null],
            )],
        ),
        "local name": _p_change_context(
            $['local name'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
    },
)]]

export const Node: t_signatures.Node = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'element':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'element',
                        'value': Element(
                            $,
                        ),
                    }),
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)]
