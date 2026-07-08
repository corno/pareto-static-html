import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as d_target from "../../interface/generated/liana/schemas/static-html/data.js"
import type * as d_target_xml from "../../interface/generated/liana/schemas/xml/data.js"


export const document = (
    css: string,
    root: d_target.Flow_Element
): d_target.Document => ({
    'css': css,
    'root': root,
})

/**
 * flow elements
 */
export namespace f { //flow

    export const div = (
        sections: p_.Normal_List<d_target.Flow_Element>,
    ): d_target.Flow_Element => ['div', p_.list(sections)]

    export const dimensioned_div = (
        width: d_target.Flow_Element.dimensioned_div.width,
        height: d_target.Flow_Element.dimensioned_div.height,
        sections: p_.Normal_List<d_target.Flow_Element>,
    ): d_target.Flow_Element => ['dimensioned div', {
        'width': width,
        'height': height,
        'content': p_.list(sections),
    }]

    export const classified_div = (
        classes: p_.Normal_List<string>,
        sections: p_.Normal_List<d_target.Flow_Element>,
    ): d_target.Flow_Element => ['classified div', {
        'classes': p_.list(classes),
        'content': p_.list(sections),
    }]

    export const span = (
        sections: p_.Normal_List<d_target.Phrasing_Content.L>,
    ): d_target.Flow_Element => ['span', p_.list(sections)]

    export const label = (
        classes: p_.Normal_List<string>,
        text: string,
        sections: p_.Normal_List<d_target.Flow_Element>,
    ): d_target.Flow_Element => ['label', {
        'classes': p_.list(classes),
        'text': text,
        'content': p_.list(sections),
    }]

    export const img = (
        classes: p_.Normal_List<string>,
        src: string,
        alt: string,
        width: d_target.Flow_Element.img.width,
        height: d_target.Flow_Element.img.height,
    ): d_target.Flow_Element => ['img', {
        'classes': p_.list(classes),
        'src': src,
        'alt': alt,
        'width': width,
        'height': height,
    }]

    export const svg = (
        classes: p_.Normal_List<string>,
        content: d_target_xml.Mixed_Content,
        width: d_target.Flow_Element.svg.width,
        height: d_target.Flow_Element.svg.height,
    ): d_target.Flow_Element => ['svg', {
        'classes': p_.list(classes),
        'content': content,
        'width': width,
        'height': height,
    }]

    export const table = (
        classes: p_.Normal_List<string>,
        sections: p_.Normal_List<d_target.Flow_Element.table.sections.L>,
    ): d_target.Flow_Element => ['table', {
        'classes': p_.list(classes),
        'sections': p_.list(sections),
    }]
}

/**
 * table elements
 */
export namespace t { //table

    export const header = (
        classes: p_.Normal_List<string>,
        rows: p_.Normal_List<d_target.Flow_Element.table.sections.L.rows.L>,
    ): d_target.Flow_Element.table.sections.L => ({
        'classes': p_.list(classes),
        'type': ['header', null],
        'rows': p_.list(rows),
    })

    export const body = (
        classes: p_.Normal_List<string>,
        rows: p_.Normal_List<d_target.Flow_Element.table.sections.L.rows.L>,
    ): d_target.Flow_Element.table.sections.L => ({
        'classes': p_.list(classes),
        'type': ['body', null],
        'rows': p_.list(rows),
    })

    export const footer = (
        classes: p_.Normal_List<string>,
        rows: p_.Normal_List<d_target.Flow_Element.table.sections.L.rows.L>,
    ): d_target.Flow_Element.table.sections.L => ({
        'classes': p_.list(classes),
        'type': ['footer', null],
        'rows': p_.list(rows),
    })

    export namespace s { //section

        export const row = (
            classes: p_.Normal_List<string>,
            height: d_target.Flow_Element.table.sections.L.rows.L.height,
            cells: p_.Normal_List<d_target.Flow_Element.table.sections.L.rows.L.cells.L>,
        ): d_target.Flow_Element.table.sections.L.rows.L => ({
            'classes': p_.list(classes),
            'height': height,
            'cells': p_.list(cells),
        })

        export namespace r { //row

            export const td = (
                classes: p_.Normal_List<string>,
                colspan: d_target.Flow_Element.table.sections.L.rows.L.cells.L.colspan,
                content: p_.Normal_List<d_target.Flow_Element>,
            ): d_target.Flow_Element.table.sections.L.rows.L.cells.L => ({
                'type': ['td', null],
                'colspan': colspan,
                'classes': p_.list(classes),
                'content': p_.list(content),
            })

            export const th = (
                classes: p_.Normal_List<string>,
                colspan: d_target.Flow_Element.table.sections.L.rows.L.cells.L.colspan,
                content: p_.Normal_List<d_target.Flow_Element>,
            ): d_target.Flow_Element.table.sections.L.rows.L.cells.L => ({
                'type': ['th', null],
                'colspan': colspan,
                'classes': p_.list(classes),
                'content': p_.list(content),
            })

        }

    }
}

/**
 * phrasing element
 */
export namespace p { //phrasing
    export const span = (
        sections: p_.Normal_List<d_target.Phrasing_Content.L>,
    ): d_target.Phrasing_Content.L => ['span', p_.list(sections)]

    export const classified_span = (
        classes: p_.Normal_List<string>,
        sections: p_.Normal_List<d_target.Phrasing_Content.L>,
    ): d_target.Phrasing_Content.L => ['classified span', {
        'classes': p_.list(classes),
        'content': p_.list(sections),
    }]

    export const titled_span = (
        title: string,
        sections: p_.Normal_List<d_target.Phrasing_Content.L>,
    ): d_target.Phrasing_Content.L => ['titled span', {
        'title': title,
        'content': p_.list(sections),
    }]

    export const a = (
        text: string,
        href: string,
    ): d_target.Phrasing_Content.L => ['a', {
        'text': text,
        'href': href,
    }]

    export const p = (
        text: string
    ): d_target.Phrasing_Content.L => ['p', {
        'text': text,
    }]
}
