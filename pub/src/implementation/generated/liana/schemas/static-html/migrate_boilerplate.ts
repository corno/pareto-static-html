
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/static-html/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/static-html/data"

export const Classes: t_signatures.Classes = ($) => $.__l_map(
    ($) => $
)

export const Phrasing_Content: t_signatures.Phrasing_Content = ($) => $.__l_map(
    ($) => _p.decide.state(
        $,
        ($): t_out.Phrasing_Content.L => {
            switch ($[0]) {
                case 'span':
                    return _p.ss(
                        $,
                        ($) => ['span', Phrasing_Content(
                            $
                        )]
                    )
                case 'classified span':
                    return _p.ss(
                        $,
                        ($) => ['classified span', {
                            'classes': _p_cc(
                                $['classes'],
                                ($) => Classes(
                                    $
                                )
                            ),
                            'content': _p_cc(
                                $['content'],
                                ($) => Phrasing_Content(
                                    $
                                )
                            ),
                        }]
                    )
                case 'titled span':
                    return _p.ss(
                        $,
                        ($) => ['titled span', {
                            'title': _p_cc(
                                $['title'],
                                ($) => $
                            ),
                            'content': _p_cc(
                                $['content'],
                                ($) => Phrasing_Content(
                                    $
                                )
                            ),
                        }]
                    )
                case 'a':
                    return _p.ss(
                        $,
                        ($) => ['a', {
                            'text': _p_cc(
                                $['text'],
                                ($) => $
                            ),
                            'href': _p_cc(
                                $['href'],
                                ($) => $
                            ),
                        }]
                    )
                case 'p':
                    return _p.ss(
                        $,
                        ($) => ['p', {
                            'text': _p_cc(
                                $['text'],
                                ($) => $
                            ),
                        }]
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    )
)

export const Flow_Content: t_signatures.Flow_Content = ($) => $.__l_map(
    ($) => _p.decide.state(
        $,
        ($): t_out.Flow_Content.L => {
            switch ($[0]) {
                case 'div':
                    return _p.ss(
                        $,
                        ($) => ['div', Flow_Content(
                            $
                        )]
                    )
                case 'dimensioned div':
                    return _p.ss(
                        $,
                        ($) => ['dimensioned div', {
                            'width': _p_cc(
                                $['width'],
                                ($) => $.__o_map(
                                    ($) => $
                                )
                            ),
                            'height': _p_cc(
                                $['height'],
                                ($) => $.__o_map(
                                    ($) => $
                                )
                            ),
                            'content': _p_cc(
                                $['content'],
                                ($) => Flow_Content(
                                    $
                                )
                            ),
                        }]
                    )
                case 'classified div':
                    return _p.ss(
                        $,
                        ($) => ['classified div', {
                            'classes': _p_cc(
                                $['classes'],
                                ($) => Classes(
                                    $
                                )
                            ),
                            'content': _p_cc(
                                $['content'],
                                ($) => Flow_Content(
                                    $
                                )
                            ),
                        }]
                    )
                case 'table':
                    return _p.ss(
                        $,
                        ($) => ['table', {
                            'classes': _p_cc(
                                $['classes'],
                                ($) => Classes(
                                    $
                                )
                            ),
                            'sections': _p_cc(
                                $['sections'],
                                ($) => $.__l_map(
                                    ($) => ({
                                        'classes': _p_cc(
                                            $['classes'],
                                            ($) => Classes(
                                                $
                                            )
                                        ),
                                        'type': _p_cc(
                                            $['type'],
                                            ($) => _p.decide.state(
                                                $,
                                                ($): t_out.Flow_Content.L.table.sections.L.type_ => {
                                                    switch ($[0]) {
                                                        case 'header':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['header', null]
                                                            )
                                                        case 'body':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['body', null]
                                                            )
                                                        case 'footer':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['footer', null]
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0]
                                                            )
                                                    }
                                                }
                                            )
                                        ),
                                        'rows': _p_cc(
                                            $['rows'],
                                            ($) => $.__l_map(
                                                ($) => ({
                                                    'classes': _p_cc(
                                                        $['classes'],
                                                        ($) => Classes(
                                                            $
                                                        )
                                                    ),
                                                    'type': _p_cc(
                                                        $['type'],
                                                        ($) => _p.decide.state(
                                                            $,
                                                            ($): t_out.Flow_Content.L.table.sections.L.rows.L.type_ => {
                                                                switch ($[0]) {
                                                                    case 'th':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['th', null]
                                                                        )
                                                                    case 'td':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['td', null]
                                                                        )
                                                                    default:
                                                                        return _p.au(
                                                                            $[0]
                                                                        )
                                                                }
                                                            }
                                                        )
                                                    ),
                                                    'height': _p_cc(
                                                        $['height'],
                                                        ($) => $.__o_map(
                                                            ($) => $
                                                        )
                                                    ),
                                                    'cells': _p_cc(
                                                        $['cells'],
                                                        ($) => $.__l_map(
                                                            ($) => ({
                                                                'classes': _p_cc(
                                                                    $['classes'],
                                                                    ($) => Classes(
                                                                        $
                                                                    )
                                                                ),
                                                                'content': _p_cc(
                                                                    $['content'],
                                                                    ($) => Flow_Content(
                                                                        $
                                                                    )
                                                                ),
                                                            })
                                                        )
                                                    ),
                                                })
                                            )
                                        ),
                                    })
                                )
                            ),
                        }]
                    )
                case 'span':
                    return _p.ss(
                        $,
                        ($) => ['span', Phrasing_Content(
                            $
                        )]
                    )
                case 'label':
                    return _p.ss(
                        $,
                        ($) => ['label', {
                            'classes': _p_cc(
                                $['classes'],
                                ($) => Classes(
                                    $
                                )
                            ),
                            'text': _p_cc(
                                $['text'],
                                ($) => $
                            ),
                            'content': _p_cc(
                                $['content'],
                                ($) => Flow_Content(
                                    $
                                )
                            ),
                        }]
                    )
                case 'img':
                    return _p.ss(
                        $,
                        ($) => ['img', {
                            'classes': _p_cc(
                                $['classes'],
                                ($) => Classes(
                                    $
                                )
                            ),
                            'src': _p_cc(
                                $['src'],
                                ($) => $
                            ),
                            'alt': _p_cc(
                                $['alt'],
                                ($) => $
                            ),
                            'width': _p_cc(
                                $['width'],
                                ($) => $.__o_map(
                                    ($) => $
                                )
                            ),
                            'height': _p_cc(
                                $['height'],
                                ($) => $.__o_map(
                                    ($) => $
                                )
                            ),
                        }]
                    )
                case 'svg':
                    return _p.ss(
                        $,
                        ($) => ['svg', {
                            'classes': _p_cc(
                                $['classes'],
                                ($) => Classes(
                                    $
                                )
                            ),
                            'content': _p_cc(
                                $['content'],
                                ($) => $
                            ),
                            'width': _p_cc(
                                $['width'],
                                ($) => $.__o_map(
                                    ($) => $
                                )
                            ),
                            'height': _p_cc(
                                $['height'],
                                ($) => $.__o_map(
                                    ($) => $
                                )
                            ),
                        }]
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    )
)

export const Document: t_signatures.Document = ($) => ({
    'css': _p_cc(
        $['css'],
        ($) => $
    ),
    'root': _p_cc(
        $['root'],
        ($) => Flow_Content(
            $
        )
    ),
})
