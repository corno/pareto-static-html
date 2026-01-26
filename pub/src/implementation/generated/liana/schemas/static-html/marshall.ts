
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/static-html/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
export const Classes: t_signatures.Classes = ($,) => ['list', $.__l_map(($,) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})])]
export const Phrasing_Content: t_signatures.Phrasing_Content = ($,) => ['list', $.__l_map(($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'span':
            return _p.ss($, ($,) => ({
                'option': "span",
                'value': Phrasing_Content($),
            }))
        case 'classified span':
            return _p.ss($, ($,) => ({
                'option': "classified span",
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'classes': _p.deprecated_cc($['classes'], ($,) => Classes($)),
                    'content': _p.deprecated_cc($['content'], ($,) => Phrasing_Content($)),
                }))]],
            }))
        case 'titled span':
            return _p.ss($, ($,) => ({
                'option': "titled span",
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'title': _p.deprecated_cc($['title'], ($,) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'content': _p.deprecated_cc($['content'], ($,) => Phrasing_Content($)),
                }))]],
            }))
        case 'a':
            return _p.ss($, ($,) => ({
                'option': "a",
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'text': _p.deprecated_cc($['text'], ($,) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'href': _p.deprecated_cc($['href'], ($,) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                }))]],
            }))
        case 'p':
            return _p.ss($, ($,) => ({
                'option': "p",
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'text': _p.deprecated_cc($['text'], ($,) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                }))]],
            }))
        default:
            return _p.au($[0])
    }
})])]
export const Flow_Content: t_signatures.Flow_Content = ($,) => ['list', $.__l_map(($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'div':
            return _p.ss($, ($,) => ({
                'option': "div",
                'value': Flow_Content($),
            }))
        case 'dimensioned div':
            return _p.ss($, ($,) => ({
                'option': "dimensioned div",
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'width': _p.deprecated_cc($['width'], ($,) => ['optional', $(($,) => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': v_serialize_number.serialize($),
                    })]], () => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': v_serialize_number.serialize($),
                    })]])]),
                    'height': _p.deprecated_cc($['height'], ($,) => ['optional', $(($,) => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': v_serialize_number.serialize($),
                    })]], () => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': v_serialize_number.serialize($),
                    })]])]),
                    'content': _p.deprecated_cc($['content'], ($,) => Flow_Content($)),
                }))]],
            }))
        case 'classified div':
            return _p.ss($, ($,) => ({
                'option': "classified div",
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'classes': _p.deprecated_cc($['classes'], ($,) => Classes($)),
                    'content': _p.deprecated_cc($['content'], ($,) => Flow_Content($)),
                }))]],
            }))
        case 'table':
            return _p.ss($, ($,) => ({
                'option': "table",
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'classes': _p.deprecated_cc($['classes'], ($,) => Classes($)),
                    'sections': _p.deprecated_cc($['sections'], ($,) => ['list', $.__l_map(($,) => ['group', ['verbose', _p.dictionary.literal(({
                        'classes': _p.deprecated_cc($['classes'], ($,) => Classes($)),
                        'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                            switch ($[0]) {
                                case 'header':
                                    return _p.ss($, ($,) => ({
                                        'option': "header",
                                        'value': ['nothing', null],
                                    }))
                                case 'body':
                                    return _p.ss($, ($,) => ({
                                        'option': "body",
                                        'value': ['nothing', null],
                                    }))
                                case 'footer':
                                    return _p.ss($, ($,) => ({
                                        'option': "footer",
                                        'value': ['nothing', null],
                                    }))
                                default:
                                    return _p.au($[0])
                            }
                        })]),
                        'rows': _p.deprecated_cc($['rows'], ($,) => ['list', $.__l_map(($,) => ['group', ['verbose', _p.dictionary.literal(({
                            'classes': _p.deprecated_cc($['classes'], ($,) => Classes($)),
                            'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'th':
                                        return _p.ss($, ($,) => ({
                                            'option': "th",
                                            'value': ['nothing', null],
                                        }))
                                    case 'td':
                                        return _p.ss($, ($,) => ({
                                            'option': "td",
                                            'value': ['nothing', null],
                                        }))
                                    default:
                                        return _p.au($[0])
                                }
                            })]),
                            'height': _p.deprecated_cc($['height'], ($,) => ['optional', $(($,) => ['set', ['text', ({
                                'delimiter': ['backtick', null],
                                'value': v_serialize_number.serialize($),
                            })]], () => ['set', ['text', ({
                                'delimiter': ['backtick', null],
                                'value': v_serialize_number.serialize($),
                            })]])]),
                            'cells': _p.deprecated_cc($['cells'], ($,) => ['list', $.__l_map(($,) => ['group', ['verbose', _p.dictionary.literal(({
                                'classes': _p.deprecated_cc($['classes'], ($,) => Classes($)),
                                'content': _p.deprecated_cc($['content'], ($,) => Flow_Content($)),
                            }))]])]),
                        }))]])]),
                    }))]])]),
                }))]],
            }))
        case 'span':
            return _p.ss($, ($,) => ({
                'option': "span",
                'value': Phrasing_Content($),
            }))
        case 'label':
            return _p.ss($, ($,) => ({
                'option': "label",
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'classes': _p.deprecated_cc($['classes'], ($,) => Classes($)),
                    'text': _p.deprecated_cc($['text'], ($,) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'content': _p.deprecated_cc($['content'], ($,) => Flow_Content($)),
                }))]],
            }))
        case 'img':
            return _p.ss($, ($,) => ({
                'option': "img",
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'classes': _p.deprecated_cc($['classes'], ($,) => Classes($)),
                    'src': _p.deprecated_cc($['src'], ($,) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'alt': _p.deprecated_cc($['alt'], ($,) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'width': _p.deprecated_cc($['width'], ($,) => ['optional', $(($,) => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': v_serialize_number.serialize($),
                    })]], () => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': v_serialize_number.serialize($),
                    })]])]),
                    'height': _p.deprecated_cc($['height'], ($,) => ['optional', $(($,) => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': v_serialize_number.serialize($),
                    })]], () => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': v_serialize_number.serialize($),
                    })]])]),
                }))]],
            }))
        case 'svg':
            return _p.ss($, ($,) => ({
                'option': "svg",
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'classes': _p.deprecated_cc($['classes'], ($,) => Classes($)),
                    'content': _p.deprecated_cc($['content'], ($,) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'width': _p.deprecated_cc($['width'], ($,) => ['optional', $(($,) => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': v_serialize_number.serialize($),
                    })]], () => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': v_serialize_number.serialize($),
                    })]])]),
                    'height': _p.deprecated_cc($['height'], ($,) => ['optional', $(($,) => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': v_serialize_number.serialize($),
                    })]], () => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': v_serialize_number.serialize($),
                    })]])]),
                }))]],
            }))
        default:
            return _p.au($[0])
    }
})])]
export const Document: t_signatures.Document = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'css': _p.deprecated_cc($['css'], ($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'root': _p.deprecated_cc($['root'], ($,) => Flow_Content($)),
}))]]
