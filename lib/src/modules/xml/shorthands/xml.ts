import * as _p from 'pareto-core-shorthands/dist/unconstrained'
import * as _pi from 'pareto-core/dist/interface'

import * as d_target from "../../../interface/generated/liana/schemas/xml/data"

export const document = (
    doc_type: null | string,
    root: d_target.Element,
): d_target.Document => ({
    'doc type': doc_type === null
        ? _p.optional.literal.not_set()
        : _p.optional.literal.set({
            'name': doc_type,
        }),
    'root': root
})

export const attribute = (
    name: string,
    value: string,
): d_target.Element.attributes.L => ({
    'name': {
        'namespace prefix': _p.optional.literal.not_set(),
        'local name': name,
    },
    'value': value,
})

export namespace e { //element

    export const empty = (
        name: string,
        attributes: _p.Raw_Or_Normal_List<d_target.Element.attributes.L>,
    ): d_target.Element => ({
        'name': {
            'namespace prefix': _p.optional.literal.not_set(),
            'local name': name,
        },
        'attributes': _p.list.literal(attributes),
        'content type': ['empty', null],
    })

    export const text_only = (
        name: string,
        attributes: _p.Raw_Or_Normal_List<d_target.Element.attributes.L>,
        text: string,
    ): d_target.Element => ({
        'name': {
            'namespace prefix': _p.optional.literal.not_set(),
            'local name': name,
        },
        'attributes': _p.list.literal(attributes),
        'content type': ['text only', {
            'value': text,
        }]
    })

    export const mixed = (
        name: string,
        attributes: _p.Raw_Or_Normal_List<d_target.Element.attributes.L>,
        children: _p.Raw_Or_Normal_List<d_target.Mixed_Content.L>,
    ): d_target.Element => ({
        'name': {
            'namespace prefix': _p.optional.literal.not_set(),
            'local name': name,
        },
        'attributes': _p.list.literal(attributes),
        'content type': ['mixed', _p.list.literal(children)]
    })

    export const nodes_only = (
        name: string,
        attributes: _p.Raw_Or_Normal_List<d_target.Element.attributes.L>,
        children: _p.Raw_Or_Normal_List<d_target.Element.content_type.nodes_only.children.L>,
    ): d_target.Element => ({
        'name': {
            'namespace prefix': _p.optional.literal.not_set(),
            'local name': name,
        },
        'attributes': _p.list.literal(attributes),
        'content type': ['nodes only', {
            'children': _p.list.literal(children),
        }]
    })

}

export namespace m { //mixed

    export const element = (
        element: d_target.Element,
    ): d_target.Mixed_Content.L => ['node', ['element', element]]

    export const text = (
        text: string,
    ): d_target.Mixed_Content.L => ['text', {
        'value': text,
    }]

    export const node = (
        node: d_target.Node,
    ): d_target.Mixed_Content.L => ['node', node]

}

export namespace no { //nodes only

    export const element = (
        element: d_target.Element,
    ): d_target.Element.content_type.nodes_only.children.L => ['element', element]

    // export const node = (
    //     node: d_target.Node,
    // ): d_target.Element.content_type.nodes_only.children.L => ['node', node]

}

