"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const _ea = __importStar(require("exupery-core-alg"));
const _ei = __importStar(require("exupery-core-internals"));
const d_ast = __importStar(require("./ast"));
const pg = __importStar(require("./astn_parse_generic"));
const si = __importStar(require("./string_iterator"));
const tokenize = __importStar(require("./token"));
const parse = ($, $p) => {
    try {
        const string_iterator = si.create_string_iterator($, {
            'tab size': $p['tab size']
        });
        const tokenizer_result = tokenize.Tokenizer_Result(null, {
            'string iterator': string_iterator
        });
        // tokenizer_result.tokens.__for_each(($) => {
        //     _edev.log_debug_message(`token: ${_ea.cc($.type, ($) => {
        //         switch ($[0]) {
        //             case 'string': return _ea.ss($, ($) => `string: ${$.value.value}`)
        //             default: return `structural: ${$[0]}`
        //         }
        //     })}`)
        // })
        const token_iterator = pg.create_astn_token_iterator(tokenizer_result.tokens, tokenizer_result.end);
        return _ei.data_processing.successful(d_ast.Document(token_iterator));
    }
    catch (error) {
        if (error instanceof pg.Parse_Error_Class) {
            return _ei.data_processing.failed({
                'type': error.type,
                'range': {
                    'start': error.range.start,
                    'end': error.range.end,
                }
            });
        }
        return _ea.deprecated_panic("unknown error thrown");
    }
};
exports.parse = parse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW1wbGVtZW50YXRpb24vZ2VuZXJhdGVkL3BhcmV0by9nZW5lcmljL3BhcnNlL3BhcnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQXVDO0FBRXZDLDREQUE2QztBQUU3Qyw2Q0FBOEI7QUFJOUIseURBQTBDO0FBQzFDLHNEQUF1QztBQUV2QyxrREFBbUM7QUFHNUIsTUFBTSxLQUFLLEdBQUcsQ0FDakIsQ0FBUyxFQUNULEVBRUMsRUFDNEQsRUFBRTtJQUMvRCxJQUFJLENBQUM7UUFDRCxNQUFNLGVBQWUsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxFQUFFO1lBQ2pELFVBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDO1NBQzdCLENBQUMsQ0FBQTtRQUNGLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRTtZQUNyRCxpQkFBaUIsRUFBRSxlQUFlO1NBQ3JDLENBQUMsQ0FBQTtRQUNGLDhDQUE4QztRQUM5QyxnRUFBZ0U7UUFDaEUsMEJBQTBCO1FBQzFCLGlGQUFpRjtRQUNqRixvREFBb0Q7UUFDcEQsWUFBWTtRQUNaLFlBQVk7UUFDWixLQUFLO1FBQ0wsTUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDLDBCQUEwQixDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNuRyxPQUFPLEdBQUcsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTtJQUV6RSxDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksS0FBSyxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBRXhDLE9BQU8sR0FBRyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7Z0JBQzlCLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSTtnQkFDbEIsT0FBTyxFQUFFO29CQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUs7b0JBQzFCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUc7aUJBQ3pCO2FBQ0osQ0FBQyxDQUFBO1FBQ04sQ0FBQztRQUNELE9BQU8sR0FBRyxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLENBQUE7SUFDdkQsQ0FBQztBQUNMLENBQUMsQ0FBQTtBQXJDWSxRQUFBLEtBQUssU0FxQ2pCIn0=