import * as pt from 'pareto-core-shorthands/dist/unconstrained'
import p_create_symbol from 'pareto-core/dist/specials/create_symbol'

import * as d_target from "../../../interface/generated/liana/schemas/xml/data"

export const document = (
    doc_type: null | string,
    root: d_target.Element,
): d_target.Document => ({
    'doc type': doc_type === null
        ? pt.optional.not_set()
        : pt.optional.set({
            'name': doc_type,
        }),
    'root': root
})

export const attribute = (
    name: string,
    value: string,
): d_target.Element.attributes.L => ({
    'name': {
        'namespace prefix': pt.optional.not_set(),
        'local name': name,
    },
    'value': value,
})

export namespace e { //element

    export const empty = (
        name: string,
        attributes: pt.Raw_Or_Normal_List<d_target.Element.attributes.L>,
    ): d_target.Element => ({
        'name': {
            'namespace prefix': pt.optional.not_set(),
            'local name': name,
        },
        'attributes': pt.list(attributes),
        'content type': ['empty', p_create_symbol()],
    })

    export const text_only = (
        name: string,
        attributes: pt.Raw_Or_Normal_List<d_target.Element.attributes.L>,
        text: string,
    ): d_target.Element => ({
        'name': {
            'namespace prefix': pt.optional.not_set(),
            'local name': name,
        },
        'attributes': pt.list(attributes),
        'content type': ['text only', {
            'value': text,
        }]
    })

    export const mixed = (
        name: string,
        attributes: pt.Raw_Or_Normal_List<d_target.Element.attributes.L>,
        children: pt.Raw_Or_Normal_List<d_target.Mixed_Content.L>,
    ): d_target.Element => ({
        'name': {
            'namespace prefix': pt.optional.not_set(),
            'local name': name,
        },
        'attributes': pt.list(attributes),
        'content type': ['mixed', pt.list(children)]
    })

    export const nodes_only = (
        name: string,
        attributes: pt.Raw_Or_Normal_List<d_target.Element.attributes.L>,
        children: pt.Raw_Or_Normal_List<d_target.Element.content_type.nodes_only.children.L>,
    ): d_target.Element => ({
        'name': {
            'namespace prefix': pt.optional.not_set(),
            'local name': name,
        },
        'attributes': pt.list(attributes),
        'content type': ['nodes only', {
            'children': pt.list(children),
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

