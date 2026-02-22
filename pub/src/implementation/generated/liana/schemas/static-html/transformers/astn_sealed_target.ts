
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/static-html/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_xml from "../../xml/transformers/astn_sealed_target"

export const Document: t_signatures.Document = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "css": _p_change_context(
            $['css'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
        "root": _p_change_context(
            $['root'],
            ($) => Flow_Content(
                $,
            ),
        ),
    },
)]]

export const Flow_Content: t_signatures.Flow_Content = ($) => ['list', _p.list.from.list(
    $,
).map(
    ($) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'div':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'div',
                            'value': Flow_Content(
                                $,
                            ),
                        }),
                    )
                case 'dimensioned div':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'dimensioned div',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "width": _p_change_context(
                                        $['width'],
                                        ($) => ['optional', _p.decide.optional(
                                            $,
                                            ($): t_out.Value.optional => ['set', ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_primitives_to_text.decimal(
                                                    $,
                                                ),
                                            }]],
                                            () => ['not set', null],
                                        )],
                                    ),
                                    "height": _p_change_context(
                                        $['height'],
                                        ($) => ['optional', _p.decide.optional(
                                            $,
                                            ($): t_out.Value.optional => ['set', ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_primitives_to_text.decimal(
                                                    $,
                                                ),
                                            }]],
                                            () => ['not set', null],
                                        )],
                                    ),
                                    "content": _p_change_context(
                                        $['content'],
                                        ($) => Flow_Content(
                                            $,
                                        ),
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'classified div':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'classified div',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "classes": _p_change_context(
                                        $['classes'],
                                        ($) => Classes(
                                            $,
                                        ),
                                    ),
                                    "content": _p_change_context(
                                        $['content'],
                                        ($) => Flow_Content(
                                            $,
                                        ),
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'table':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'table',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "classes": _p_change_context(
                                        $['classes'],
                                        ($) => Classes(
                                            $,
                                        ),
                                    ),
                                    "sections": _p_change_context(
                                        $['sections'],
                                        ($) => ['list', _p.list.from.list(
                                            $,
                                        ).map(
                                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                                {
                                                    "classes": _p_change_context(
                                                        $['classes'],
                                                        ($) => Classes(
                                                            $,
                                                        ),
                                                    ),
                                                    "type": _p_change_context(
                                                        $['type'],
                                                        ($) => ['state', _p.decide.state(
                                                            $,
                                                            ($): t_out.Value.state => {
                                                                switch ($[0]) {
                                                                    case 'header':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ({
                                                                                'option': 'header',
                                                                                'value': ['nothing', null],
                                                                            }),
                                                                        )
                                                                    case 'body':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ({
                                                                                'option': 'body',
                                                                                'value': ['nothing', null],
                                                                            }),
                                                                        )
                                                                    case 'footer':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ({
                                                                                'option': 'footer',
                                                                                'value': ['nothing', null],
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
                                                    "rows": _p_change_context(
                                                        $['rows'],
                                                        ($) => ['list', _p.list.from.list(
                                                            $,
                                                        ).map(
                                                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    "classes": _p_change_context(
                                                                        $['classes'],
                                                                        ($) => Classes(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "type": _p_change_context(
                                                                        $['type'],
                                                                        ($) => ['state', _p.decide.state(
                                                                            $,
                                                                            ($): t_out.Value.state => {
                                                                                switch ($[0]) {
                                                                                    case 'th':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'th',
                                                                                                'value': ['nothing', null],
                                                                                            }),
                                                                                        )
                                                                                    case 'td':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'td',
                                                                                                'value': ['nothing', null],
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
                                                                    "height": _p_change_context(
                                                                        $['height'],
                                                                        ($) => ['optional', _p.decide.optional(
                                                                            $,
                                                                            ($): t_out.Value.optional => ['set', ['text', {
                                                                                'delimiter': ['none', null],
                                                                                'value': v_primitives_to_text.decimal(
                                                                                    $,
                                                                                ),
                                                                            }]],
                                                                            () => ['not set', null],
                                                                        )],
                                                                    ),
                                                                    "cells": _p_change_context(
                                                                        $['cells'],
                                                                        ($) => ['list', _p.list.from.list(
                                                                            $,
                                                                        ).map(
                                                                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                    "classes": _p_change_context(
                                                                                        $['classes'],
                                                                                        ($) => Classes(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "content": _p_change_context(
                                                                                        $['content'],
                                                                                        ($) => Flow_Content(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                },
                                                                            )]],
                                                                        )],
                                                                    ),
                                                                },
                                                            )]],
                                                        )],
                                                    ),
                                                },
                                            )]],
                                        )],
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'span':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'span',
                            'value': Phrasing_Content(
                                $,
                            ),
                        }),
                    )
                case 'label':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'label',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "classes": _p_change_context(
                                        $['classes'],
                                        ($) => Classes(
                                            $,
                                        ),
                                    ),
                                    "text": _p_change_context(
                                        $['text'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    ),
                                    "content": _p_change_context(
                                        $['content'],
                                        ($) => Flow_Content(
                                            $,
                                        ),
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'img':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'img',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "classes": _p_change_context(
                                        $['classes'],
                                        ($) => Classes(
                                            $,
                                        ),
                                    ),
                                    "src": _p_change_context(
                                        $['src'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    ),
                                    "alt": _p_change_context(
                                        $['alt'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    ),
                                    "width": _p_change_context(
                                        $['width'],
                                        ($) => ['optional', _p.decide.optional(
                                            $,
                                            ($): t_out.Value.optional => ['set', ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_primitives_to_text.decimal(
                                                    $,
                                                ),
                                            }]],
                                            () => ['not set', null],
                                        )],
                                    ),
                                    "height": _p_change_context(
                                        $['height'],
                                        ($) => ['optional', _p.decide.optional(
                                            $,
                                            ($): t_out.Value.optional => ['set', ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_primitives_to_text.decimal(
                                                    $,
                                                ),
                                            }]],
                                            () => ['not set', null],
                                        )],
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'svg':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'svg',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "classes": _p_change_context(
                                        $['classes'],
                                        ($) => Classes(
                                            $,
                                        ),
                                    ),
                                    "content": _p_change_context(
                                        $['content'],
                                        ($) => v_external_xml.Mixed_Content(
                                            $,
                                        ),
                                    ),
                                    "width": _p_change_context(
                                        $['width'],
                                        ($) => ['optional', _p.decide.optional(
                                            $,
                                            ($): t_out.Value.optional => ['set', ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_primitives_to_text.decimal(
                                                    $,
                                                ),
                                            }]],
                                            () => ['not set', null],
                                        )],
                                    ),
                                    "height": _p_change_context(
                                        $['height'],
                                        ($) => ['optional', _p.decide.optional(
                                            $,
                                            ($): t_out.Value.optional => ['set', ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_primitives_to_text.decimal(
                                                    $,
                                                ),
                                            }]],
                                            () => ['not set', null],
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
)]

export const Classes: t_signatures.Classes = ($) => ['list', _p.list.from.list(
    $,
).map(
    ($) => ['text', {
        'delimiter': ['quote', null],
        'value': $,
    }],
)]

export const Phrasing_Content: t_signatures.Phrasing_Content = ($) => ['list', _p.list.from.list(
    $,
).map(
    ($) => Phrasing_Element(
        $,
    ),
)]

export const Phrasing_Element: t_signatures.Phrasing_Element = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'span':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'span',
                        'value': Phrasing_Content(
                            $,
                        ),
                    }),
                )
            case 'classified span':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'classified span',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                "classes": _p_change_context(
                                    $['classes'],
                                    ($) => Classes(
                                        $,
                                    ),
                                ),
                                "content": _p_change_context(
                                    $['content'],
                                    ($) => Phrasing_Content(
                                        $,
                                    ),
                                ),
                            },
                        )]],
                    }),
                )
            case 'titled span':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'titled span',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                "title": _p_change_context(
                                    $['title'],
                                    ($) => ['text', {
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    }],
                                ),
                                "content": _p_change_context(
                                    $['content'],
                                    ($) => Phrasing_Content(
                                        $,
                                    ),
                                ),
                            },
                        )]],
                    }),
                )
            case 'a':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'a',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                "text": _p_change_context(
                                    $['text'],
                                    ($) => ['text', {
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    }],
                                ),
                                "href": _p_change_context(
                                    $['href'],
                                    ($) => ['text', {
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    }],
                                ),
                            },
                        )]],
                    }),
                )
            case 'p':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'p',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                "text": _p_change_context(
                                    $['text'],
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
)]
