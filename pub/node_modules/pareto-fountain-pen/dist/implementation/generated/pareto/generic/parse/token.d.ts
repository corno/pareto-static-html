import * as _out from "../../../../../interface/generated/pareto/core/token";
import { String_Iterator } from "./string_iterator";
export declare const Whitespace: (string_iterator: String_Iterator) => _out._T_Whitespace;
export declare const Trivia: (string_iterator: String_Iterator) => _out._T_Trivia;
export declare const Annotated_Token: (st: String_Iterator) => _out._T_Annotated_Token;
export declare const Delimited_String: (string_iterator: String_Iterator, is_end_character: (character: number) => boolean, allow_newlines: boolean) => _out._T_Delimited_String;
export declare const Tokenizer_Result: ($: null, $p: {
    "string iterator": String_Iterator;
}) => _out._T_Tokenizer_Result;
