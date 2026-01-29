
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/static-html/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

export const Classes: t_signatures.Classes = ($) => ['list', $.__l_map(
    ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]
)]

export const Phrasing_Content: t_signatures.Phrasing_Content = ($) => ['list', $.__l_map(
    ($) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'span':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'span',
                            'value': Phrasing_Content(
                                $
                            ),
                        })
                    )
                case 'classified span':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'classified span',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                ({
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
                                })
                            )]],
                        })
                    )
                case 'titled span':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'titled span',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                ({
                                    'title': _p_cc(
                                        $['title'],
                                        ($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]
                                    ),
                                    'content': _p_cc(
                                        $['content'],
                                        ($) => Phrasing_Content(
                                            $
                                        )
                                    ),
                                })
                            )]],
                        })
                    )
                case 'a':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'a',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                ({
                                    'text': _p_cc(
                                        $['text'],
                                        ($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]
                                    ),
                                    'href': _p_cc(
                                        $['href'],
                                        ($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]
                                    ),
                                })
                            )]],
                        })
                    )
                case 'p':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'p',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                ({
                                    'text': _p_cc(
                                        $['text'],
                                        ($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]
                                    ),
                                })
                            )]],
                        })
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    )]
)]

export const Flow_Content: t_signatures.Flow_Content = ($) => ['list', $.__l_map(
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
                                $
                            ),
                        })
                    )
                case 'dimensioned div':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'dimensioned div',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                ({
                                    'width': _p_cc(
                                        $['width'],
                                        ($) => ['optional', $.__decide(
                                            ($): t_out.Value.optional => ['set', ['text', ({
                                                'delimiter': ['none', null],
                                                'value': v_serialize_number.serialize(
                                                    $
                                                ),
                                            })]],
                                            () => ['not set', null]
                                        )]
                                    ),
                                    'height': _p_cc(
                                        $['height'],
                                        ($) => ['optional', $.__decide(
                                            ($): t_out.Value.optional => ['set', ['text', ({
                                                'delimiter': ['none', null],
                                                'value': v_serialize_number.serialize(
                                                    $
                                                ),
                                            })]],
                                            () => ['not set', null]
                                        )]
                                    ),
                                    'content': _p_cc(
                                        $['content'],
                                        ($) => Flow_Content(
                                            $
                                        )
                                    ),
                                })
                            )]],
                        })
                    )
                case 'classified div':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'classified div',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                ({
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
                            )]],
                        })
                    )
                case 'table':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'table',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                ({
                                    'classes': _p_cc(
                                        $['classes'],
                                        ($) => Classes(
                                            $
                                        )
                                    ),
                                    'sections': _p_cc(
                                        $['sections'],
                                        ($) => ['list', $.__l_map(
                                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                                ({
                                                    'classes': _p_cc(
                                                        $['classes'],
                                                        ($) => Classes(
                                                            $
                                                        )
                                                    ),
                                                    'type': _p_cc(
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
                                                                            })
                                                                        )
                                                                    case 'body':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ({
                                                                                'option': 'body',
                                                                                'value': ['nothing', null],
                                                                            })
                                                                        )
                                                                    case 'footer':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ({
                                                                                'option': 'footer',
                                                                                'value': ['nothing', null],
                                                                            })
                                                                        )
                                                                    default:
                                                                        return _p.au(
                                                                            $[0]
                                                                        )
                                                                }
                                                            }
                                                        )]
                                                    ),
                                                    'rows': _p_cc(
                                                        $['rows'],
                                                        ($) => ['list', $.__l_map(
                                                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                                                ({
                                                                    'classes': _p_cc(
                                                                        $['classes'],
                                                                        ($) => Classes(
                                                                            $
                                                                        )
                                                                    ),
                                                                    'type': _p_cc(
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
                                                                                            })
                                                                                        )
                                                                                    case 'td':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'td',
                                                                                                'value': ['nothing', null],
                                                                                            })
                                                                                        )
                                                                                    default:
                                                                                        return _p.au(
                                                                                            $[0]
                                                                                        )
                                                                                }
                                                                            }
                                                                        )]
                                                                    ),
                                                                    'height': _p_cc(
                                                                        $['height'],
                                                                        ($) => ['optional', $.__decide(
                                                                            ($): t_out.Value.optional => ['set', ['text', ({
                                                                                'delimiter': ['none', null],
                                                                                'value': v_serialize_number.serialize(
                                                                                    $
                                                                                ),
                                                                            })]],
                                                                            () => ['not set', null]
                                                                        )]
                                                                    ),
                                                                    'cells': _p_cc(
                                                                        $['cells'],
                                                                        ($) => ['list', $.__l_map(
                                                                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                                                                ({
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
                                                                            )]]
                                                                        )]
                                                                    ),
                                                                })
                                                            )]]
                                                        )]
                                                    ),
                                                })
                                            )]]
                                        )]
                                    ),
                                })
                            )]],
                        })
                    )
                case 'span':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'span',
                            'value': Phrasing_Content(
                                $
                            ),
                        })
                    )
                case 'label':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'label',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                ({
                                    'classes': _p_cc(
                                        $['classes'],
                                        ($) => Classes(
                                            $
                                        )
                                    ),
                                    'text': _p_cc(
                                        $['text'],
                                        ($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]
                                    ),
                                    'content': _p_cc(
                                        $['content'],
                                        ($) => Flow_Content(
                                            $
                                        )
                                    ),
                                })
                            )]],
                        })
                    )
                case 'img':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'img',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                ({
                                    'classes': _p_cc(
                                        $['classes'],
                                        ($) => Classes(
                                            $
                                        )
                                    ),
                                    'src': _p_cc(
                                        $['src'],
                                        ($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]
                                    ),
                                    'alt': _p_cc(
                                        $['alt'],
                                        ($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]
                                    ),
                                    'width': _p_cc(
                                        $['width'],
                                        ($) => ['optional', $.__decide(
                                            ($): t_out.Value.optional => ['set', ['text', ({
                                                'delimiter': ['none', null],
                                                'value': v_serialize_number.serialize(
                                                    $
                                                ),
                                            })]],
                                            () => ['not set', null]
                                        )]
                                    ),
                                    'height': _p_cc(
                                        $['height'],
                                        ($) => ['optional', $.__decide(
                                            ($): t_out.Value.optional => ['set', ['text', ({
                                                'delimiter': ['none', null],
                                                'value': v_serialize_number.serialize(
                                                    $
                                                ),
                                            })]],
                                            () => ['not set', null]
                                        )]
                                    ),
                                })
                            )]],
                        })
                    )
                case 'svg':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'svg',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                ({
                                    'classes': _p_cc(
                                        $['classes'],
                                        ($) => Classes(
                                            $
                                        )
                                    ),
                                    'content': _p_cc(
                                        $['content'],
                                        ($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]
                                    ),
                                    'width': _p_cc(
                                        $['width'],
                                        ($) => ['optional', $.__decide(
                                            ($): t_out.Value.optional => ['set', ['text', ({
                                                'delimiter': ['none', null],
                                                'value': v_serialize_number.serialize(
                                                    $
                                                ),
                                            })]],
                                            () => ['not set', null]
                                        )]
                                    ),
                                    'height': _p_cc(
                                        $['height'],
                                        ($) => ['optional', $.__decide(
                                            ($): t_out.Value.optional => ['set', ['text', ({
                                                'delimiter': ['none', null],
                                                'value': v_serialize_number.serialize(
                                                    $
                                                ),
                                            })]],
                                            () => ['not set', null]
                                        )]
                                    ),
                                })
                            )]],
                        })
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    )]
)]

export const Document: t_signatures.Document = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'css': _p_cc(
            $['css'],
            ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]
        ),
        'root': _p_cc(
            $['root'],
            ($) => Flow_Content(
                $
            )
        ),
    })
)]]
