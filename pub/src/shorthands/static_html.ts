import * as _pi from 'pareto-core-interface'

import * as target from "../interface/generated/pareto/schemas/static-html/data_types/target"

import {
    Raw_Or_Normal_Dictionary,
    Raw_Or_Normal_List,
    wrap_dictionary,
    wrap_list,
    wrap_state_group,
} from 'pareto-core-shorthands/dist/unconstrained'

export namespace f { //flow

    export const div = (
        sections: Raw_Or_Normal_List<target.Flow_Content.L>,
    ): target.Flow_Content.L => ['div', wrap_list(sections)]

    export const dimensioned_div = (
        width: _pi.Optional_Value<number>,
        height: _pi.Optional_Value<number>,
        sections: Raw_Or_Normal_List<target.Flow_Content.L>,
    ): target.Flow_Content.L => ['dimensioned div', {
        'width': width,
        'height': height,
        'content': wrap_list(sections),
    }]

    export const classified_div = (
        classes: Raw_Or_Normal_List<string>,
        sections: Raw_Or_Normal_List<target.Flow_Content.L>,
    ): target.Flow_Content.L => ['classified div', {
        'classes': wrap_list(classes),
        'content': wrap_list(sections),
    }]

    export const span = (
        sections: Raw_Or_Normal_List<target.Phrasing_Content.L>,
    ): target.Flow_Content.L => ['span', wrap_list(sections)]

    export const label = (
        classes: Raw_Or_Normal_List<string>,
        text: string,
        sections: Raw_Or_Normal_List<target.Flow_Content.L>,
    ): target.Flow_Content.L => ['label', {
        'classes': wrap_list(classes),
        'text': text,
        'content': wrap_list(sections),
    }]

    export const img = (
        classes: Raw_Or_Normal_List<string>,
        src: string,
        alt: string,
        width: _pi.Optional_Value<number>,
        height: _pi.Optional_Value<number>,
    ): target.Flow_Content.L => ['img', {
        'classes': wrap_list(classes),
        'src': src,
        'alt': alt,
        'width': width,
        'height': height,
    }]

    export const svg = (
        classes: Raw_Or_Normal_List<string>,
        content: string,
        width: _pi.Optional_Value<number>,
        height: _pi.Optional_Value<number>,
    ): target.Flow_Content.L => ['svg', {
        'classes': wrap_list(classes),
        'content': content,
        'width': width,
        'height': height,
    }]

    export const table = (
        classes: Raw_Or_Normal_List<string>,
        sections: Raw_Or_Normal_List<target.Flow_Content.L.SG.table.sections.L>,
    ): target.Flow_Content.L => ['table', {
        'classes': wrap_list(classes),
        'sections': wrap_list(sections),
    }]
}

export namespace t { //table

    export const header = (
        classes: Raw_Or_Normal_List<string>,
        rows: Raw_Or_Normal_List<target.Flow_Content.L.SG.table.sections.L.rows.L>,
    ): target.Flow_Content.L.SG.table.sections.L => ({
        'classes': wrap_list(classes),
        'type': ['header', null],
        'rows': wrap_list(rows),
    })

    export const body = (
        classes: Raw_Or_Normal_List<string>,
        rows: Raw_Or_Normal_List<target.Flow_Content.L.SG.table.sections.L.rows.L>,
    ): target.Flow_Content.L.SG.table.sections.L => ({
        'classes': wrap_list(classes),
        'type': ['body', null],
        'rows': wrap_list(rows),
    })

    export const footer = (
        classes: Raw_Or_Normal_List<string>,
        rows: Raw_Or_Normal_List<target.Flow_Content.L.SG.table.sections.L.rows.L>,
    ): target.Flow_Content.L.SG.table.sections.L => ({
        'classes': wrap_list(classes),
        'type': ['footer', null],
        'rows': wrap_list(rows),
    })

    export const th = (
        classes: Raw_Or_Normal_List<string>,
        height: _pi.Optional_Value<number>,
        cells: Raw_Or_Normal_List<target.Flow_Content.L.SG.table.sections.L.rows.L.cells.L>,
    ): target.Flow_Content.L.SG.table.sections.L.rows.L => ({
        'classes': wrap_list(classes),
        'type': ['th', null],
        'height': height,
        'cells': wrap_list(cells),
    })

    export const td = (
        classes: Raw_Or_Normal_List<string>,
        height: _pi.Optional_Value<number>,
        cells: Raw_Or_Normal_List<target.Flow_Content.L.SG.table.sections.L.rows.L.cells.L>,
    ): target.Flow_Content.L.SG.table.sections.L.rows.L => ({
        'classes': wrap_list(classes),
        'type': ['td', null],
        'height': height,
        'cells': wrap_list(cells),
    })

    export const cell = (
        classes: Raw_Or_Normal_List<string>,
        content: Raw_Or_Normal_List<target.Flow_Content.L>,
    ): target.Flow_Content.L.SG.table.sections.L.rows.L.cells.L => ({
        'classes': wrap_list(classes),
        'content': wrap_list(content),
    })
}

export namespace p { //phrasing
    export const span = (
        sections: Raw_Or_Normal_List<target.Phrasing_Content.L>,
    ): target.Phrasing_Content.L => ['span', wrap_list(sections)]

    export const classified_span = (
        classes: Raw_Or_Normal_List<string>,
        sections: Raw_Or_Normal_List<target.Phrasing_Content.L>,
    ): target.Phrasing_Content.L => ['classified span', {
        'classes': wrap_list(classes),
        'content': wrap_list(sections),
    }]

    export const titled_span = (
        title: string,
        sections: Raw_Or_Normal_List<target.Phrasing_Content.L>,
    ): target.Phrasing_Content.L => ['titled span', {
        'title': title,
        'content': wrap_list(sections),
    }]

    export const a = (
        text: string,
        href: string,
    ): target.Phrasing_Content.L => ['a', {
        'text': text,
        'href': href,
    }]

    export const p = (
        text: string
    ): target.Phrasing_Content.L => ['p', {
        'text': text,
    }]
}
