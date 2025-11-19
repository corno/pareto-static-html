import * as _et from 'exupery-core-types';
import * as _target from "../../../../../interface/generated/pareto/core/parse_result";
import * as s_ast from "../../../../../interface/generated/pareto/core/astn_source";
export declare const parse: ($: string, $p: {
    "tab size": number;
}) => _et.Staging_Result<s_ast._T_Document, _target._T_Parse_Error>;
