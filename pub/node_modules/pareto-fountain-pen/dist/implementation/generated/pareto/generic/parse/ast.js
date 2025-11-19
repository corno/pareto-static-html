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
exports.Value = exports.Key_Value_Pairs = exports.Elements = exports.Document = exports.String = exports.Structural_Token = void 0;
const _ea = __importStar(require("exupery-core-alg"));
const pg = __importStar(require("./astn_parse_generic"));
//this file contains the parser functionality, each function return a type from the 'ast' schema
const Structural_Token = (token) => {
    return {
        'trailing trivia': token['trailing trivia'],
        'range': {
            'start': token['start'],
            'end': token['end']
        }
    };
};
exports.Structural_Token = Structural_Token;
const String = (token_iterator) => {
    const token = token_iterator['get required token'](_ea.list_literal([['a string', null]]));
    if (token.type[0] !== 'string') {
        return pg.throw_unexpected_token(token, _ea.list_literal([['a string', null]]));
    }
    token_iterator['consume token']();
    return {
        'range': {
            'start': token['start'],
            'end': token['end']
        },
        'value': token.type[1].value,
        'type': token.type[1].type,
        'trailing trivia': token['trailing trivia'],
    };
};
exports.String = String;
const Document = (token_iterator) => {
    return {
        'header': _ea.block(() => {
            const token = token_iterator['get required token'](_ea.list_literal([['!', null], ['a value', null]]));
            if (token.type[0] !== '!') {
                return _ea.not_set();
            }
            token_iterator['consume token']();
            return _ea.set({
                '!': (0, exports.Structural_Token)(token),
                'value': (0, exports.Value)(token_iterator)
            });
        }),
        'content': (0, exports.Value)(token_iterator)
    };
};
exports.Document = Document;
const Elements = (token_iterator, end_reached, end_token) => {
    return _ea.build_list(($i) => {
        while (true) {
            const current_token = token_iterator['get required token'](_ea.list_literal([end_token, ['a value', null]]));
            if (end_reached(current_token.type)) {
                return;
            }
            $i['add element']({
                'value': (0, exports.Value)(token_iterator),
            });
        }
    });
};
exports.Elements = Elements;
const Key_Value_Pairs = (token_iterator, end_reached, end_token) => {
    return _ea.build_list(($i) => {
        while (true) {
            const current_token = token_iterator['get required token'](_ea.list_literal([end_token, ['a string', null]]));
            if (end_reached(current_token.type)) {
                return;
            }
            $i['add element']({
                'key': (0, exports.String)(token_iterator),
                'value': _ea.block(() => {
                    const candidate_colon = token_iterator['get required token'](_ea.list_literal([['a string', null], [':', null], end_token]));
                    if (candidate_colon.type[0] !== ':') {
                        return _ea.not_set();
                    }
                    token_iterator['consume token']();
                    return _ea.set({
                        ':': (0, exports.Structural_Token)(candidate_colon),
                        'value': (0, exports.Value)(token_iterator)
                    });
                }),
                ',': _ea.not_set()
            });
        }
    });
};
exports.Key_Value_Pairs = Key_Value_Pairs;
const Value = (token_iterator) => {
    const token = token_iterator['get required token'](_ea.list_literal([['a value', null]]));
    return _ea.cc(token.type, ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => {
                return ['string', (0, exports.String)(token_iterator)];
            });
            case '{': return _ea.ss($, ($) => {
                token_iterator['consume token']();
                return ['indexed collection', ['dictionary', {
                            '{': (0, exports.Structural_Token)(token),
                            'entries': (0, exports.Key_Value_Pairs)(token_iterator, ($) => $[0] === '}', ['}', null]),
                            '}': _ea.block(() => {
                                const current_token = token_iterator['get required token'](_ea.list_literal([['}', null]]));
                                token_iterator['consume token']();
                                return (0, exports.Structural_Token)(current_token);
                            })
                        }]];
            });
            case '(': return _ea.ss($, ($) => {
                token_iterator['consume token']();
                return ['indexed collection', ['verbose group', {
                            '(': (0, exports.Structural_Token)(token),
                            'entries': (0, exports.Key_Value_Pairs)(token_iterator, ($) => $[0] === ')', [')', null]),
                            ')': _ea.block(() => {
                                const current_token = token_iterator['get required token'](_ea.list_literal([[')', null]]));
                                token_iterator['consume token']();
                                return (0, exports.Structural_Token)(current_token);
                            })
                        }]];
            });
            case '[': return _ea.ss($, ($) => {
                token_iterator['consume token']();
                return ['ordered collection', ['list', {
                            '[': (0, exports.Structural_Token)(token),
                            'elements': (0, exports.Elements)(token_iterator, ($) => $[0] === ']', [']', null]),
                            ']': _ea.block(() => {
                                const current_token = token_iterator['get required token'](_ea.list_literal([[']', null]]));
                                token_iterator['consume token']();
                                return (0, exports.Structural_Token)(current_token);
                            }),
                        }]];
            });
            case '<': return _ea.ss($, ($) => {
                token_iterator['consume token']();
                return ['ordered collection', ['concise group', {
                            '<': (0, exports.Structural_Token)(token),
                            'elements': (0, exports.Elements)(token_iterator, ($) => $[0] === '>', ['>', null]),
                            '>': _ea.block(() => {
                                const current_token = token_iterator['get required token'](_ea.list_literal([['>', null]]));
                                token_iterator['consume token']();
                                return (0, exports.Structural_Token)(current_token);
                            }),
                        }]];
            });
            case '|': return _ea.ss($, ($) => {
                token_iterator['consume token']();
                const token = token_iterator['get required token'](_ea.list_literal([['a value', null], ['#', null]]));
                return ['tagged value', {
                        '|': (0, exports.Structural_Token)(token),
                        'state': (0, exports.String)(token_iterator),
                        'value': (0, exports.Value)(token_iterator)
                    }];
            });
            case '*': return _ea.ss($, ($) => {
                token_iterator['consume token']();
                return ['set optional value', {
                        '*': (0, exports.Structural_Token)(token),
                        'value': (0, exports.Value)(token_iterator)
                    }];
            });
            case '~': return _ea.ss($, ($) => {
                token_iterator['consume token']();
                return ['not set', {
                        '~': (0, exports.Structural_Token)(token),
                    }];
            });
            //unexpected tokens
            case '#': return _ea.ss($, ($) => {
                token_iterator['consume token']();
                return pg.throw_unexpected_token(token, _ea.list_literal([
                    ['a value', null]
                ]));
            });
            case '@': return _ea.ss($, ($) => {
                token_iterator['consume token']();
                return pg.throw_unexpected_token(token, _ea.list_literal([
                    ['a value', null]
                ]));
            });
            case '!': return _ea.ss($, ($) => {
                token_iterator['consume token']();
                return pg.throw_unexpected_token(token, _ea.list_literal([
                    ['a value', null]
                ]));
            });
            case ':': return _ea.ss($, ($) => {
                token_iterator['consume token']();
                return pg.throw_unexpected_token(token, _ea.list_literal([
                    ['a value', null]
                ]));
            });
            case ')': return _ea.ss($, ($) => {
                token_iterator['consume token']();
                return pg.throw_unexpected_token(token, _ea.list_literal([
                    ['a value', null]
                ]));
            });
            case '>': return _ea.ss($, ($) => {
                token_iterator['consume token']();
                return pg.throw_unexpected_token(token, _ea.list_literal([
                    ['a value', null]
                ]));
            });
            case ']': return _ea.ss($, ($) => {
                token_iterator['consume token']();
                return pg.throw_unexpected_token(token, _ea.list_literal([
                    ['a value', null]
                ]));
            });
            case '}': return _ea.ss($, ($) => {
                token_iterator['consume token']();
                return pg.throw_unexpected_token(token, _ea.list_literal([
                    ['a value', null]
                ]));
            });
            default: return _ea.au($[0]);
        }
    });
};
exports.Value = Value;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2ltcGxlbWVudGF0aW9uL2dlbmVyYXRlZC9wYXJldG8vZ2VuZXJpYy9wYXJzZS9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBdUM7QUFPdkMseURBQTBDO0FBRTFDLGdHQUFnRztBQUV6RixNQUFNLGdCQUFnQixHQUFHLENBQUMsS0FBaUMsRUFBK0IsRUFBRTtJQUMvRixPQUFPO1FBQ0gsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1FBQzNDLE9BQU8sRUFBRTtZQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ3ZCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3RCO0tBQ0osQ0FBQTtBQUNMLENBQUMsQ0FBQTtBQVJZLFFBQUEsZ0JBQWdCLG9CQVE1QjtBQUVNLE1BQU0sTUFBTSxHQUFHLENBQUMsY0FBc0MsRUFBcUIsRUFBRTtJQUNoRixNQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDMUYsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDbkYsQ0FBQztJQUNELGNBQWMsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFBO0lBQ2pDLE9BQU87UUFDSCxPQUFPLEVBQUU7WUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQztZ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