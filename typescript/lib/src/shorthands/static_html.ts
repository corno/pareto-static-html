import * as pt from 'pareto-core-shorthands/dist/unconstrained'
import * as p_di from 'pareto-core/dist/data/interface'

import * as d_target from "../interface/generated/liana/schemas/static-html/data"
import * as d_target_xml from "../interface/generated/liana/schemas/xml/data"


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
        sections: pt.Raw_Or_Normal_List<d_target.Flow_Element>,
    ): d_target.Flow_Element => ['div', pt.list.literal(sections)]

    export const dimensioned_div = (
        width: p_di.Optional_Value<number>,
        height: p_di.Optional_Value<number>,
        sections: pt.Raw_Or_Normal_List<d_target.Flow_Element>,
    ): d_target.Flow_Element => ['dimensioned div', {
        'width': width,
        'height': height,
        'content': pt.list.literal(sections),
    }]

    export const classified_div = (
        classes: pt.Raw_Or_Normal_List<string>,
        sections: pt.Raw_Or_Normal_List<d_target.Flow_Element>,
    ): d_target.Flow_Element => ['classified div', {
        'classes': pt.list.literal(classes),
        'content': pt.list.literal(sections),
    }]

    export const span = (
        sections: pt.Raw_Or_Normal_List<d_target.Phrasing_Content.L>,
    ): d_target.Flow_Element => ['span', pt.list.literal(sections)]

    export const label = (
        classes: pt.Raw_Or_Normal_List<string>,
        text: string,
        sections: pt.Raw_Or_Normal_List<d_target.Flow_Element>,
    ): d_target.Flow_Element => ['label', {
        'classes': pt.list.literal(classes),
        'text': text,
        'content': pt.list.literal(sections),
    }]

    export const img = (
        classes: pt.Raw_Or_Normal_List<string>,
        src: string,
        alt: string,
        width: p_di.Optional_Value<number>,
        height: p_di.Optional_Value<number>,
    ): d_target.Flow_Element => ['img', {
        'classes': pt.list.literal(classes),
        'src': src,
        'alt': alt,
        'width': width,
        'height': height,
    }]

    export const svg = (
        classes: pt.Raw_Or_Normal_List<string>,
        content: d_target_xml.Mixed_Content,
        width: p_di.Optional_Value<number>,
        height: p_di.Optional_Value<number>,
    ): d_target.Flow_Element => ['svg', {
        'classes': pt.list.literal(classes),
        'content': content,
        'width': width,
        'height': height,
    }]

    export const table = (
        classes: pt.Raw_Or_Normal_List<string>,
        sections: pt.Raw_Or_Normal_List<d_target.Flow_Element.table.sections.L>,
    ): d_target.Flow_Element => ['table', {
        'classes': pt.list.literal(classes),
        'sections': pt.list.literal(sections),
    }]
}

/**
 * table elements
 */
export namespace t { //table

    export const header = (
        classes: pt.Raw_Or_Normal_List<string>,
        rows: pt.Raw_Or_Normal_List<d_target.Flow_Element.table.sections.L.rows.L>,
    ): d_target.Flow_Element.table.sections.L => ({
        'classes': pt.list.literal(classes),
        'type': ['header', null],
        'rows': pt.list.literal(rows),
    })

    export const body = (
        classes: pt.Raw_Or_Normal_List<string>,
        rows: pt.Raw_Or_Normal_List<d_target.Flow_Element.table.sections.L.rows.L>,
    ): d_target.Flow_Element.table.sections.L => ({
        'classes': pt.list.literal(classes),
        'type': ['body', null],
        'rows': pt.list.literal(rows),
    })

    export const footer = (
        classes: pt.Raw_Or_Normal_List<string>,
        rows: pt.Raw_Or_Normal_List<d_target.Flow_Element.table.sections.L.rows.L>,
    ): d_target.Flow_Element.table.sections.L => ({
        'classes': pt.list.literal(classes),
        'type': ['footer', null],
        'rows': pt.list.literal(rows),
    })

    export namespace s { //section

        export const row = (
            classes: pt.Raw_Or_Normal_List<string>,
            height: p_di.Optional_Value<number>,
            cells: pt.Raw_Or_Normal_List<d_target.Flow_Element.table.sections.L.rows.L.cells.L>,
        ): d_target.Flow_Element.table.sections.L.rows.L => ({
            'classes': pt.list.literal(classes),
            'height': height,
            'cells': pt.list.literal(cells),
        })

        export namespace r { //row

            export const td = (
                classes: pt.Raw_Or_Normal_List<string>,
                colspan: p_di.Optional_Value<number>,
                content: pt.Raw_Or_Normal_List<d_target.Flow_Element>,
            ): d_target.Flow_Element.table.sections.L.rows.L.cells.L => ({
                'type': ['td', null],
                'colspan': colspan,
                'classes': pt.list.literal(classes),
                'content': pt.list.literal(content),
            })

            export const th = (
                classes: pt.Raw_Or_Normal_List<string>,
                colspan: p_di.Optional_Value<number>,
                content: pt.Raw_Or_Normal_List<d_target.Flow_Element>,
            ): d_target.Flow_Element.table.sections.L.rows.L.cells.L => ({
                'type': ['th', null],
                'colspan': colspan,
                'classes': pt.list.literal(classes),
                'content': pt.list.literal(content),
            })

        }

    }
}

/**
 * phrasing element
 */
export namespace p_ { //phrasing
    export const span = (
        sections: pt.Raw_Or_Normal_List<d_target.Phrasing_Content.L>,
    ): d_target.Phrasing_Content.L => ['span', pt.list.literal(sections)]

    export const classified_span = (
        classes: pt.Raw_Or_Normal_List<string>,
        sections: pt.Raw_Or_Normal_List<d_target.Phrasing_Content.L>,
    ): d_target.Phrasing_Content.L => ['classified span', {
        'classes': pt.list.literal(classes),
        'content': pt.list.literal(sections),
    }]

    export const titled_span = (
        title: string,
        sections: pt.Raw_Or_Normal_List<d_target.Phrasing_Content.L>,
    ): d_target.Phrasing_Content.L => ['titled span', {
        'title': title,
        'content': pt.list.literal(sections),
    }]

    export const a = (
        text: string,
        href: string,
    ): d_target.Phrasing_Content.L => ['a', {
        'text': text,
        'href': href,
    }]

    export const p_ = (
        text: string
    ): d_target.Phrasing_Content.L => ['p', {
        'text': text,
    }]
}
