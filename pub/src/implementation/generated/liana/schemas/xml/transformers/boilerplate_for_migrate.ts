
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/xml/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/xml/data"

export const Document: t_signatures.Document = ($) => ({
    'doc type': _p_change_context(
        $['doc type'],
        ($) => _p.optional.from.optional(
            $,
        ).map(
            ($) => ({
                'name': _p_change_context(
                    $['name'],
                    ($) => $,
                ),
            }),
        ),
    ),
    'root': _p_change_context(
        $['root'],
        ($) => Element(
            $,
        ),
    ),
})

export const Element: t_signatures.Element = ($) => ({
    'name': _p_change_context(
        $['name'],
        ($) => Qualified_Name(
            $,
        ),
    ),
    'attributes': _p_change_context(
        $['attributes'],
        ($) => _p.list.from.list(
            $,
        ).map(
            ($) => ({
                'name': _p_change_context(
                    $['name'],
                    ($) => Qualified_Name(
                        $,
                    ),
                ),
                'value': _p_change_context(
                    $['value'],
                    ($) => $,
                ),
            }),
        ),
    ),
    'content type': _p_change_context(
        $['content type'],
        ($) => _p.decide.state(
            $,
            ($): t_out.Element.content_type => {
                switch ($[0]) {
                    case 'empty':
                        return _p.ss(
                            $,
                            ($) => ['empty', null],
                        )
                    case 'text only':
                        return _p.ss(
                            $,
                            ($) => ['text only', {
                                'value': _p_change_context(
                                    $['value'],
                                    ($) => $,
                                ),
                            }],
                        )
                    case 'mixed':
                        return _p.ss(
                            $,
                            ($) => ['mixed', Mixed_Content(
                                $,
                            )],
                        )
                    case 'nodes only':
                        return _p.ss(
                            $,
                            ($) => ['nodes only', {
                                'children': _p_change_context(
                                    $['children'],
                                    ($) => _p.list.from.list(
                                        $,
                                    ).map(
                                        ($) => Node(
                                            $,
                                        ),
                                    ),
                                ),
                            }],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        ),
    ),
})

export const Mixed_Content: t_signatures.Mixed_Content = ($) => _p.list.from.list(
    $,
).map(
    ($) => _p.decide.state(
        $,
        ($): t_out.Mixed_Content.L => {
            switch ($[0]) {
                case 'node':
                    return _p.ss(
                        $,
                        ($) => ['node', Node(
                            $,
                        )],
                    )
                case 'text':
                    return _p.ss(
                        $,
                        ($) => ['text', {
                            'value': _p_change_context(
                                $['value'],
                                ($) => $,
                            ),
                        }],
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    ),
)

export const Qualified_Name: t_signatures.Qualified_Name = ($) => ({
    'namespace prefix': _p_change_context(
        $['namespace prefix'],
        ($) => _p.optional.from.optional(
            $,
        ).map(
            ($) => $,
        ),
    ),
    'local name': _p_change_context(
        $['local name'],
        ($) => $,
    ),
})

export const Node: t_signatures.Node = ($) => _p.decide.state(
    $,
    ($): t_out.Node => {
        switch ($[0]) {
            case 'element':
                return _p.ss(
                    $,
                    ($) => ['element', Element(
                        $,
                    )],
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)
