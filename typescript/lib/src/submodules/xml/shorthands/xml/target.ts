import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_target from "../../interface/schemas/xml.js"

export const document = (
    doc_type: null | string,
    root: s_target.Element,
): s_target.Document => ({
    'doc type': doc_type === null
        ? p_.optional.not_set()
        : p_.optional.set({
            'name': doc_type,
        }),
    'root': root
})

export const attribute = (
    name: string,
    value: string,
): s_target.Element.attributes.L => ({
    'name': {
        'namespace prefix': p_.optional.not_set(),
        'local name': name,
    },
    'value': value,
})

export namespace e { //element

    export const empty = (
        name: string,
        attributes: p_.Normal_List<s_target.Element.attributes.L>,
    ): s_target.Element => ({
        'name': {
            'namespace prefix': p_.optional.not_set(),
            'local name': name,
        },
        'attributes': p_.list(attributes),
        'content type': ['empty', p_.nothing()],
    })

    export const text_only = (
        name: string,
        attributes: p_.Normal_List<s_target.Element.attributes.L>,
        text: string,
    ): s_target.Element => ({
        'name': {
            'namespace prefix': p_.optional.not_set(),
            'local name': name,
        },
        'attributes': p_.list(attributes),
        'content type': ['text only', {
            'value': text,
        }]
    })

    export const mixed = (
        name: string,
        attributes: p_.Normal_List<s_target.Element.attributes.L>,
        children: p_.Normal_List<s_target.Mixed_Content.L>,
    ): s_target.Element => ({
        'name': {
            'namespace prefix': p_.optional.not_set(),
            'local name': name,
        },
        'attributes': p_.list(attributes),
        'content type': ['mixed', p_.list(children)]
    })

    export const nodes_only = (
        name: string,
        attributes: p_.Normal_List<s_target.Element.attributes.L>,
        children: p_.Normal_List<s_target.Element.content_type.nodes_only.children.L>,
    ): s_target.Element => ({
        'name': {
            'namespace prefix': p_.optional.not_set(),
            'local name': name,
        },
        'attributes': p_.list(attributes),
        'content type': ['nodes only', {
            'children': p_.list(children),
        }]
    })

}

export namespace m { //mixed

    export const element = (
        element: s_target.Element,
    ): s_target.Mixed_Content.L => ['node', ['element', element]]

    export const text = (
        text: string,
    ): s_target.Mixed_Content.L => ['text', {
        'value': text,
    }]

    export const node = (
        node: s_target.Node,
    ): s_target.Mixed_Content.L => ['node', node]

}

export namespace no { //nodes only

    export const element = (
        element: s_target.Element,
    ): s_target.Element.content_type.nodes_only.children.L => ['element', element]

    // export const node = (
    //     node: s_target.Node,
    // ): s_target.Element.content_type.nodes_only.children.L => ['node', node]

}

