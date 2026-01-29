
import * as _p from "pareto-core/dist/serializer"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/static-html/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"

export const Classes: t_signatures.Classes = ($) => v_serialize.Document(
    v_marshall.Classes(
        $
    )
)

export const Phrasing_Content: t_signatures.Phrasing_Content = ($) => v_serialize.Document(
    v_marshall.Phrasing_Content(
        $
    )
)

export const Flow_Content: t_signatures.Flow_Content = ($) => v_serialize.Document(
    v_marshall.Flow_Content(
        $
    )
)

export const Document: t_signatures.Document = ($) => v_serialize.Document(
    v_marshall.Document(
        $
    )
)
