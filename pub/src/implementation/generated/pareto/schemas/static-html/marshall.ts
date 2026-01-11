import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/static-html/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Classes: _i_signatures._T_Classes = ($, $p) => ['list', $.map(($) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})])]
export const Phrasing_Content: _i_signatures._T_Phrasing_Content = ($, $p) => ['list', $.map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'span': return _p.ss($, ($) => ({
            'state': "span",
            'value': Phrasing_Content(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'classified span': return _p.ss($, ($) => ({
            'state': "classified span",
            'value': ['verbose group', _p.dictionary.literal({
                'classes': _p.deprecated_cc($['classes'], ($) => Classes(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'content': _p.deprecated_cc($['content'], ($) => Phrasing_Content(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'titled span': return _p.ss($, ($) => ({
            'state': "titled span",
            'value': ['verbose group', _p.dictionary.literal({
                'title': _p.deprecated_cc($['title'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'content': _p.deprecated_cc($['content'], ($) => Phrasing_Content(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'a': return _p.ss($, ($) => ({
            'state': "a",
            'value': ['verbose group', _p.dictionary.literal({
                'text': _p.deprecated_cc($['text'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'href': _p.deprecated_cc($['href'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        case 'p': return _p.ss($, ($) => ({
            'state': "p",
            'value': ['verbose group', _p.dictionary.literal({
                'text': _p.deprecated_cc($['text'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        default: return _p.au($[0])
    }
})])]
export const Flow_Content: _i_signatures._T_Flow_Content = ($, $p) => ['list', $.map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'div': return _p.ss($, ($) => ({
            'state': "div",
            'value': Flow_Content(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'dimensioned div': return _p.ss($, ($) => ({
            'state': "dimensioned div",
            'value': ['verbose group', _p.dictionary.literal({
                'width': _p.deprecated_cc($['width'], ($) => ['optional', $.__decide(
                    ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['default number'](
                            $,
                            null
                        ),
                    })]],
                    () => ['not set', null]
                )]),
                'height': _p.deprecated_cc($['height'], ($) => ['optional', $.__decide(
                    ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['default number'](
                            $,
                            null
                        ),
                    })]],
                    () => ['not set', null]
                )]),
                'content': _p.deprecated_cc($['content'], ($) => Flow_Content(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'classified div': return _p.ss($, ($) => ({
            'state': "classified div",
            'value': ['verbose group', _p.dictionary.literal({
                'classes': _p.deprecated_cc($['classes'], ($) => Classes(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'content': _p.deprecated_cc($['content'], ($) => Flow_Content(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'table': return _p.ss($, ($) => ({
            'state': "table",
            'value': ['verbose group', _p.dictionary.literal({
                'classes': _p.deprecated_cc($['classes'], ($) => Classes(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'sections': _p.deprecated_cc($['sections'], ($) => ['list', $.map(($) => ['verbose group', _p.dictionary.literal({
                    'classes': _p.deprecated_cc($['classes'], ($) => Classes(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                        switch ($[0]) {
                            case 'header': return _p.ss($, ($) => ({
                                'state': "header",
                                'value': ['nothing', null],
                            }))
                            case 'body': return _p.ss($, ($) => ({
                                'state': "body",
                                'value': ['nothing', null],
                            }))
                            case 'footer': return _p.ss($, ($) => ({
                                'state': "footer",
                                'value': ['nothing', null],
                            }))
                            default: return _p.au($[0])
                        }
                    })]),
                    'rows': _p.deprecated_cc($['rows'], ($) => ['list', $.map(($) => ['verbose group', _p.dictionary.literal({
                        'classes': _p.deprecated_cc($['classes'], ($) => Classes(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                        'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'th': return _p.ss($, ($) => ({
                                    'state': "th",
                                    'value': ['nothing', null],
                                }))
                                case 'td': return _p.ss($, ($) => ({
                                    'state': "td",
                                    'value': ['nothing', null],
                                }))
                                default: return _p.au($[0])
                            }
                        })]),
                        'height': _p.deprecated_cc($['height'], ($) => ['optional', $.__decide(
                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $p['value serializers']['default number'](
                                    $,
                                    null
                                ),
                            })]],
                            () => ['not set', null]
                        )]),
                        'cells': _p.deprecated_cc($['cells'], ($) => ['list', $.map(($) => ['verbose group', _p.dictionary.literal({
                            'classes': _p.deprecated_cc($['classes'], ($) => Classes(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                            'content': _p.deprecated_cc($['content'], ($) => Flow_Content(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                        })])]),
                    })])]),
                })])]),
            })],
        }))
        case 'span': return _p.ss($, ($) => ({
            'state': "span",
            'value': Phrasing_Content(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'label': return _p.ss($, ($) => ({
            'state': "label",
            'value': ['verbose group', _p.dictionary.literal({
                'classes': _p.deprecated_cc($['classes'], ($) => Classes(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'text': _p.deprecated_cc($['text'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'content': _p.deprecated_cc($['content'], ($) => Flow_Content(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'img': return _p.ss($, ($) => ({
            'state': "img",
            'value': ['verbose group', _p.dictionary.literal({
                'classes': _p.deprecated_cc($['classes'], ($) => Classes(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'src': _p.deprecated_cc($['src'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'alt': _p.deprecated_cc($['alt'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'width': _p.deprecated_cc($['width'], ($) => ['optional', $.__decide(
                    ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['default number'](
                            $,
                            null
                        ),
                    })]],
                    () => ['not set', null]
                )]),
                'height': _p.deprecated_cc($['height'], ($) => ['optional', $.__decide(
                    ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['default number'](
                            $,
                            null
                        ),
                    })]],
                    () => ['not set', null]
                )]),
            })],
        }))
        case 'svg': return _p.ss($, ($) => ({
            'state': "svg",
            'value': ['verbose group', _p.dictionary.literal({
                'classes': _p.deprecated_cc($['classes'], ($) => Classes(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'content': _p.deprecated_cc($['content'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'width': _p.deprecated_cc($['width'], ($) => ['optional', $.__decide(
                    ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['default number'](
                            $,
                            null
                        ),
                    })]],
                    () => ['not set', null]
                )]),
                'height': _p.deprecated_cc($['height'], ($) => ['optional', $.__decide(
                    ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['default number'](
                            $,
                            null
                        ),
                    })]],
                    () => ['not set', null]
                )]),
            })],
        }))
        default: return _p.au($[0])
    }
})])]
export const Document: _i_signatures._T_Document = ($, $p) => ['verbose group', _p.dictionary.literal({
    'css': _p.deprecated_cc($['css'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'root': _p.deprecated_cc($['root'], ($) => Flow_Content(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
