
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/static-html/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_xml from "../../xml/transformers/astn_sealed_target"

export const Document: t_signatures.Document = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "css": p_change_context(
            $['css'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
        "root": p_change_context(
            $['root'],
            ($) => Flow_Element(
                $,
            ),
        ),
    },
)]]

export const Flow_Element: t_signatures.Flow_Element = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'div':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'div',
                        'value': Flow_Content(
                            $,
                        ),
                    }),
                )
            case 'dimensioned div':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'dimensioned div',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "width": p_change_context(
                                    $['width'],
                                    ($) => ['optional', p_decide_optional(
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
                                "height": p_change_context(
                                    $['height'],
                                    ($) => ['optional', p_decide_optional(
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
                                "content": p_change_context(
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
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'classified div',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "classes": p_change_context(
                                    $['classes'],
                                    ($) => Classes(
                                        $,
                                    ),
                                ),
                                "content": p_change_context(
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
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'table',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "classes": p_change_context(
                                    $['classes'],
                                    ($) => Classes(
                                        $,
                                    ),
                                ),
                                "sections": p_change_context(
                                    $['sections'],
                                    ($) => ['list', p_.from.list($,
                                    ).map(
                                        ($) => ['group', ['verbose', p_.literal.dictionary(
                                            {
                                                "classes": p_change_context(
                                                    $['classes'],
                                                    ($) => Classes(
                                                        $,
                                                    ),
                                                ),
                                                "type": p_change_context(
                                                    $['type'],
                                                    ($) => ['state', p_decide_state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'header':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'header',
                                                                            'value': ['nothing', null],
                                                                        }),
                                                                    )
                                                                case 'body':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'body',
                                                                            'value': ['nothing', null],
                                                                        }),
                                                                    )
                                                                case 'footer':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'footer',
                                                                            'value': ['nothing', null],
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
                                                "rows": p_change_context(
                                                    $['rows'],
                                                    ($) => ['list', p_.from.list($,
                                                    ).map(
                                                        ($) => ['group', ['verbose', p_.literal.dictionary(
                                                            {
                                                                "classes": p_change_context(
                                                                    $['classes'],
                                                                    ($) => Classes(
                                                                        $,
                                                                    ),
                                                                ),
                                                                "height": p_change_context(
                                                                    $['height'],
                                                                    ($) => ['optional', p_decide_optional(
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
                                                                "cells": p_change_context(
                                                                    $['cells'],
                                                                    ($) => ['list', p_.from.list($,
                                                                    ).map(
                                                                        ($) => ['group', ['verbose', p_.literal.dictionary(
                                                                            {
                                                                                "type": p_change_context(
                                                                                    $['type'],
                                                                                    ($) => ['state', p_decide_state(
                                                                                        $,
                                                                                        ($): t_out.Value.state => {
                                                                                            switch ($[0]) {
                                                                                                case 'th':
                                                                                                    return p_.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'th',
                                                                                                            'value': ['nothing', null],
                                                                                                        }),
                                                                                                    )
                                                                                                case 'td':
                                                                                                    return p_.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'td',
                                                                                                            'value': ['nothing', null],
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
                                                                                "colspan": p_change_context(
                                                                                    $['colspan'],
                                                                                    ($) => ['optional', p_decide_optional(
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
                                                                                "classes": p_change_context(
                                                                                    $['classes'],
                                                                                    ($) => Classes(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "content": p_change_context(
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
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'span',
                        'value': Phrasing_Content(
                            $,
                        ),
                    }),
                )
            case 'label':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'label',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "classes": p_change_context(
                                    $['classes'],
                                    ($) => Classes(
                                        $,
                                    ),
                                ),
                                "text": p_change_context(
                                    $['text'],
                                    ($) => ['text', {
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    }],
                                ),
                                "content": p_change_context(
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
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'img',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "classes": p_change_context(
                                    $['classes'],
                                    ($) => Classes(
                                        $,
                                    ),
                                ),
                                "src": p_change_context(
                                    $['src'],
                                    ($) => ['text', {
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    }],
                                ),
                                "alt": p_change_context(
                                    $['alt'],
                                    ($) => ['text', {
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    }],
                                ),
                                "width": p_change_context(
                                    $['width'],
                                    ($) => ['optional', p_decide_optional(
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
                                "height": p_change_context(
                                    $['height'],
                                    ($) => ['optional', p_decide_optional(
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
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'svg',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "classes": p_change_context(
                                    $['classes'],
                                    ($) => Classes(
                                        $,
                                    ),
                                ),
                                "content": p_change_context(
                                    $['content'],
                                    ($) => v_external_xml.Mixed_Content(
                                        $,
                                    ),
                                ),
                                "width": p_change_context(
                                    $['width'],
                                    ($) => ['optional', p_decide_optional(
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
                                "height": p_change_context(
                                    $['height'],
                                    ($) => ['optional', p_decide_optional(
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
                return p_.au(
                    $[0],
                )
        }
    },
)]

export const Flow_Content: t_signatures.Flow_Content = ($) => ['list', p_.from.list($,
).map(
    ($) => Flow_Element(
        $,
    ),
)]

export const Classes: t_signatures.Classes = ($) => ['list', p_.from.list($,
).map(
    ($) => ['text', {
        'delimiter': ['quote', null],
        'value': $,
    }],
)]

export const Phrasing_Content: t_signatures.Phrasing_Content = ($) => ['list', p_.from.list($,
).map(
    ($) => Phrasing_Element(
        $,
    ),
)]

export const Phrasing_Element: t_signatures.Phrasing_Element = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'span':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'span',
                        'value': Phrasing_Content(
                            $,
                        ),
                    }),
                )
            case 'classified span':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'classified span',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "classes": p_change_context(
                                    $['classes'],
                                    ($) => Classes(
                                        $,
                                    ),
                                ),
                                "content": p_change_context(
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
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'titled span',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "title": p_change_context(
                                    $['title'],
                                    ($) => ['text', {
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    }],
                                ),
                                "content": p_change_context(
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
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'a',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "text": p_change_context(
                                    $['text'],
                                    ($) => ['text', {
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    }],
                                ),
                                "href": p_change_context(
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
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'p',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "text": p_change_context(
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
                return p_.au(
                    $[0],
                )
        }
    },
)]
