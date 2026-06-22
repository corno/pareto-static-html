
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/static-html/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/static-html/data"

import * as v_xml from "../../xml/transformers/boilerplate_for_migrate"

export const Document: t_signatures.Document = ($) => ({
    'css': p_change_context(
        $['css'],
        ($) => $,
    ),
    'root': p_change_context(
        $['root'],
        ($) => Flow_Element(
            $,
        ),
    ),
})

export const Flow_Element: t_signatures.Flow_Element = ($) => p_decide_state(
    $,
    ($): t_out.Flow_Element => {
        switch ($[0]) {
            case 'div':
                return p_.ss(
                    $,
                    ($) => ['div', Flow_Content(
                        $,
                    )],
                )
            case 'dimensioned div':
                return p_.ss(
                    $,
                    ($) => ['dimensioned div', {
                        'width': p_change_context(
                            $['width'],
                            ($) => p_.from.optional($,
                            ).map(
                                ($) => $,
                            ),
                        ),
                        'height': p_change_context(
                            $['height'],
                            ($) => p_.from.optional($,
                            ).map(
                                ($) => $,
                            ),
                        ),
                        'content': p_change_context(
                            $['content'],
                            ($) => Flow_Content(
                                $,
                            ),
                        ),
                    }],
                )
            case 'classified div':
                return p_.ss(
                    $,
                    ($) => ['classified div', {
                        'classes': p_change_context(
                            $['classes'],
                            ($) => Classes(
                                $,
                            ),
                        ),
                        'content': p_change_context(
                            $['content'],
                            ($) => Flow_Content(
                                $,
                            ),
                        ),
                    }],
                )
            case 'table':
                return p_.ss(
                    $,
                    ($) => ['table', {
                        'classes': p_change_context(
                            $['classes'],
                            ($) => Classes(
                                $,
                            ),
                        ),
                        'sections': p_change_context(
                            $['sections'],
                            ($) => p_.from.list($,
                            ).map(
                                ($) => ({
                                    'classes': p_change_context(
                                        $['classes'],
                                        ($) => Classes(
                                            $,
                                        ),
                                    ),
                                    'type': p_change_context(
                                        $['type'],
                                        ($) => p_decide_state(
                                            $,
                                            ($): t_out.Flow_Element.table.sections.L.type_ => {
                                                switch ($[0]) {
                                                    case 'header':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ['header', null],
                                                        )
                                                    case 'body':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ['body', null],
                                                        )
                                                    case 'footer':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ['footer', null],
                                                        )
                                                    default:
                                                        return p_.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                    'rows': p_change_context(
                                        $['rows'],
                                        ($) => p_.from.list($,
                                        ).map(
                                            ($) => ({
                                                'classes': p_change_context(
                                                    $['classes'],
                                                    ($) => Classes(
                                                        $,
                                                    ),
                                                ),
                                                'height': p_change_context(
                                                    $['height'],
                                                    ($) => p_.from.optional($,
                                                    ).map(
                                                        ($) => $,
                                                    ),
                                                ),
                                                'cells': p_change_context(
                                                    $['cells'],
                                                    ($) => p_.from.list($,
                                                    ).map(
                                                        ($) => ({
                                                            'type': p_change_context(
                                                                $['type'],
                                                                ($) => p_decide_state(
                                                                    $,
                                                                    ($): t_out.Flow_Element.table.sections.L.rows.L.cells.L.type_ => {
                                                                        switch ($[0]) {
                                                                            case 'th':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['th', null],
                                                                                )
                                                                            case 'td':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['td', null],
                                                                                )
                                                                            default:
                                                                                return p_.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            ),
                                                            'colspan': p_change_context(
                                                                $['colspan'],
                                                                ($) => p_.from.optional($,
                                                                ).map(
                                                                    ($) => $,
                                                                ),
                                                            ),
                                                            'classes': p_change_context(
                                                                $['classes'],
                                                                ($) => Classes(
                                                                    $,
                                                                ),
                                                            ),
                                                            'content': p_change_context(
                                                                $['content'],
                                                                ($) => Flow_Content(
                                                                    $,
                                                                ),
                                                            ),
                                                        }),
                                                    ),
                                                ),
                                            }),
                                        ),
                                    ),
                                }),
                            ),
                        ),
                    }],
                )
            case 'span':
                return p_.ss(
                    $,
                    ($) => ['span', Phrasing_Content(
                        $,
                    )],
                )
            case 'label':
                return p_.ss(
                    $,
                    ($) => ['label', {
                        'classes': p_change_context(
                            $['classes'],
                            ($) => Classes(
                                $,
                            ),
                        ),
                        'text': p_change_context(
                            $['text'],
                            ($) => $,
                        ),
                        'content': p_change_context(
                            $['content'],
                            ($) => Flow_Content(
                                $,
                            ),
                        ),
                    }],
                )
            case 'img':
                return p_.ss(
                    $,
                    ($) => ['img', {
                        'classes': p_change_context(
                            $['classes'],
                            ($) => Classes(
                                $,
                            ),
                        ),
                        'src': p_change_context(
                            $['src'],
                            ($) => $,
                        ),
                        'alt': p_change_context(
                            $['alt'],
                            ($) => $,
                        ),
                        'width': p_change_context(
                            $['width'],
                            ($) => p_.from.optional($,
                            ).map(
                                ($) => $,
                            ),
                        ),
                        'height': p_change_context(
                            $['height'],
                            ($) => p_.from.optional($,
                            ).map(
                                ($) => $,
                            ),
                        ),
                    }],
                )
            case 'svg':
                return p_.ss(
                    $,
                    ($) => ['svg', {
                        'classes': p_change_context(
                            $['classes'],
                            ($) => Classes(
                                $,
                            ),
                        ),
                        'content': p_change_context(
                            $['content'],
                            ($) => v_xml.Mixed_Content(
                                $,
                            ),
                        ),
                        'width': p_change_context(
                            $['width'],
                            ($) => p_.from.optional($,
                            ).map(
                                ($) => $,
                            ),
                        ),
                        'height': p_change_context(
                            $['height'],
                            ($) => p_.from.optional($,
                            ).map(
                                ($) => $,
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
)

export const Flow_Content: t_signatures.Flow_Content = ($) => p_.from.list($,
).map(
    ($) => Flow_Element(
        $,
    ),
)

export const Classes: t_signatures.Classes = ($) => p_.from.list($,
).map(
    ($) => $,
)

export const Phrasing_Content: t_signatures.Phrasing_Content = ($) => p_.from.list($,
).map(
    ($) => Phrasing_Element(
        $,
    ),
)

export const Phrasing_Element: t_signatures.Phrasing_Element = ($) => p_decide_state(
    $,
    ($): t_out.Phrasing_Element => {
        switch ($[0]) {
            case 'span':
                return p_.ss(
                    $,
                    ($) => ['span', Phrasing_Content(
                        $,
                    )],
                )
            case 'classified span':
                return p_.ss(
                    $,
                    ($) => ['classified span', {
                        'classes': p_change_context(
                            $['classes'],
                            ($) => Classes(
                                $,
                            ),
                        ),
                        'content': p_change_context(
                            $['content'],
                            ($) => Phrasing_Content(
                                $,
                            ),
                        ),
                    }],
                )
            case 'titled span':
                return p_.ss(
                    $,
                    ($) => ['titled span', {
                        'title': p_change_context(
                            $['title'],
                            ($) => $,
                        ),
                        'content': p_change_context(
                            $['content'],
                            ($) => Phrasing_Content(
                                $,
                            ),
                        ),
                    }],
                )
            case 'a':
                return p_.ss(
                    $,
                    ($) => ['a', {
                        'text': p_change_context(
                            $['text'],
                            ($) => $,
                        ),
                        'href': p_change_context(
                            $['href'],
                            ($) => $,
                        ),
                    }],
                )
            case 'p':
                return p_.ss(
                    $,
                    ($) => ['p', {
                        'text': p_change_context(
                            $['text'],
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
