
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/static-html/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/static-html/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

import * as v_external_xml from "../../xml/refiners/astn_parse_tree"

export const Document: t_signatures.Document = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "css": null,
                    "root": null,
                },
            ),
            'subdocument context': _p.optional.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.optional.literal.not_set(),
                },
            )
            return {
                'css': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'css',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'root': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'root',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => Flow_Element(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Flow_Element: t_signatures.Flow_Element = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['token']['value'],
        ($t): t_out.Flow_Element => {
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
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "width": null,
                                            "height": null,
                                            "content": null,
                                        },
                                    ),
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'width': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'width',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => _p.optional.from.optional(
                                                v_unmarshalled_from_parse_tree.Optional(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )['optional'],
                                            ).map(
                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'type': ['decimal', null],
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                            ),
                                        ),
                                        'height': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'height',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => _p.optional.from.optional(
                                                v_unmarshalled_from_parse_tree.Optional(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )['optional'],
                                            ).map(
                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'type': ['decimal', null],
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                            ),
                                        ),
                                        'content': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'content',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => Flow_Content(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                case 'classified div':
                    return _p_change_context(
                        $['value'],
                        ($) => ['classified div', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "classes": null,
                                            "content": null,
                                        },
                                    ),
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'classes': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'classes',
                                                    'subdocument context': _p.optional.literal.not_set(),
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
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'content',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => Flow_Content(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                case 'table':
                    return _p_change_context(
                        $['value'],
                        ($) => ['table', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "classes": null,
                                            "sections": null,
                                        },
                                    ),
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'classes': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'classes',
                                                    'subdocument context': _p.optional.literal.not_set(),
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
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'sections',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => _p.list.from.list(
                                                v_unmarshalled_from_parse_tree.List(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                )['items'],
                                            ).map(
                                                ($) => _p_change_context(
                                                    $['value'],
                                                    ($) => _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'expected properties': _p.dictionary.literal(
                                                                    {
                                                                        "classes": null,
                                                                        "type": null,
                                                                        "rows": null,
                                                                    },
                                                                ),
                                                                'subdocument context': _p.optional.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_variables(
                                                            () => {
                                                                
                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                    },
                                                                )
                                                                return {
                                                                    'classes': _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'classes',
                                                                                'subdocument context': _p.optional.literal.not_set(),
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
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'type',
                                                                                'subdocument context': _p.optional.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        ($) => _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                            ($) => _p.decide.text(
                                                                                $['option']['token']['value'],
                                                                                ($t): t_out.Flow_Element.table.sections.L.type_ => {
                                                                                    switch ($t) {
                                                                                        case 'header':
                                                                                            return _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['header', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                )],
                                                                                            )
                                                                                        case 'body':
                                                                                            return _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['body', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                )],
                                                                                            )
                                                                                        case 'footer':
                                                                                            return _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['footer', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                )],
                                                                                            )
                                                                                        default:
                                                                                            return abort(
                                                                                                ['liana', {
                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                        $['value'],
                                                                                                        {
                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                }],
                                                                                            )
                                                                                    }
                                                                                },
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    'rows': _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'rows',
                                                                                'subdocument context': _p.optional.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        ($) => _p.list.from.list(
                                                                            v_unmarshalled_from_parse_tree.List(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                },
                                                                            )['items'],
                                                                        ).map(
                                                                            ($) => _p_change_context(
                                                                                $['value'],
                                                                                ($) => _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        {
                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                {
                                                                                                    "classes": null,
                                                                                                    "type": null,
                                                                                                    "height": null,
                                                                                                    "cells": null,
                                                                                                },
                                                                                            ),
                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    ($) => _p_variables(
                                                                                        () => {
                                                                                            
                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                $['value'],
                                                                                                {
                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                },
                                                                                            )
                                                                                            return {
                                                                                                'classes': _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'id': 'classes',
                                                                                                            'subdocument context': _p.optional.literal.not_set(),
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
                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'id': 'type',
                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                        ($) => _p.decide.text(
                                                                                                            $['option']['token']['value'],
                                                                                                            ($t): t_out.Flow_Element.table.sections.L.rows.L.type_ => {
                                                                                                                switch ($t) {
                                                                                                                    case 'th':
                                                                                                                        return _p_change_context(
                                                                                                                            $['value'],
                                                                                                                            ($) => ['th', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            )],
                                                                                                                        )
                                                                                                                    case 'td':
                                                                                                                        return _p_change_context(
                                                                                                                            $['value'],
                                                                                                                            ($) => ['td', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            )],
                                                                                                                        )
                                                                                                                    default:
                                                                                                                        return abort(
                                                                                                                            ['liana', {
                                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                    $['value'],
                                                                                                                                    {
                                                                                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                            }],
                                                                                                                        )
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'height': _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'id': 'height',
                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => _p.optional.from.optional(
                                                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        )['optional'],
                                                                                                    ).map(
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                'subdocument context': _p.optional.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'cells': _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'id': 'cells',
                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => _p.list.from.list(
                                                                                                        v_unmarshalled_from_parse_tree.List(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'subdocument context': _p.optional.literal.not_set(),
                                                                                                            },
                                                                                                        )['items'],
                                                                                                    ).map(
                                                                                                        ($) => _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => _p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                            {
                                                                                                                                "classes": null,
                                                                                                                                "content": null,
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                                                                    },
                                                                                                                ),
                                                                                                                ($) => _p_variables(
                                                                                                                    () => {
                                                                                                                        
                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                            $['value'],
                                                                                                                            {
                                                                                                                                'subdocument context': _p.optional.literal.not_set(),
                                                                                                                            },
                                                                                                                        )
                                                                                                                        return {
                                                                                                                            'classes': _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'id': 'classes',
                                                                                                                                        'subdocument context': _p.optional.literal.not_set(),
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
                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'id': 'content',
                                                                                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => Flow_Content(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        }
                                                                                                                    },
                                                                                                                ),
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            }
                                                                                        },
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    ),
                                                                }
                                                            },
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
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
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "classes": null,
                                            "text": null,
                                            "content": null,
                                        },
                                    ),
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'classes': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'classes',
                                                    'subdocument context': _p.optional.literal.not_set(),
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
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'text',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'content': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'content',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => Flow_Content(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                case 'img':
                    return _p_change_context(
                        $['value'],
                        ($) => ['img', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "classes": null,
                                            "src": null,
                                            "alt": null,
                                            "width": null,
                                            "height": null,
                                        },
                                    ),
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'classes': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'classes',
                                                    'subdocument context': _p.optional.literal.not_set(),
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
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'src',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'alt': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'alt',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'width': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'width',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => _p.optional.from.optional(
                                                v_unmarshalled_from_parse_tree.Optional(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )['optional'],
                                            ).map(
                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'type': ['decimal', null],
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                            ),
                                        ),
                                        'height': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'height',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => _p.optional.from.optional(
                                                v_unmarshalled_from_parse_tree.Optional(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )['optional'],
                                            ).map(
                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'type': ['decimal', null],
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                case 'svg':
                    return _p_change_context(
                        $['value'],
                        ($) => ['svg', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "classes": null,
                                            "content": null,
                                            "width": null,
                                            "height": null,
                                        },
                                    ),
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'classes': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'classes',
                                                    'subdocument context': _p.optional.literal.not_set(),
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
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'content',
                                                    'subdocument context': _p.optional.literal.not_set(),
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
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'width',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => _p.optional.from.optional(
                                                v_unmarshalled_from_parse_tree.Optional(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )['optional'],
                                            ).map(
                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'type': ['decimal', null],
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                            ),
                                        ),
                                        'height': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'height',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => _p.optional.from.optional(
                                                v_unmarshalled_from_parse_tree.Optional(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )['optional'],
                                            ).map(
                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'type': ['decimal', null],
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Flow_Content: t_signatures.Flow_Content = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': _p.optional.literal.not_set(),
        },
    )['items'],
).map(
    ($) => _p_change_context(
        $['value'],
        ($) => Flow_Element(
            $,
            ($) => abort(
                $,
            ),
        ),
    ),
)

export const Classes: t_signatures.Classes = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': _p.optional.literal.not_set(),
        },
    )['items'],
).map(
    ($) => _p_change_context(
        $['value'],
        ($) => v_unmarshalled_from_parse_tree.Text(
            $,
            ($) => abort(
                $,
            ),
        ),
    ),
)

export const Phrasing_Content: t_signatures.Phrasing_Content = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': _p.optional.literal.not_set(),
        },
    )['items'],
).map(
    ($) => _p_change_context(
        $['value'],
        ($) => Phrasing_Element(
            $,
            ($) => abort(
                $,
            ),
        ),
    ),
)

export const Phrasing_Element: t_signatures.Phrasing_Element = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['token']['value'],
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
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "classes": null,
                                            "content": null,
                                        },
                                    ),
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'classes': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'classes',
                                                    'subdocument context': _p.optional.literal.not_set(),
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
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'content',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => Phrasing_Content(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                case 'titled span':
                    return _p_change_context(
                        $['value'],
                        ($) => ['titled span', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "title": null,
                                            "content": null,
                                        },
                                    ),
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'title': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'title',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'content': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'content',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => Phrasing_Content(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                case 'a':
                    return _p_change_context(
                        $['value'],
                        ($) => ['a', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "text": null,
                                            "href": null,
                                        },
                                    ),
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'text': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'text',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'href': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'href',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                case 'p':
                    return _p_change_context(
                        $['value'],
                        ($) => ['p', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "text": null,
                                        },
                                    ),
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'text': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'text',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)
