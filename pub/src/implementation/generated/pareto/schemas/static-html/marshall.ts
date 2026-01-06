import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/static-html/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Classes: _i_signatures._T_Classes = ($, $p) => ['list', $.map(($) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})])]
export const Phrasing_Content: _i_signatures._T_Phrasing_Content = ($, $p) => ['list', $.map(($) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'span': return _pa.ss($, ($) => ({
            'state': "span",
            'value': Phrasing_Content(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'classified span': return _pa.ss($, ($) => ({
            'state': "classified span",
            'value': ['verbose group', _pa.dictionary.literal({
                'classes': _pa.deprecated_cc($['classes'], ($) => Classes(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'content': _pa.deprecated_cc($['content'], ($) => Phrasing_Content(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'titled span': return _pa.ss($, ($) => ({
            'state': "titled span",
            'value': ['verbose group', _pa.dictionary.literal({
                'title': _pa.deprecated_cc($['title'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'content': _pa.deprecated_cc($['content'], ($) => Phrasing_Content(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'a': return _pa.ss($, ($) => ({
            'state': "a",
            'value': ['verbose group', _pa.dictionary.literal({
                'text': _pa.deprecated_cc($['text'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'href': _pa.deprecated_cc($['href'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        case 'p': return _pa.ss($, ($) => ({
            'state': "p",
            'value': ['verbose group', _pa.dictionary.literal({
                'text': _pa.deprecated_cc($['text'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        default: return _pa.au($[0])
    }
})])]
export const Flow_Content: _i_signatures._T_Flow_Content = ($, $p) => ['list', $.map(($) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'div': return _pa.ss($, ($) => ({
            'state': "div",
            'value': Flow_Content(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'dimensioned div': return _pa.ss($, ($) => ({
            'state': "dimensioned div",
            'value': ['verbose group', _pa.dictionary.literal({
                'width': _pa.deprecated_cc($['width'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['default number'](
                            $,
                            null
                        ),
                    })]],
                    () => ['not set', null]
                )]),
                'height': _pa.deprecated_cc($['height'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['default number'](
                            $,
                            null
                        ),
                    })]],
                    () => ['not set', null]
                )]),
                'content': _pa.deprecated_cc($['content'], ($) => Flow_Content(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'classified div': return _pa.ss($, ($) => ({
            'state': "classified div",
            'value': ['verbose group', _pa.dictionary.literal({
                'classes': _pa.deprecated_cc($['classes'], ($) => Classes(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'content': _pa.deprecated_cc($['content'], ($) => Flow_Content(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'table': return _pa.ss($, ($) => ({
            'state': "table",
            'value': ['verbose group', _pa.dictionary.literal({
                'classes': _pa.deprecated_cc($['classes'], ($) => Classes(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'sections': _pa.deprecated_cc($['sections'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
                    'classes': _pa.deprecated_cc($['classes'], ($) => Classes(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'type': _pa.deprecated_cc($['type'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                        switch ($[0]) {
                            case 'header': return _pa.ss($, ($) => ({
                                'state': "header",
                                'value': ['nothing', null],
                            }))
                            case 'body': return _pa.ss($, ($) => ({
                                'state': "body",
                                'value': ['nothing', null],
                            }))
                            case 'footer': return _pa.ss($, ($) => ({
                                'state': "footer",
                                'value': ['nothing', null],
                            }))
                            default: return _pa.au($[0])
                        }
                    })]),
                    'rows': _pa.deprecated_cc($['rows'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
                        'classes': _pa.deprecated_cc($['classes'], ($) => Classes(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                        'type': _pa.deprecated_cc($['type'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'th': return _pa.ss($, ($) => ({
                                    'state': "th",
                                    'value': ['nothing', null],
                                }))
                                case 'td': return _pa.ss($, ($) => ({
                                    'state': "td",
                                    'value': ['nothing', null],
                                }))
                                default: return _pa.au($[0])
                            }
                        })]),
                        'height': _pa.deprecated_cc($['height'], ($) => ['optional', $.transform(
                            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $p['value serializers']['default number'](
                                    $,
                                    null
                                ),
                            })]],
                            () => ['not set', null]
                        )]),
                        'cells': _pa.deprecated_cc($['cells'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
                            'classes': _pa.deprecated_cc($['classes'], ($) => Classes(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                            'content': _pa.deprecated_cc($['content'], ($) => Flow_Content(
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
        case 'span': return _pa.ss($, ($) => ({
            'state': "span",
            'value': Phrasing_Content(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'label': return _pa.ss($, ($) => ({
            'state': "label",
            'value': ['verbose group', _pa.dictionary.literal({
                'classes': _pa.deprecated_cc($['classes'], ($) => Classes(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'text': _pa.deprecated_cc($['text'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'content': _pa.deprecated_cc($['content'], ($) => Flow_Content(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'img': return _pa.ss($, ($) => ({
            'state': "img",
            'value': ['verbose group', _pa.dictionary.literal({
                'classes': _pa.deprecated_cc($['classes'], ($) => Classes(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'src': _pa.deprecated_cc($['src'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'alt': _pa.deprecated_cc($['alt'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'width': _pa.deprecated_cc($['width'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['default number'](
                            $,
                            null
                        ),
                    })]],
                    () => ['not set', null]
                )]),
                'height': _pa.deprecated_cc($['height'], ($) => ['optional', $.transform(
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
        case 'svg': return _pa.ss($, ($) => ({
            'state': "svg",
            'value': ['verbose group', _pa.dictionary.literal({
                'classes': _pa.deprecated_cc($['classes'], ($) => Classes(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'content': _pa.deprecated_cc($['content'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'width': _pa.deprecated_cc($['width'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['default number'](
                            $,
                            null
                        ),
                    })]],
                    () => ['not set', null]
                )]),
                'height': _pa.deprecated_cc($['height'], ($) => ['optional', $.transform(
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
        default: return _pa.au($[0])
    }
})])]
export const Document: _i_signatures._T_Document = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'css': _pa.deprecated_cc($['css'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'root': _pa.deprecated_cc($['root'], ($) => Flow_Content(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
