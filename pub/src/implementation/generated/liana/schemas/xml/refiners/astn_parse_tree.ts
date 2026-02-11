
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/xml/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/xml/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/refiners/unmarshalled/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

export const Document: t_signatures.Document = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'doc type': _p_change_context(
            $.__get_entry_deprecated(
                'doc type',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "doc type"],
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
                ($) => _p_change_context(
                    v_unmarshalled_from_parse_tree.Group(
                        $,
                        ($) => abort(
                            ['expected a group', null],
                        ),
                    ),
                    ($) => ({
                        'name': _p_change_context(
                            $.__get_entry_deprecated(
                                'name',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "name"],
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
            ($) => Element(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const Element: t_signatures.Element = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'name': _p_change_context(
            $.__get_entry_deprecated(
                'name',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "name"],
                    ),
                },
            ),
            ($) => Qualified_Name(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'attributes': _p_change_context(
            $.__get_entry_deprecated(
                'attributes',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "attributes"],
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
                        'name': _p_change_context(
                            $.__get_entry_deprecated(
                                'name',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "name"],
                                    ),
                                },
                            ),
                            ($) => Qualified_Name(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        ),
                        'value': _p_change_context(
                            $.__get_entry_deprecated(
                                'value',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "value"],
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
                ),
            ),
        ),
        'content type': _p_change_context(
            $.__get_entry_deprecated(
                'content type',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "content type"],
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
                    ($t): t_out.Element.content_type => {
                        switch ($t) {
                            case 'empty':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ['empty', _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => null,
                                    )],
                                )
                            case 'text only':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ['text only', _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'value': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'value',
                                                    {
                                                        no_such_entry: ($) => abort(
                                                            ['no such entry', "value"],
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
                            case 'mixed':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ['mixed', Mixed_Content(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    )],
                                )
                            case 'nodes only':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ['nodes only', _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'children': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'children',
                                                    {
                                                        no_such_entry: ($) => abort(
                                                            ['no such entry', "children"],
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
                                                    ($) => Node(
                                                        $,
                                                        ($) => abort(
                                                            $,
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
        ),
    }),
)

export const Mixed_Content: t_signatures.Mixed_Content = ($, abort) => _p.list.from.list(
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
            ($t): t_out.Mixed_Content.L => {
                switch ($t) {
                    case 'node':
                        return _p_change_context(
                            $['value'],
                            ($) => ['node', Node(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        )
                    case 'text':
                        return _p_change_context(
                            $['value'],
                            ($) => ['text', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'value': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'value',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "value"],
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
    ),
)

export const Qualified_Name: t_signatures.Qualified_Name = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'namespace prefix': _p_change_context(
            $.__get_entry_deprecated(
                'namespace prefix',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "namespace prefix"],
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
                ($) => v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null],
                    ),
                ),
            ),
        ),
        'local name': _p_change_context(
            $.__get_entry_deprecated(
                'local name',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "local name"],
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
)

export const Node: t_signatures.Node = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Node => {
            switch ($t) {
                case 'element':
                    return _p_change_context(
                        $['value'],
                        ($) => ['element', Element(
                            $,
                            ($) => abort(
                                $,
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
)
