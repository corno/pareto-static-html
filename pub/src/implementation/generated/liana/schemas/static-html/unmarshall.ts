
import * as _p from "pareto-core/dist/refiner"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/static-html/unmarshall"

import * as t_out from "../../../../../interface/generated/liana/schemas/static-html/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Classes: t_signatures.Classes = ($, abort) => _p.list.map(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null]
        )
    ),
    ($) => v_unmarshalled_from_parse_tree.Text(
        $,
        ($) => abort(
            ['expected a text', null]
        )
    )
)

export const Phrasing_Content: t_signatures.Phrasing_Content = ($, abort) => _p.list.map(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null]
        )
    ),
    ($) => _p_cc(
        v_unmarshalled_from_parse_tree.State(
            $,
            ($) => abort(
                ['expected a state', null]
            )
        ),
        ($) => _p.decide.text(
            $['option']['value'],
            ($t): t_out.Phrasing_Content.L => {
                switch ($t) {
                    case 'span':
                        return _p_cc(
                            $['value'],
                            ($) => ['span', Phrasing_Content(
                                $,
                                ($) => abort(
                                    $
                                )
                            )]
                        )
                    case 'classified span':
                        return _p_cc(
                            $['value'],
                            ($) => ['classified span', _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'classes': _p_cc(
                                        $.__get_entry(
                                            'classes',
                                            ($) => abort(
                                                ['no such entry', "classes"]
                                            )
                                        ),
                                        ($) => Classes(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                    'content': _p_cc(
                                        $.__get_entry(
                                            'content',
                                            ($) => abort(
                                                ['no such entry', "content"]
                                            )
                                        ),
                                        ($) => Phrasing_Content(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                })
                            )]
                        )
                    case 'titled span':
                        return _p_cc(
                            $['value'],
                            ($) => ['titled span', _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'title': _p_cc(
                                        $.__get_entry(
                                            'title',
                                            ($) => abort(
                                                ['no such entry', "title"]
                                            )
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null]
                                            )
                                        )
                                    ),
                                    'content': _p_cc(
                                        $.__get_entry(
                                            'content',
                                            ($) => abort(
                                                ['no such entry', "content"]
                                            )
                                        ),
                                        ($) => Phrasing_Content(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                })
                            )]
                        )
                    case 'a':
                        return _p_cc(
                            $['value'],
                            ($) => ['a', _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'text': _p_cc(
                                        $.__get_entry(
                                            'text',
                                            ($) => abort(
                                                ['no such entry', "text"]
                                            )
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null]
                                            )
                                        )
                                    ),
                                    'href': _p_cc(
                                        $.__get_entry(
                                            'href',
                                            ($) => abort(
                                                ['no such entry', "href"]
                                            )
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null]
                                            )
                                        )
                                    ),
                                })
                            )]
                        )
                    case 'p':
                        return _p_cc(
                            $['value'],
                            ($) => ['p', _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'text': _p_cc(
                                        $.__get_entry(
                                            'text',
                                            ($) => abort(
                                                ['no such entry', "text"]
                                            )
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null]
                                            )
                                        )
                                    ),
                                })
                            )]
                        )
                    default:
                        return abort(
                            ['unknown option', $['option']['value']]
                        )
                }
            }
        )
    )
)

export const Flow_Content: t_signatures.Flow_Content = ($, abort) => _p.list.map(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null]
        )
    ),
    ($) => _p_cc(
        v_unmarshalled_from_parse_tree.State(
            $,
            ($) => abort(
                ['expected a state', null]
            )
        ),
        ($) => _p.decide.text(
            $['option']['value'],
            ($t): t_out.Flow_Content.L => {
                switch ($t) {
                    case 'div':
                        return _p_cc(
                            $['value'],
                            ($) => ['div', Flow_Content(
                                $,
                                ($) => abort(
                                    $
                                )
                            )]
                        )
                    case 'dimensioned div':
                        return _p_cc(
                            $['value'],
                            ($) => ['dimensioned div', _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'width': _p_cc(
                                        $.__get_entry(
                                            'width',
                                            ($) => abort(
                                                ['no such entry', "width"]
                                            )
                                        ),
                                        ($) => _p.optional.map(
                                            v_unmarshalled_from_parse_tree.Optional(
                                                $,
                                                ($) => abort(
                                                    ['expected an optional', null]
                                                )
                                            ),
                                            ($) => v_deserialize_number.deserialize(
                                                v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null]
                                                    )
                                                ),
                                                ($) => abort(
                                                    ['not a valid number', null]
                                                )
                                            )
                                        )
                                    ),
                                    'height': _p_cc(
                                        $.__get_entry(
                                            'height',
                                            ($) => abort(
                                                ['no such entry', "height"]
                                            )
                                        ),
                                        ($) => _p.optional.map(
                                            v_unmarshalled_from_parse_tree.Optional(
                                                $,
                                                ($) => abort(
                                                    ['expected an optional', null]
                                                )
                                            ),
                                            ($) => v_deserialize_number.deserialize(
                                                v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null]
                                                    )
                                                ),
                                                ($) => abort(
                                                    ['not a valid number', null]
                                                )
                                            )
                                        )
                                    ),
                                    'content': _p_cc(
                                        $.__get_entry(
                                            'content',
                                            ($) => abort(
                                                ['no such entry', "content"]
                                            )
                                        ),
                                        ($) => Flow_Content(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                })
                            )]
                        )
                    case 'classified div':
                        return _p_cc(
                            $['value'],
                            ($) => ['classified div', _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'classes': _p_cc(
                                        $.__get_entry(
                                            'classes',
                                            ($) => abort(
                                                ['no such entry', "classes"]
                                            )
                                        ),
                                        ($) => Classes(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                    'content': _p_cc(
                                        $.__get_entry(
                                            'content',
                                            ($) => abort(
                                                ['no such entry', "content"]
                                            )
                                        ),
                                        ($) => Flow_Content(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                })
                            )]
                        )
                    case 'table':
                        return _p_cc(
                            $['value'],
                            ($) => ['table', _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'classes': _p_cc(
                                        $.__get_entry(
                                            'classes',
                                            ($) => abort(
                                                ['no such entry', "classes"]
                                            )
                                        ),
                                        ($) => Classes(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                    'sections': _p_cc(
                                        $.__get_entry(
                                            'sections',
                                            ($) => abort(
                                                ['no such entry', "sections"]
                                            )
                                        ),
                                        ($) => _p.list.map(
                                            v_unmarshalled_from_parse_tree.List(
                                                $,
                                                ($) => abort(
                                                    ['expected a list', null]
                                                )
                                            ),
                                            ($) => _p_cc(
                                                v_unmarshalled_from_parse_tree.Group(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a group', null]
                                                    )
                                                ),
                                                ($) => ({
                                                    'classes': _p_cc(
                                                        $.__get_entry(
                                                            'classes',
                                                            ($) => abort(
                                                                ['no such entry', "classes"]
                                                            )
                                                        ),
                                                        ($) => Classes(
                                                            $,
                                                            ($) => abort(
                                                                $
                                                            )
                                                        )
                                                    ),
                                                    'type': _p_cc(
                                                        $.__get_entry(
                                                            'type',
                                                            ($) => abort(
                                                                ['no such entry', "type"]
                                                            )
                                                        ),
                                                        ($) => _p_cc(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null]
                                                                )
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Flow_Content.L.table.sections.L.type_ => {
                                                                    switch ($t) {
                                                                        case 'header':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ['header', v_unmarshalled_from_parse_tree.Nothing(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a nothing', null]
                                                                                    )
                                                                                )]
                                                                            )
                                                                        case 'body':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ['body', v_unmarshalled_from_parse_tree.Nothing(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a nothing', null]
                                                                                    )
                                                                                )]
                                                                            )
                                                                        case 'footer':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ['footer', v_unmarshalled_from_parse_tree.Nothing(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a nothing', null]
                                                                                    )
                                                                                )]
                                                                            )
                                                                        default:
                                                                            return abort(
                                                                                ['unknown option', $['option']['value']]
                                                                            )
                                                                    }
                                                                }
                                                            )
                                                        )
                                                    ),
                                                    'rows': _p_cc(
                                                        $.__get_entry(
                                                            'rows',
                                                            ($) => abort(
                                                                ['no such entry', "rows"]
                                                            )
                                                        ),
                                                        ($) => _p.list.map(
                                                            v_unmarshalled_from_parse_tree.List(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a list', null]
                                                                )
                                                            ),
                                                            ($) => _p_cc(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null]
                                                                    )
                                                                ),
                                                                ($) => ({
                                                                    'classes': _p_cc(
                                                                        $.__get_entry(
                                                                            'classes',
                                                                            ($) => abort(
                                                                                ['no such entry', "classes"]
                                                                            )
                                                                        ),
                                                                        ($) => Classes(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            )
                                                                        )
                                                                    ),
                                                                    'type': _p_cc(
                                                                        $.__get_entry(
                                                                            'type',
                                                                            ($) => abort(
                                                                                ['no such entry', "type"]
                                                                            )
                                                                        ),
                                                                        ($) => _p_cc(
                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a state', null]
                                                                                )
                                                                            ),
                                                                            ($) => _p.decide.text(
                                                                                $['option']['value'],
                                                                                ($t): t_out.Flow_Content.L.table.sections.L.rows.L.type_ => {
                                                                                    switch ($t) {
                                                                                        case 'th':
                                                                                            return _p_cc(
                                                                                                $['value'],
                                                                                                ($) => ['th', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a nothing', null]
                                                                                                    )
                                                                                                )]
                                                                                            )
                                                                                        case 'td':
                                                                                            return _p_cc(
                                                                                                $['value'],
                                                                                                ($) => ['td', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a nothing', null]
                                                                                                    )
                                                                                                )]
                                                                                            )
                                                                                        default:
                                                                                            return abort(
                                                                                                ['unknown option', $['option']['value']]
                                                                                            )
                                                                                    }
                                                                                }
                                                                            )
                                                                        )
                                                                    ),
                                                                    'height': _p_cc(
                                                                        $.__get_entry(
                                                                            'height',
                                                                            ($) => abort(
                                                                                ['no such entry', "height"]
                                                                            )
                                                                        ),
                                                                        ($) => _p.optional.map(
                                                                            v_unmarshalled_from_parse_tree.Optional(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected an optional', null]
                                                                                )
                                                                            ),
                                                                            ($) => v_deserialize_number.deserialize(
                                                                                v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null]
                                                                                    )
                                                                                ),
                                                                                ($) => abort(
                                                                                    ['not a valid number', null]
                                                                                )
                                                                            )
                                                                        )
                                                                    ),
                                                                    'cells': _p_cc(
                                                                        $.__get_entry(
                                                                            'cells',
                                                                            ($) => abort(
                                                                                ['no such entry', "cells"]
                                                                            )
                                                                        ),
                                                                        ($) => _p.list.map(
                                                                            v_unmarshalled_from_parse_tree.List(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a list', null]
                                                                                )
                                                                            ),
                                                                            ($) => _p_cc(
                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a group', null]
                                                                                    )
                                                                                ),
                                                                                ($) => ({
                                                                                    'classes': _p_cc(
                                                                                        $.__get_entry(
                                                                                            'classes',
                                                                                            ($) => abort(
                                                                                                ['no such entry', "classes"]
                                                                                            )
                                                                                        ),
                                                                                        ($) => Classes(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $
                                                                                            )
                                                                                        )
                                                                                    ),
                                                                                    'content': _p_cc(
                                                                                        $.__get_entry(
                                                                                            'content',
                                                                                            ($) => abort(
                                                                                                ['no such entry', "content"]
                                                                                            )
                                                                                        ),
                                                                                        ($) => Flow_Content(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $
                                                                                            )
                                                                                        )
                                                                                    ),
                                                                                })
                                                                            )
                                                                        )
                                                                    ),
                                                                })
                                                            )
                                                        )
                                                    ),
                                                })
                                            )
                                        )
                                    ),
                                })
                            )]
                        )
                    case 'span':
                        return _p_cc(
                            $['value'],
                            ($) => ['span', Phrasing_Content(
                                $,
                                ($) => abort(
                                    $
                                )
                            )]
                        )
                    case 'label':
                        return _p_cc(
                            $['value'],
                            ($) => ['label', _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'classes': _p_cc(
                                        $.__get_entry(
                                            'classes',
                                            ($) => abort(
                                                ['no such entry', "classes"]
                                            )
                                        ),
                                        ($) => Classes(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                    'text': _p_cc(
                                        $.__get_entry(
                                            'text',
                                            ($) => abort(
                                                ['no such entry', "text"]
                                            )
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null]
                                            )
                                        )
                                    ),
                                    'content': _p_cc(
                                        $.__get_entry(
                                            'content',
                                            ($) => abort(
                                                ['no such entry', "content"]
                                            )
                                        ),
                                        ($) => Flow_Content(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                })
                            )]
                        )
                    case 'img':
                        return _p_cc(
                            $['value'],
                            ($) => ['img', _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'classes': _p_cc(
                                        $.__get_entry(
                                            'classes',
                                            ($) => abort(
                                                ['no such entry', "classes"]
                                            )
                                        ),
                                        ($) => Classes(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                    'src': _p_cc(
                                        $.__get_entry(
                                            'src',
                                            ($) => abort(
                                                ['no such entry', "src"]
                                            )
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null]
                                            )
                                        )
                                    ),
                                    'alt': _p_cc(
                                        $.__get_entry(
                                            'alt',
                                            ($) => abort(
                                                ['no such entry', "alt"]
                                            )
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null]
                                            )
                                        )
                                    ),
                                    'width': _p_cc(
                                        $.__get_entry(
                                            'width',
                                            ($) => abort(
                                                ['no such entry', "width"]
                                            )
                                        ),
                                        ($) => _p.optional.map(
                                            v_unmarshalled_from_parse_tree.Optional(
                                                $,
                                                ($) => abort(
                                                    ['expected an optional', null]
                                                )
                                            ),
                                            ($) => v_deserialize_number.deserialize(
                                                v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null]
                                                    )
                                                ),
                                                ($) => abort(
                                                    ['not a valid number', null]
                                                )
                                            )
                                        )
                                    ),
                                    'height': _p_cc(
                                        $.__get_entry(
                                            'height',
                                            ($) => abort(
                                                ['no such entry', "height"]
                                            )
                                        ),
                                        ($) => _p.optional.map(
                                            v_unmarshalled_from_parse_tree.Optional(
                                                $,
                                                ($) => abort(
                                                    ['expected an optional', null]
                                                )
                                            ),
                                            ($) => v_deserialize_number.deserialize(
                                                v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null]
                                                    )
                                                ),
                                                ($) => abort(
                                                    ['not a valid number', null]
                                                )
                                            )
                                        )
                                    ),
                                })
                            )]
                        )
                    case 'svg':
                        return _p_cc(
                            $['value'],
                            ($) => ['svg', _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'classes': _p_cc(
                                        $.__get_entry(
                                            'classes',
                                            ($) => abort(
                                                ['no such entry', "classes"]
                                            )
                                        ),
                                        ($) => Classes(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                    'content': _p_cc(
                                        $.__get_entry(
                                            'content',
                                            ($) => abort(
                                                ['no such entry', "content"]
                                            )
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null]
                                            )
                                        )
                                    ),
                                    'width': _p_cc(
                                        $.__get_entry(
                                            'width',
                                            ($) => abort(
                                                ['no such entry', "width"]
                                            )
                                        ),
                                        ($) => _p.optional.map(
                                            v_unmarshalled_from_parse_tree.Optional(
                                                $,
                                                ($) => abort(
                                                    ['expected an optional', null]
                                                )
                                            ),
                                            ($) => v_deserialize_number.deserialize(
                                                v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null]
                                                    )
                                                ),
                                                ($) => abort(
                                                    ['not a valid number', null]
                                                )
                                            )
                                        )
                                    ),
                                    'height': _p_cc(
                                        $.__get_entry(
                                            'height',
                                            ($) => abort(
                                                ['no such entry', "height"]
                                            )
                                        ),
                                        ($) => _p.optional.map(
                                            v_unmarshalled_from_parse_tree.Optional(
                                                $,
                                                ($) => abort(
                                                    ['expected an optional', null]
                                                )
                                            ),
                                            ($) => v_deserialize_number.deserialize(
                                                v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null]
                                                    )
                                                ),
                                                ($) => abort(
                                                    ['not a valid number', null]
                                                )
                                            )
                                        )
                                    ),
                                })
                            )]
                        )
                    default:
                        return abort(
                            ['unknown option', $['option']['value']]
                        )
                }
            }
        )
    )
)

export const Document: t_signatures.Document = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'css': _p_cc(
            $.__get_entry(
                'css',
                ($) => abort(
                    ['no such entry', "css"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null]
                )
            )
        ),
        'root': _p_cc(
            $.__get_entry(
                'root',
                ($) => abort(
                    ['no such entry', "root"]
                )
            ),
            ($) => Flow_Content(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)
