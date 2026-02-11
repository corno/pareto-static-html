
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/static-html/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/static-html/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/refiners/unmarshalled/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

import * as v_external_xml from "../../xml/refiners/astn_parse_tree"

export const Document: t_signatures.Document = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'css': _p_change_context(
            $.__get_entry_deprecated(
                'css',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "css"],
                    ),
                },
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
        'root': _p_change_context(
            $.__get_entry_deprecated(
                'root',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "root"],
                    ),
                },
            ),
            ($) => Flow_Content(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const Flow_Content: t_signatures.Flow_Content = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null],
        ),
    ),
).map(
    ($) => _p_change_context(
        v_unmarshalled_from_parse_tree.State(
            $,
            ($) => abort(
                ['expected a state', null],
            ),
        ),
        ($) => _p.decide.text(
            $['option']['value'],
            ($t): t_out.Flow_Content.L => {
                switch ($t) {
                    case 'div':
                        return _p_change_context(
                            $['value'],
                            ($) => ['div', Flow_Content(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        )
                    case 'dimensioned div':
                        return _p_change_context(
                            $['value'],
                            ($) => ['dimensioned div', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'width': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'width',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "width"],
                                                ),
                                            },
                                        ),
                                        ($) => _p.optional.from.optional(
                                            v_unmarshalled_from_parse_tree.Optional(
                                                $,
                                                ($) => abort(
                                                    ['expected an optional', null],
                                                ),
                                            ),
                                        ).map(
                                            ($) => v_deserialize_number.deserialize(
                                                _p_list_from_text(
                                                    v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
                                                        ),
                                                    ),
                                                    ($) => $,
                                                ),
                                                ($) => abort(
                                                    ['not a valid number', null],
                                                ),
                                            ),
                                        ),
                                    ),
                                    'height': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'height',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "height"],
                                                ),
                                            },
                                        ),
                                        ($) => _p.optional.from.optional(
                                            v_unmarshalled_from_parse_tree.Optional(
                                                $,
                                                ($) => abort(
                                                    ['expected an optional', null],
                                                ),
                                            ),
                                        ).map(
                                            ($) => v_deserialize_number.deserialize(
                                                _p_list_from_text(
                                                    v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
                                                        ),
                                                    ),
                                                    ($) => $,
                                                ),
                                                ($) => abort(
                                                    ['not a valid number', null],
                                                ),
                                            ),
                                        ),
                                    ),
                                    'content': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'content',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "content"],
                                                ),
                                            },
                                        ),
                                        ($) => Flow_Content(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        )
                    case 'classified div':
                        return _p_change_context(
                            $['value'],
                            ($) => ['classified div', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'classes': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'classes',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "classes"],
                                                ),
                                            },
                                        ),
                                        ($) => Classes(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'content': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'content',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "content"],
                                                ),
                                            },
                                        ),
                                        ($) => Flow_Content(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        )
                    case 'table':
                        return _p_change_context(
                            $['value'],
                            ($) => ['table', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'classes': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'classes',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "classes"],
                                                ),
                                            },
                                        ),
                                        ($) => Classes(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'sections': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'sections',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "sections"],
                                                ),
                                            },
                                        ),
                                        ($) => _p.list.from.list(
                                            v_unmarshalled_from_parse_tree.List(
                                                $,
                                                ($) => abort(
                                                    ['expected a list', null],
                                                ),
                                            ),
                                        ).map(
                                            ($) => _p_change_context(
                                                v_unmarshalled_from_parse_tree.Group(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a group', null],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'classes': _p_change_context(
                                                        $.__get_entry_deprecated(
                                                            'classes',
                                                            {
                                                                no_such_entry: ($) => abort(
                                                                    ['no such entry', "classes"],
                                                                ),
                                                            },
                                                        ),
                                                        ($) => Classes(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    ),
                                                    'type': _p_change_context(
                                                        $.__get_entry_deprecated(
                                                            'type',
                                                            {
                                                                no_such_entry: ($) => abort(
                                                                    ['no such entry', "type"],
                                                                ),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null],
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Flow_Content.L.table.sections.L.type_ => {
                                                                    switch ($t) {
                                                                        case 'header':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['header', v_unmarshalled_from_parse_tree.Nothing(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a nothing', null],
                                                                                    ),
                                                                                )],
                                                                            )
                                                                        case 'body':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['body', v_unmarshalled_from_parse_tree.Nothing(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a nothing', null],
                                                                                    ),
                                                                                )],
                                                                            )
                                                                        case 'footer':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['footer', v_unmarshalled_from_parse_tree.Nothing(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a nothing', null],
                                                                                    ),
                                                                                )],
                                                                            )
                                                                        default:
                                                                            return abort(
                                                                                ['unknown option', $['option']['value']],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                    'rows': _p_change_context(
                                                        $.__get_entry_deprecated(
                                                            'rows',
                                                            {
                                                                no_such_entry: ($) => abort(
                                                                    ['no such entry', "rows"],
                                                                ),
                                                            },
                                                        ),
                                                        ($) => _p.list.from.list(
                                                            v_unmarshalled_from_parse_tree.List(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a list', null],
                                                                ),
                                                            ),
                                                        ).map(
                                                            ($) => _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null],
                                                                    ),
                                                                ),
                                                                ($) => ({
                                                                    'classes': _p_change_context(
                                                                        $.__get_entry_deprecated(
                                                                            'classes',
                                                                            {
                                                                                no_such_entry: ($) => abort(
                                                                                    ['no such entry', "classes"],
                                                                                ),
                                                                            },
                                                                        ),
                                                                        ($) => Classes(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    'type': _p_change_context(
                                                                        $.__get_entry_deprecated(
                                                                            'type',
                                                                            {
                                                                                no_such_entry: ($) => abort(
                                                                                    ['no such entry', "type"],
                                                                                ),
                                                                            },
                                                                        ),
                                                                        ($) => _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a state', null],
                                                                                ),
                                                                            ),
                                                                            ($) => _p.decide.text(
                                                                                $['option']['value'],
                                                                                ($t): t_out.Flow_Content.L.table.sections.L.rows.L.type_ => {
                                                                                    switch ($t) {
                                                                                        case 'th':
                                                                                            return _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['th', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a nothing', null],
                                                                                                    ),
                                                                                                )],
                                                                                            )
                                                                                        case 'td':
                                                                                            return _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['td', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a nothing', null],
                                                                                                    ),
                                                                                                )],
                                                                                            )
                                                                                        default:
                                                                                            return abort(
                                                                                                ['unknown option', $['option']['value']],
                                                                                            )
                                                                                    }
                                                                                },
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    'height': _p_change_context(
                                                                        $.__get_entry_deprecated(
                                                                            'height',
                                                                            {
                                                                                no_such_entry: ($) => abort(
                                                                                    ['no such entry', "height"],
                                                                                ),
                                                                            },
                                                                        ),
                                                                        ($) => _p.optional.from.optional(
                                                                            v_unmarshalled_from_parse_tree.Optional(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected an optional', null],
                                                                                ),
                                                                            ),
                                                                        ).map(
                                                                            ($) => v_deserialize_number.deserialize(
                                                                                _p_list_from_text(
                                                                                    v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => $,
                                                                                ),
                                                                                ($) => abort(
                                                                                    ['not a valid number', null],
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    'cells': _p_change_context(
                                                                        $.__get_entry_deprecated(
                                                                            'cells',
                                                                            {
                                                                                no_such_entry: ($) => abort(
                                                                                    ['no such entry', "cells"],
                                                                                ),
                                                                            },
                                                                        ),
                                                                        ($) => _p.list.from.list(
                                                                            v_unmarshalled_from_parse_tree.List(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a list', null],
                                                                                ),
                                                                            ),
                                                                        ).map(
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a group', null],
                                                                                    ),
                                                                                ),
                                                                                ($) => ({
                                                                                    'classes': _p_change_context(
                                                                                        $.__get_entry_deprecated(
                                                                                            'classes',
                                                                                            {
                                                                                                no_such_entry: ($) => abort(
                                                                                                    ['no such entry', "classes"],
                                                                                                ),
                                                                                            },
                                                                                        ),
                                                                                        ($) => Classes(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                    'content': _p_change_context(
                                                                                        $.__get_entry_deprecated(
                                                                                            'content',
                                                                                            {
                                                                                                no_such_entry: ($) => abort(
                                                                                                    ['no such entry', "content"],
                                                                                                ),
                                                                                            },
                                                                                        ),
                                                                                        ($) => Flow_Content(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                }),
                                                                            ),
                                                                        ),
                                                                    ),
                                                                }),
                                                            ),
                                                        ),
                                                    ),
                                                }),
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        )
                    case 'span':
                        return _p_change_context(
                            $['value'],
                            ($) => ['span', Phrasing_Content(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        )
                    case 'label':
                        return _p_change_context(
                            $['value'],
                            ($) => ['label', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'classes': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'classes',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "classes"],
                                                ),
                                            },
                                        ),
                                        ($) => Classes(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'text': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'text',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "text"],
                                                ),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null],
                                            ),
                                        ),
                                    ),
                                    'content': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'content',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "content"],
                                                ),
                                            },
                                        ),
                                        ($) => Flow_Content(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        )
                    case 'img':
                        return _p_change_context(
                            $['value'],
                            ($) => ['img', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'classes': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'classes',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "classes"],
                                                ),
                                            },
                                        ),
                                        ($) => Classes(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'src': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'src',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "src"],
                                                ),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null],
                                            ),
                                        ),
                                    ),
                                    'alt': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'alt',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "alt"],
                                                ),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null],
                                            ),
                                        ),
                                    ),
                                    'width': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'width',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "width"],
                                                ),
                                            },
                                        ),
                                        ($) => _p.optional.from.optional(
                                            v_unmarshalled_from_parse_tree.Optional(
                                                $,
                                                ($) => abort(
                                                    ['expected an optional', null],
                                                ),
                                            ),
                                        ).map(
                                            ($) => v_deserialize_number.deserialize(
                                                _p_list_from_text(
                                                    v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
                                                        ),
                                                    ),
                                                    ($) => $,
                                                ),
                                                ($) => abort(
                                                    ['not a valid number', null],
                                                ),
                                            ),
                                        ),
                                    ),
                                    'height': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'height',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "height"],
                                                ),
                                            },
                                        ),
                                        ($) => _p.optional.from.optional(
                                            v_unmarshalled_from_parse_tree.Optional(
                                                $,
                                                ($) => abort(
                                                    ['expected an optional', null],
                                                ),
                                            ),
                                        ).map(
                                            ($) => v_deserialize_number.deserialize(
                                                _p_list_from_text(
                                                    v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
                                                        ),
                                                    ),
                                                    ($) => $,
                                                ),
                                                ($) => abort(
                                                    ['not a valid number', null],
                                                ),
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        )
                    case 'svg':
                        return _p_change_context(
                            $['value'],
                            ($) => ['svg', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'classes': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'classes',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "classes"],
                                                ),
                                            },
                                        ),
                                        ($) => Classes(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'content': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'content',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "content"],
                                                ),
                                            },
                                        ),
                                        ($) => v_external_xml.Mixed_Content(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'width': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'width',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "width"],
                                                ),
                                            },
                                        ),
                                        ($) => _p.optional.from.optional(
                                            v_unmarshalled_from_parse_tree.Optional(
                                                $,
                                                ($) => abort(
                                                    ['expected an optional', null],
                                                ),
                                            ),
                                        ).map(
                                            ($) => v_deserialize_number.deserialize(
                                                _p_list_from_text(
                                                    v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
                                                        ),
                                                    ),
                                                    ($) => $,
                                                ),
                                                ($) => abort(
                                                    ['not a valid number', null],
                                                ),
                                            ),
                                        ),
                                    ),
                                    'height': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'height',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "height"],
                                                ),
                                            },
                                        ),
                                        ($) => _p.optional.from.optional(
                                            v_unmarshalled_from_parse_tree.Optional(
                                                $,
                                                ($) => abort(
                                                    ['expected an optional', null],
                                                ),
                                            ),
                                        ).map(
                                            ($) => v_deserialize_number.deserialize(
                                                _p_list_from_text(
                                                    v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
                                                        ),
                                                    ),
                                                    ($) => $,
                                                ),
                                                ($) => abort(
                                                    ['not a valid number', null],
                                                ),
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        )
                    default:
                        return abort(
                            ['unknown option', $['option']['value']],
                        )
                }
            },
        ),
    ),
)

export const Classes: t_signatures.Classes = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null],
        ),
    ),
).map(
    ($) => v_unmarshalled_from_parse_tree.Text(
        $,
        ($) => abort(
            ['expected a text', null],
        ),
    ),
)

export const Phrasing_Content: t_signatures.Phrasing_Content = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null],
        ),
    ),
).map(
    ($) => Phrasing_Element(
        $,
        ($) => abort(
            $,
        ),
    ),
)

export const Phrasing_Element: t_signatures.Phrasing_Element = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Phrasing_Element => {
            switch ($t) {
                case 'span':
                    return _p_change_context(
                        $['value'],
                        ($) => ['span', Phrasing_Content(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'classified span':
                    return _p_change_context(
                        $['value'],
                        ($) => ['classified span', _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'classes': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'classes',
                                        {
                                            no_such_entry: ($) => abort(
                                                ['no such entry', "classes"],
                                            ),
                                        },
                                    ),
                                    ($) => Classes(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                                'content': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'content',
                                        {
                                            no_such_entry: ($) => abort(
                                                ['no such entry', "content"],
                                            ),
                                        },
                                    ),
                                    ($) => Phrasing_Content(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                            }),
                        )],
                    )
                case 'titled span':
                    return _p_change_context(
                        $['value'],
                        ($) => ['titled span', _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'title': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'title',
                                        {
                                            no_such_entry: ($) => abort(
                                                ['no such entry', "title"],
                                            ),
                                        },
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                ),
                                'content': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'content',
                                        {
                                            no_such_entry: ($) => abort(
                                                ['no such entry', "content"],
                                            ),
                                        },
                                    ),
                                    ($) => Phrasing_Content(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                            }),
                        )],
                    )
                case 'a':
                    return _p_change_context(
                        $['value'],
                        ($) => ['a', _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'text': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'text',
                                        {
                                            no_such_entry: ($) => abort(
                                                ['no such entry', "text"],
                                            ),
                                        },
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                ),
                                'href': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'href',
                                        {
                                            no_such_entry: ($) => abort(
                                                ['no such entry', "href"],
                                            ),
                                        },
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                ),
                            }),
                        )],
                    )
                case 'p':
                    return _p_change_context(
                        $['value'],
                        ($) => ['p', _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'text': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'text',
                                        {
                                            no_such_entry: ($) => abort(
                                                ['no such entry', "text"],
                                            ),
                                        },
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                ),
                            }),
                        )],
                    )
                default:
                    return abort(
                        ['unknown option', $['option']['value']],
                    )
            }
        },
    ),
)
