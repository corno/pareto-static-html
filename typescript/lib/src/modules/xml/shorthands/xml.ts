import * as p_ from 'pareto-core-shorthands/dist/unconstrained'
import p_create_symbol from 'pareto-core/dist/implementation/specials/create_symbol'

import * as d_target from "../../../interface/generated/liana/schemas/xml/data"

export const document = (
    doc_type: null | string,
    root: d_target.Element,
): d_target.Document => ({
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
): d_target.Element.attributes.L => ({
    'name': {
        'namespace prefix': p_.optional.not_set(),
        'local name': name,
    },
    'value': value,
})

export namespace e { //element

    export const empty = (
        name: string,
        attributes: p_.Raw_Or_Normal_List<d_target.Element.attributes.L>,
    ): d_target.Element => ({
        'name': {
            'namespace prefix': p_.optional.not_set(),
            'local name': name,
        },
        'attributes': p_.list(attributes),
        'content type': ['empty', p_create_symbol()],
    })

    export const text_only = (
        name: string,
        attributes: p_.Raw_Or_Normal_List<d_target.Element.attributes.L>,
        text: string,
    ): d_target.Element => ({
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
        attributes: p_.Raw_Or_Normal_List<d_target.Element.attributes.L>,
        children: p_.Raw_Or_Normal_List<d_target.Mixed_Content.L>,
    ): d_target.Element => ({
        'name': {
            'namespace prefix': p_.optional.not_set(),
            'local name': name,
        },
        'attributes': p_.list(attributes),
        'content type': ['mixed', p_.list(children)]
    })

    export const nodes_only = (
        name: string,
        attributes: p_.Raw_Or_Normal_List<d_target.Element.attributes.L>,
        children: p_.Raw_Or_Normal_List<d_target.Element.content_type.nodes_only.children.L>,
    ): d_target.Element => ({
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

