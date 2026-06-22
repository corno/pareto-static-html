
import * as p_ from 'pareto-core/dist/implementation/refiner'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import p_list_from_text from 'pareto-core/dist/implementation/refiner/specials/list_from_text'

import p_variables from 'pareto-core/dist/implementation/refiner/specials/variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/static-html/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/static-html/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

import * as v_external_xml from "../../xml/refiners/astn_parse_tree"

export const Document: t_signatures.Document = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "css": null,
                    "root": null,
                },
            ),
            'subdocument context': p_.literal.not_set(),
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': p_.literal.not_set(),
                },
            )
            return {
                'css': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'css',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'root': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'root',
                            'subdocument context': p_.literal.not_set(),
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

export const Flow_Element: t_signatures.Flow_Element = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_decide_text(
        $['option']['token']['value'],
        ($t): t_out.Flow_Element => {
            switch ($t) {
                case 'div':
                    return p_change_context(
                        $['value'],
                        ($) => ['div', Flow_Content(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'dimensioned div':
                    return p_change_context(
                        $['value'],
                        ($) => ['dimensioned div', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "width": null,
                                            "height": null,
                                            "content": null,
                                        },
                                    ),
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'width': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'width',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
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
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                            ),
                                        ),
                                        'height': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'height',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
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
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                            ),
                                        ),
                                        'content': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'content',
                                                    'subdocument context': p_.literal.not_set(),
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
                    return p_change_context(
                        $['value'],
                        ($) => ['classified div', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "classes": null,
                                            "content": null,
                                        },
                                    ),
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'classes': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'classes',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Classes(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'content': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'content',
                                                    'subdocument context': p_.literal.not_set(),
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
                    return p_change_context(
                        $['value'],
                        ($) => ['table', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "classes": null,
                                            "sections": null,
                                        },
                                    ),
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'classes': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'classes',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Classes(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'sections': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'sections',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_.from.list(v_unmarshalled_from_parse_tree.List(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                )['items'],
                                            ).map(
                                                ($) => p_change_context(
                                                    $['value'],
                                                    ($) => p_change_context(
                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'expected properties': p_.literal.dictionary(
                                                                    {
                                                                        "classes": null,
                                                                        "type": null,
                                                                        "rows": null,
                                                                    },
                                                                ),
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => p_variables(
                                                            () => {
                                                                
                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                )
                                                                return {
                                                                    'classes': p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'classes',
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        ($) => Classes(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    'type': p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'type',
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        ($) => p_change_context(
                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                            ($) => p_decide_text(
                                                                                $['option']['token']['value'],
                                                                                ($t): t_out.Flow_Element.table.sections.L.type_ => {
                                                                                    switch ($t) {
                                                                                        case 'header':
                                                                                            return p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['header', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                )],
                                                                                            )
                                                                                        case 'body':
                                                                                            return p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['body', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                )],
                                                                                            )
                                                                                        case 'footer':
                                                                                            return p_change_context(
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
                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                }],
                                                                                            )
                                                                                    }
                                                                                },
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    'rows': p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'rows',
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        ($) => p_.from.list(v_unmarshalled_from_parse_tree.List(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            )['items'],
                                                                        ).map(
                                                                            ($) => p_change_context(
                                                                                $['value'],
                                                                                ($) => p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        {
                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                {
                                                                                                    "classes": null,
                                                                                                    "height": null,
                                                                                                    "cells": null,
                                                                                                },
                                                                                            ),
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    ($) => p_variables(
                                                                                        () => {
                                                                                            
                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                $['value'],
                                                                                                {
                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                },
                                                                                            )
                                                                                            return {
                                                                                                'classes': p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'id': 'classes',
                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => Classes(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'height': p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'id': 'height',
                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
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
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'cells': p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'id': 'cells',
                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => p_.from.list(v_unmarshalled_from_parse_tree.List(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        )['items'],
                                                                                                    ).map(
                                                                                                        ($) => p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                            {
                                                                                                                                "type": null,
                                                                                                                                "colspan": null,
                                                                                                                                "classes": null,
                                                                                                                                "content": null,
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                ),
                                                                                                                ($) => p_variables(
                                                                                                                    () => {
                                                                                                                        
                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                            $['value'],
                                                                                                                            {
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        )
                                                                                                                        return {
                                                                                                                            'type': p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'id': 'type',
                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                    ($) => p_decide_text(
                                                                                                                                        $['option']['token']['value'],
                                                                                                                                        ($t): t_out.Flow_Element.table.sections.L.rows.L.cells.L.type_ => {
                                                                                                                                            switch ($t) {
                                                                                                                                                case 'th':
                                                                                                                                                    return p_change_context(
                                                                                                                                                        $['value'],
                                                                                                                                                        ($) => ['th', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                $,
                                                                                                                                                            ),
                                                                                                                                                        )],
                                                                                                                                                    )
                                                                                                                                                case 'td':
                                                                                                                                                    return p_change_context(
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
                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                },
                                                                                                                                                            ),
                                                                                                                                                        }],
                                                                                                                                                    )
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            'colspan': p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'id': 'colspan',
                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
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
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            'classes': p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'id': 'classes',
                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => Classes(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            'content': p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'id': 'content',
                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                    return p_change_context(
                        $['value'],
                        ($) => ['span', Phrasing_Content(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'label':
                    return p_change_context(
                        $['value'],
                        ($) => ['label', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "classes": null,
                                            "text": null,
                                            "content": null,
                                        },
                                    ),
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'classes': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'classes',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Classes(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'text': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'text',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'content': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'content',
                                                    'subdocument context': p_.literal.not_set(),
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
                    return p_change_context(
                        $['value'],
                        ($) => ['img', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "classes": null,
                                            "src": null,
                                            "alt": null,
                                            "width": null,
                                            "height": null,
                                        },
                                    ),
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'classes': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'classes',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Classes(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'src': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'src',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'alt': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'alt',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'width': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'width',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
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
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                            ),
                                        ),
                                        'height': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'height',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
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
                                                        'subdocument context': p_.literal.not_set(),
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
                    return p_change_context(
                        $['value'],
                        ($) => ['svg', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "classes": null,
                                            "content": null,
                                            "width": null,
                                            "height": null,
                                        },
                                    ),
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'classes': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'classes',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Classes(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'content': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'content',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => v_external_xml.Mixed_Content(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'width': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'width',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
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
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                            ),
                                        ),
                                        'height': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'height',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
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
                                                        'subdocument context': p_.literal.not_set(),
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
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Flow_Content: t_signatures.Flow_Content = ($, abort) => p_.from.list(v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': p_.literal.not_set(),
        },
    )['items'],
).map(
    ($) => p_change_context(
        $['value'],
        ($) => Flow_Element(
            $,
            ($) => abort(
                $,
            ),
        ),
    ),
)

export const Classes: t_signatures.Classes = ($, abort) => p_.from.list(v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': p_.literal.not_set(),
        },
    )['items'],
).map(
    ($) => p_change_context(
        $['value'],
        ($) => v_unmarshalled_from_parse_tree.Text(
            $,
            ($) => abort(
                $,
            ),
        ),
    ),
)

export const Phrasing_Content: t_signatures.Phrasing_Content = ($, abort) => p_.from.list(v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': p_.literal.not_set(),
        },
    )['items'],
).map(
    ($) => p_change_context(
        $['value'],
        ($) => Phrasing_Element(
            $,
            ($) => abort(
                $,
            ),
        ),
    ),
)

export const Phrasing_Element: t_signatures.Phrasing_Element = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_decide_text(
        $['option']['token']['value'],
        ($t): t_out.Phrasing_Element => {
            switch ($t) {
                case 'span':
                    return p_change_context(
                        $['value'],
                        ($) => ['span', Phrasing_Content(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'classified span':
                    return p_change_context(
                        $['value'],
                        ($) => ['classified span', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "classes": null,
                                            "content": null,
                                        },
                                    ),
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'classes': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'classes',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Classes(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'content': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'content',
                                                    'subdocument context': p_.literal.not_set(),
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
                    return p_change_context(
                        $['value'],
                        ($) => ['titled span', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "title": null,
                                            "content": null,
                                        },
                                    ),
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'title': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'title',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'content': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'content',
                                                    'subdocument context': p_.literal.not_set(),
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
                    return p_change_context(
                        $['value'],
                        ($) => ['a', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "text": null,
                                            "href": null,
                                        },
                                    ),
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'text': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'text',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'href': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'href',
                                                    'subdocument context': p_.literal.not_set(),
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
                    return p_change_context(
                        $['value'],
                        ($) => ['p', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "text": null,
                                        },
                                    ),
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'text': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'text',
                                                    'subdocument context': p_.literal.not_set(),
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
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)
