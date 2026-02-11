import * as _p from 'pareto-core-shorthands/dist/unconstrained'
import * as _pi from 'pareto-core/dist/interface'

import * as d_target from "../interface/generated/liana/schemas/static-html/data"
import * as d_target_xml from "../interface/generated/liana/schemas/xml/data"


export namespace f { //flow

    export const div = (
        sections: _p.Raw_Or_Normal_List<d_target.Flow_Content.L>,
    ): d_target.Flow_Content.L => ['div', _p.list.literal(sections)]

    export const dimensioned_div = (
        width: _pi.Optional_Value<number>,
        height: _pi.Optional_Value<number>,
        sections: _p.Raw_Or_Normal_List<d_target.Flow_Content.L>,
    ): d_target.Flow_Content.L => ['dimensioned div', {
        'width': width,
        'height': height,
        'content': _p.list.literal(sections),
    }]

    export const classified_div = (
        classes: _p.Raw_Or_Normal_List<string>,
        sections: _p.Raw_Or_Normal_List<d_target.Flow_Content.L>,
    ): d_target.Flow_Content.L => ['classified div', {
        'classes': _p.list.literal(classes),
        'content': _p.list.literal(sections),
    }]

    export const span = (
        sections: _p.Raw_Or_Normal_List<d_target.Phrasing_Content.L>,
    ): d_target.Flow_Content.L => ['span', _p.list.literal(sections)]

    export const label = (
        classes: _p.Raw_Or_Normal_List<string>,
        text: string,
        sections: _p.Raw_Or_Normal_List<d_target.Flow_Content.L>,
    ): d_target.Flow_Content.L => ['label', {
        'classes': _p.list.literal(classes),
        'text': text,
        'content': _p.list.literal(sections),
    }]

    export const img = (
        classes: _p.Raw_Or_Normal_List<string>,
        src: string,
        alt: string,
        width: _pi.Optional_Value<number>,
        height: _pi.Optional_Value<number>,
    ): d_target.Flow_Content.L => ['img', {
        'classes': _p.list.literal(classes),
        'src': src,
        'alt': alt,
        'width': width,
        'height': height,
    }]

    export const svg = (
        classes: _p.Raw_Or_Normal_List<string>,
        content: d_target_xml.Mixed_Content,
        width: _pi.Optional_Value<number>,
        height: _pi.Optional_Value<number>,
    ): d_target.Flow_Content.L => ['svg', {
        'classes': _p.list.literal(classes),
        'content': content,
        'width': width,
        'height': height,
    }]

    export const table = (
        classes: _p.Raw_Or_Normal_List<string>,
        sections: _p.Raw_Or_Normal_List<d_target.Flow_Content.L.table.sections.L>,
    ): d_target.Flow_Content.L => ['table', {
        'classes': _p.list.literal(classes),
        'sections': _p.list.literal(sections),
    }]
}

export namespace t { //table

    export const header = (
        classes: _p.Raw_Or_Normal_List<string>,
        rows: _p.Raw_Or_Normal_List<d_target.Flow_Content.L.table.sections.L.rows.L>,
    ): d_target.Flow_Content.L.table.sections.L => ({
        'classes': _p.list.literal(classes),
        'type': ['header', null],
        'rows': _p.list.literal(rows),
    })

    export const body = (
        classes: _p.Raw_Or_Normal_List<string>,
        rows: _p.Raw_Or_Normal_List<d_target.Flow_Content.L.table.sections.L.rows.L>,
    ): d_target.Flow_Content.L.table.sections.L => ({
        'classes': _p.list.literal(classes),
        'type': ['body', null],
        'rows': _p.list.literal(rows),
    })

    export const footer = (
        classes: _p.Raw_Or_Normal_List<string>,
        rows: _p.Raw_Or_Normal_List<d_target.Flow_Content.L.table.sections.L.rows.L>,
    ): d_target.Flow_Content.L.table.sections.L => ({
        'classes': _p.list.literal(classes),
        'type': ['footer', null],
        'rows': _p.list.literal(rows),
    })

    export const th = (
        classes: _p.Raw_Or_Normal_List<string>,
        height: _pi.Optional_Value<number>,
        cells: _p.Raw_Or_Normal_List<d_target.Flow_Content.L.table.sections.L.rows.L.cells.L>,
    ): d_target.Flow_Content.L.table.sections.L.rows.L => ({
        'classes': _p.list.literal(classes),
        'type': ['th', null],
        'height': height,
        'cells': _p.list.literal(cells),
    })

    export const td = (
        classes: _p.Raw_Or_Normal_List<string>,
        height: _pi.Optional_Value<number>,
        cells: _p.Raw_Or_Normal_List<d_target.Flow_Content.L.table.sections.L.rows.L.cells.L>,
    ): d_target.Flow_Content.L.table.sections.L.rows.L => ({
        'classes': _p.list.literal(classes),
        'type': ['td', null],
        'height': height,
        'cells': _p.list.literal(cells),
    })

    export const cell = (
        classes: _p.Raw_Or_Normal_List<string>,
        content: _p.Raw_Or_Normal_List<d_target.Flow_Content.L>,
    ): d_target.Flow_Content.L.table.sections.L.rows.L.cells.L => ({
        'classes': _p.list.literal(classes),
        'content': _p.list.literal(content),
    })
}

export namespace p { //phrasing
    export const span = (
        sections: _p.Raw_Or_Normal_List<d_target.Phrasing_Content.L>,
    ): d_target.Phrasing_Content.L => ['span', _p.list.literal(sections)]

    export const classified_span = (
        classes: _p.Raw_Or_Normal_List<string>,
        sections: _p.Raw_Or_Normal_List<d_target.Phrasing_Content.L>,
    ): d_target.Phrasing_Content.L => ['classified span', {
        'classes': _p.list.literal(classes),
        'content': _p.list.literal(sections),
    }]

    export const titled_span = (
        title: string,
        sections: _p.Raw_Or_Normal_List<d_target.Phrasing_Content.L>,
    ): d_target.Phrasing_Content.L => ['titled span', {
        'title': title,
        'content': _p.list.literal(sections),
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
