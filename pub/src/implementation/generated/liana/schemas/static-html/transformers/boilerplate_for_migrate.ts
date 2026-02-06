    
    import * as _p from 'pareto-core/dist/expression'
    
    import _p_change_context from 'pareto-core/dist/_p_change_context'
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/static-html/boilerplate_for_migrate"
    
    import * as t_out from "../../../../../../interface/generated/liana/schemas/static-html/data"
    
    export const Document: t_signatures.Document = ($) => ({
        'css': _p_change_context(
            $['css'],
            ($) => $,
        ),
        'root': _p_change_context(
            $['root'],
            ($) => Flow_Content(
                $,
            ),
        ),
    })
    
    export const Flow_Content: t_signatures.Flow_Content = ($) => _p.list.map(
        $,
        ($) => _p.decide.state(
            $,
            ($): t_out.Flow_Content.L => {
                switch ($[0]) {
                    case 'div':
                        return _p.ss(
                            $,
                            ($) => ['div', Flow_Content(
                                $,
                            )],
                        )
                    case 'dimensioned div':
                        return _p.ss(
                            $,
                            ($) => ['dimensioned div', {
                                'width': _p_change_context(
                                    $['width'],
                                    ($) => _p.optional.map(
                                        $,
                                        ($) => $,
                                    ),
                                ),
                                'height': _p_change_context(
                                    $['height'],
                                    ($) => _p.optional.map(
                                        $,
                                        ($) => $,
                                    ),
                                ),
                                'content': _p_change_context(
                                    $['content'],
                                    ($) => Flow_Content(
                                        $,
                                    ),
                                ),
                            }],
                        )
                    case 'classified div':
                        return _p.ss(
                            $,
                            ($) => ['classified div', {
                                'classes': _p_change_context(
                                    $['classes'],
                                    ($) => Classes(
                                        $,
                                    ),
                                ),
                                'content': _p_change_context(
                                    $['content'],
                                    ($) => Flow_Content(
                                        $,
                                    ),
                                ),
                            }],
                        )
                    case 'table':
                        return _p.ss(
                            $,
                            ($) => ['table', {
                                'classes': _p_change_context(
                                    $['classes'],
                                    ($) => Classes(
                                        $,
                                    ),
                                ),
                                'sections': _p_change_context(
                                    $['sections'],
                                    ($) => _p.list.map(
                                        $,
                                        ($) => ({
                                            'classes': _p_change_context(
                                                $['classes'],
                                                ($) => Classes(
                                                    $,
                                                ),
                                            ),
                                            'type': _p_change_context(
                                                $['type'],
                                                ($) => _p.decide.state(
                                                    $,
                                                    ($): t_out.Flow_Content.L.table.sections.L.type_ => {
                                                        switch ($[0]) {
                                                            case 'header':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ['header', null],
                                                                )
                                                            case 'body':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ['body', null],
                                                                )
                                                            case 'footer':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ['footer', null],
                                                                )
                                                            default:
                                                                return _p.au(
                                                                    $[0],
                                                                )
                                                        }
                                                    },
                                                ),
                                            ),
                                            'rows': _p_change_context(
                                                $['rows'],
                                                ($) => _p.list.map(
                                                    $,
                                                    ($) => ({
                                                        'classes': _p_change_context(
                                                            $['classes'],
                                                            ($) => Classes(
                                                                $,
                                                            ),
                                                        ),
                                                        'type': _p_change_context(
                                                            $['type'],
                                                            ($) => _p.decide.state(
                                                                $,
                                                                ($): t_out.Flow_Content.L.table.sections.L.rows.L.type_ => {
                                                                    switch ($[0]) {
                                                                        case 'th':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['th', null],
                                                                            )
                                                                        case 'td':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['td', null],
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                        'height': _p_change_context(
                                                            $['height'],
                                                            ($) => _p.optional.map(
                                                                $,
                                                                ($) => $,
                                                            ),
                                                        ),
                                                        'cells': _p_change_context(
                                                            $['cells'],
                                                            ($) => _p.list.map(
                                                                $,
                                                                ($) => ({
                                                                    'classes': _p_change_context(
                                                                        $['classes'],
                                                                        ($) => Classes(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    'content': _p_change_context(
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
                        return _p.ss(
                            $,
                            ($) => ['span', Phrasing_Content(
                                $,
                            )],
                        )
                    case 'label':
                        return _p.ss(
                            $,
                            ($) => ['label', {
                                'classes': _p_change_context(
                                    $['classes'],
                                    ($) => Classes(
                                        $,
                                    ),
                                ),
                                'text': _p_change_context(
                                    $['text'],
                                    ($) => $,
                                ),
                                'content': _p_change_context(
                                    $['content'],
                                    ($) => Flow_Content(
                                        $,
                                    ),
                                ),
                            }],
                        )
                    case 'img':
                        return _p.ss(
                            $,
                            ($) => ['img', {
                                'classes': _p_change_context(
                                    $['classes'],
                                    ($) => Classes(
                                        $,
                                    ),
                                ),
                                'src': _p_change_context(
                                    $['src'],
                                    ($) => $,
                                ),
                                'alt': _p_change_context(
                                    $['alt'],
                                    ($) => $,
                                ),
                                'width': _p_change_context(
                                    $['width'],
                                    ($) => _p.optional.map(
                                        $,
                                        ($) => $,
                                    ),
                                ),
                                'height': _p_change_context(
                                    $['height'],
                                    ($) => _p.optional.map(
                                        $,
                                        ($) => $,
                                    ),
                                ),
                            }],
                        )
                    case 'svg':
                        return _p.ss(
                            $,
                            ($) => ['svg', {
                                'classes': _p_change_context(
                                    $['classes'],
                                    ($) => Classes(
                                        $,
                                    ),
                                ),
                                'content': _p_change_context(
                                    $['content'],
                                    ($) => $,
                                ),
                                'width': _p_change_context(
                                    $['width'],
                                    ($) => _p.optional.map(
                                        $,
                                        ($) => $,
                                    ),
                                ),
                                'height': _p_change_context(
                                    $['height'],
                                    ($) => _p.optional.map(
                                        $,
                                        ($) => $,
                                    ),
                                ),
                            }],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        ),
    )
    
    export const Classes: t_signatures.Classes = ($) => _p.list.map(
        $,
        ($) => $,
    )
    
    export const Phrasing_Content: t_signatures.Phrasing_Content = ($) => _p.list.map(
        $,
        ($) => _p.decide.state(
            $,
            ($): t_out.Phrasing_Content.L => {
                switch ($[0]) {
                    case 'span':
                        return _p.ss(
                            $,
                            ($) => ['span', Phrasing_Content(
                                $,
                            )],
                        )
                    case 'classified span':
                        return _p.ss(
                            $,
                            ($) => ['classified span', {
                                'classes': _p_change_context(
                                    $['classes'],
                                    ($) => Classes(
                                        $,
                                    ),
                                ),
                                'content': _p_change_context(
                                    $['content'],
                                    ($) => Phrasing_Content(
                                        $,
                                    ),
                                ),
                            }],
                        )
                    case 'titled span':
                        return _p.ss(
                            $,
                            ($) => ['titled span', {
                                'title': _p_change_context(
                                    $['title'],
                                    ($) => $,
                                ),
                                'content': _p_change_context(
                                    $['content'],
                                    ($) => Phrasing_Content(
                                        $,
                                    ),
                                ),
                            }],
                        )
                    case 'a':
                        return _p.ss(
                            $,
                            ($) => ['a', {
                                'text': _p_change_context(
                                    $['text'],
                                    ($) => $,
                                ),
                                'href': _p_change_context(
                                    $['href'],
                                    ($) => $,
                                ),
                            }],
                        )
                    case 'p':
                        return _p.ss(
                            $,
                            ($) => ['p', {
                                'text': _p_change_context(
                                    $['text'],
                                    ($) => $,
                                ),
                            }],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        ),
    )
