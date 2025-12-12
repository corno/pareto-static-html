import * as _edata from 'exupery-core-data'
import * as _et from 'exupery-core-types'

import * as target from "../interface/generated/pareto/schemas/static-html/data_types/target"

import {
    Raw_Or_Normal_Dictionary,
    Raw_Or_Normal_List,
    wrap_dictionary,
    wrap_list,
    wrap_state_group,
} from 'exupery-core-data/dist/shorthands/unconstrained'

export namespace f { //flow

    export const div = (
        children: Raw_Or_Normal_List<target.Flow_Content.L>,
    ): target.Flow_Content.L => {
        return ['div', wrap_list(children)]
    }

    export const dimensioned_div = (
        width: _et.Optional_Value<number>,
        height: _et.Optional_Value<number>,
        children: Raw_Or_Normal_List<target.Flow_Content.L>,
    ): target.Flow_Content.L => {
        return ['dimensioned div', {
            'width': width,
            'height': height,
            'content': wrap_list(children),
        }]
    }

    export const classified_div = (
        classes: Raw_Or_Normal_List<string>,
        children: Raw_Or_Normal_List<target.Flow_Content.L>,
    ): target.Flow_Content.L => {
        return ['classified div', {
            'classes': wrap_list(classes),
            'content': wrap_list(children),
        }]
    }

    export const span = (
        children: Raw_Or_Normal_List<target.Phrasing_Content.L>,
    ): target.Flow_Content.L => {
        return ['span', wrap_list(children)]
    }

    export const label = (
        classes: Raw_Or_Normal_List<string>,
        text: string,
        children: Raw_Or_Normal_List<target.Flow_Content.L>,
    ): target.Flow_Content.L => {
        return ['label', {
            'classes': wrap_list(classes),
            'text': text,
            'content': wrap_list(children),
        }]
    }

    export const img = (
        classes: Raw_Or_Normal_List<string>,
        src: string,
        alt: string,
        width: _et.Optional_Value<number>,
        height: _et.Optional_Value<number>,
    ): target.Flow_Content.L => {
        return ['img', {
            'classes': wrap_list(classes),
            'src': src,
            'alt': alt,
            'width': width,
            'height': height,
        }]
    }

    export const svg = (
        classes: Raw_Or_Normal_List<string>,
        content: string,
        width: _et.Optional_Value<number>,
        height: _et.Optional_Value<number>,
    ): target.Flow_Content.L => {
        return ['svg', {
            'classes': wrap_list(classes),
            'content': content,
            'width': width,
            'height': height,
        }]
    }

    export const table = (
        classes: Raw_Or_Normal_List<string>,
        children: Raw_Or_Normal_List<target.Flow_Content.L.SG.table.children.L>,
    ): target.Flow_Content.L => {
        return ['table', {
            'classes': wrap_list(classes),
            'children': wrap_list(children),
        }]
    }
}

export namespace t { //table

    export const header = (
        classes: Raw_Or_Normal_List<string>,
        rows: Raw_Or_Normal_List<target.Flow_Content.L.SG.table.children.L.rows.L>,
    ): target.Flow_Content.L.SG.table.children.L => {
        return {
            'classes': wrap_list(classes),
            'type': ['header', null],
            'rows': wrap_list(rows),
        }
    }

    export const body = (
        classes: Raw_Or_Normal_List<string>,
        rows: Raw_Or_Normal_List<target.Flow_Content.L.SG.table.children.L.rows.L>,
    ): target.Flow_Content.L.SG.table.children.L => {
        return {
            'classes': wrap_list(classes),
            'type': ['body', null],
            'rows': wrap_list(rows),
        }
    }

    export const footer = (
        classes: Raw_Or_Normal_List<string>,
        rows: Raw_Or_Normal_List<target.Flow_Content.L.SG.table.children.L.rows.L>,
    ): target.Flow_Content.L.SG.table.children.L => {
        return {
            'classes': wrap_list(classes),
            'type': ['footer', null],
            'rows': wrap_list(rows),
        }
    }

    export const th = (
        classes: Raw_Or_Normal_List<string>,
        height: _et.Optional_Value<number>,
        cells: Raw_Or_Normal_List<target.Flow_Content.L.SG.table.children.L.rows.L.cells.L>,
    ): target.Flow_Content.L.SG.table.children.L.rows.L => {
        return {
            'classes': wrap_list(classes),
            'type': ['th', null],
            'height': height,
            'cells': wrap_list(cells),
        }
    }


    export const td = (
        classes: Raw_Or_Normal_List<string>,
        height: _et.Optional_Value<number>,
        cells: Raw_Or_Normal_List<target.Flow_Content.L.SG.table.children.L.rows.L.cells.L>,
    ): target.Flow_Content.L.SG.table.children.L.rows.L => {
        return {
            'classes': wrap_list(classes),
            'type': ['td', null],
            'height': height,
            'cells': wrap_list(cells),
        }
    }

    export const cell = (
        classes: Raw_Or_Normal_List<string>,
        content: Raw_Or_Normal_List<target.Flow_Content.L>,
    ): target.Flow_Content.L.SG.table.children.L.rows.L.cells.L => {
        return {
            'classes': wrap_list(classes),
            'content': wrap_list(content),
        }
    }
}

export namespace p { //phrasing
    export const span = (
        children: Raw_Or_Normal_List<target.Phrasing_Content.L>,
    ): target.Phrasing_Content.L => {
        return ['span', wrap_list(children)]
    }

    export const classified_span = (
        classes: Raw_Or_Normal_List<string>,
        children: Raw_Or_Normal_List<target.Phrasing_Content.L>,
    ): target.Phrasing_Content.L => {
        return ['classified span', {
            'classes': wrap_list(classes),
            'content': wrap_list(children),
        }]
    }

    export const titled_span = (
        title: string,
        children: Raw_Or_Normal_List<target.Phrasing_Content.L>,
    ): target.Phrasing_Content.L => {
        return ['titled span', {
            'title': title,
            'content': wrap_list(children),
        }]
    }

    export const a = (
        text: string,
        href: string,
    ): target.Phrasing_Content.L => {
        return ['a', {
            'text': text,
            'href': href,
        }]
    }

    export const p = (
        text: string
    ): target.Phrasing_Content.L => {
        return ['p', {
            'text': text,
        }]
    }
}
