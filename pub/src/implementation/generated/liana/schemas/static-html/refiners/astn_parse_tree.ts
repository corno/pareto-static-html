
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/static-html/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/static-html/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

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
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
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
)

export const Flow_Content: t_signatures.Flow_Content = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            $,
        ),
    )['items'],
).map(
    ($) => _p_change_context(
        $['value'],
        ($) => _p_change_context(
            v_unmarshalled_from_parse_tree.State(
                $,
                ($) => abort(
                    $,
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
                                        },
                                    ),
                                    ($) => _p_variables(
                                        () => {
                                            
                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                $['value'],
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
                                        },
                                    ),
                                    ($) => _p_variables(
                                        () => {
                                            
                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                $['value'],
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
                                        },
                                    ),
                                    ($) => _p_variables(
                                        () => {
                                            
                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                $['value'],
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
                                                        },
                                                    ),
                                                    ($) => _p.list.from.list(
                                                        v_unmarshalled_from_parse_tree.List(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
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
                                                                    },
                                                                ),
                                                                ($) => _p_variables(
                                                                    () => {
                                                                        
                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                            $['value'],
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
                                                                                        $['option']['value'],
                                                                                        ($t): t_out.Flow_Content.L.table.sections.L.type_ => {
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
                                                                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                            'range': v_parse_tree_to_location.Value(
                                                                                                                $['value'],
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
                                                                                    },
                                                                                ),
                                                                                ($) => _p.list.from.list(
                                                                                    v_unmarshalled_from_parse_tree.List(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
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
                                                                                                },
                                                                                            ),
                                                                                            ($) => _p_variables(
                                                                                                () => {
                                                                                                    
                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                        $['value'],
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
                                                                                                                    $['option']['value'],
                                                                                                                    ($t): t_out.Flow_Content.L.table.sections.L.rows.L.type_ => {
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
                                                                                                                                        'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
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
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => _p.list.from.list(
                                                                                                                v_unmarshalled_from_parse_tree.List(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
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
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => _p_variables(
                                                                                                                            () => {
                                                                                                                                
                                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                    $['value'],
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
                                        },
                                    ),
                                    ($) => _p_variables(
                                        () => {
                                            
                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                $['value'],
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
                                        },
                                    ),
                                    ($) => _p_variables(
                                        () => {
                                            
                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                $['value'],
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
                                        },
                                    ),
                                    ($) => _p_variables(
                                        () => {
                                            
                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                $['value'],
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
                                    'type': ['state', ['unknown option', $['option']['value']]],
                                    'range': v_parse_tree_to_location.Value(
                                        $['value'],
                                    ),
                                }],
                            )
                    }
                },
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
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
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
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
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
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
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
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
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
                            'type': ['state', ['unknown option', $['option']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                        }],
                    )
            }
        },
    ),
)
