import * as _et from 'exupery-core-types';
import * as si from "./string_iterator";
import * as _source from "../../../../../interface/generated/pareto/core/token";
import * as d_parse_result from "../../../../../interface/generated/pareto/core/parse_result";
export declare class Parse_Error_Class {
    readonly type: d_parse_result._T_Parse_Error._type;
    readonly range: _source._T_Range;
    constructor(type: d_parse_result._T_Parse_Error._type, range: _source._T_Range);
}
export declare const throw_lexer_error: (type: d_parse_result.Lexer_Error, range: _source._T_Range) => never;
export declare const throw_unexpected_token: (found: _source._T_Annotated_Token, expected: _et.List<d_parse_result.Expected>) => never;
export type ASTN_Token_Iterator = si.Token_Iterator<d_parse_result.Expected, _source._T_Annotated_Token>;
export declare const create_astn_token_iterator: ($: _source._T_Tokenizer_Result.tokens, end: si.Location) => ASTN_Token_Iterator;
