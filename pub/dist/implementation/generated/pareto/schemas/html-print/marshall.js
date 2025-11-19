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
exports.Document = exports.Div = exports.Span = exports.Classes = void 0;
const _pa = __importStar(require("exupery-core-alg"));
const Classes = ($, $p) => ['list', $.map(($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })])];
exports.Classes = Classes;
const Span = ($, $p) => ['verbose group', _pa.dictionary_literal({
        'classes': _pa.cc($['classes'], ($) => (0, exports.Classes)($, {
            'value serializers': $p['value serializers'],
        })),
        'title': _pa.cc($['title'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]], () => ['not set', null])]),
        'children': _pa.cc($['children'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
                    'classes': _pa.cc($['classes'], ($) => (0, exports.Classes)($, {
                        'value serializers': $p['value serializers'],
                    })),
                    'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($) => {
                            switch ($[0]) {
                                case 'span': return _pa.ss($, ($) => ({
                                    'state': "span",
                                    'value': (0, exports.Span)($, {
                                        'value serializers': $p['value serializers'],
                                    }),
                                }));
                                case 'a': return _pa.ss($, ($) => ({
                                    'state': "a",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                            'text': _pa.cc($['text'], ($) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]),
                                            'href': _pa.cc($['href'], ($) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]),
                                        })],
                                }));
                                case 'p': return _pa.ss($, ($) => ({
                                    'state': "p",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                            'text': _pa.cc($['text'], ($) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]),
                                        })],
                                }));
                                default: return _pa.au($[0]);
                            }
                        })]),
                })])]),
    })];
exports.Span = Span;
const Div = ($, $p) => ['verbose group', _pa.dictionary_literal({
        'classes': _pa.cc($['classes'], ($) => (0, exports.Classes)($, {
            'value serializers': $p['value serializers'],
        })),
        'width': _pa.cc($['width'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['default number']($, null),
                    })]], () => ['not set', null])]),
        'height': _pa.cc($['height'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['default number']($, null),
                    })]], () => ['not set', null])]),
        'children': _pa.cc($['children'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
                    'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($) => {
                            switch ($[0]) {
                                case 'div': return _pa.ss($, ($) => ({
                                    'state': "div",
                                    'value': (0, exports.Div)($, {
                                        'value serializers': $p['value serializers'],
                                    }),
                                }));
                                case 'table': return _pa.ss($, ($) => ({
                                    'state': "table",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                            'classes': _pa.cc($['classes'], ($) => (0, exports.Classes)($, {
                                                'value serializers': $p['value serializers'],
                                            })),
                                            'children': _pa.cc($['children'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
                                                        'classes': _pa.cc($['classes'], ($) => (0, exports.Classes)($, {
                                                            'value serializers': $p['value serializers'],
                                                        })),
                                                        'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($) => {
                                                                switch ($[0]) {
                                                                    case 'header': return _pa.ss($, ($) => ({
                                                                        'state': "header",
                                                                        'value': ['nothing', null],
                                                                    }));
                                                                    case 'body': return _pa.ss($, ($) => ({
                                                                        'state': "body",
                                                                        'value': ['nothing', null],
                                                                    }));
                                                                    case 'footer': return _pa.ss($, ($) => ({
                                                                        'state': "footer",
                                                                        'value': ['nothing', null],
                                                                    }));
                                                                    default: return _pa.au($[0]);
                                                                }
                                                            })]),
                                                        'rows': _pa.cc($['rows'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
                                                                    'classes': _pa.cc($['classes'], ($) => (0, exports.Classes)($, {
                                                                        'value serializers': $p['value serializers'],
                                                                    })),
                                                                    'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($) => {
                                                                            switch ($[0]) {
                                                                                case 'th': return _pa.ss($, ($) => ({
                                                                                    'state': "th",
                                                                                    'value': ['nothing', null],
                                                                                }));
                                                                                case 'td': return _pa.ss($, ($) => ({
                                                                                    'state': "td",
                                                                                    'value': ['nothing', null],
                                                                                }));
                                                                                default: return _pa.au($[0]);
                                                                            }
                                                                        })]),
                                                                    'height': _pa.cc($['height'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                                                    'delimiter': ['backtick', null],
                                                                                    'value': $p['value serializers']['default number']($, null),
                                                                                })]], () => ['not set', null])]),
                                                                    'cells': _pa.cc($['cells'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
                                                                                'classes': _pa.cc($['classes'], ($) => (0, exports.Classes)($, {
                                                                                    'value serializers': $p['value serializers'],
                                                                                })),
                                                                                'div': _pa.cc($['div'], ($) => (0, exports.Div)($, {
                                                                                    'value serializers': $p['value serializers'],
                                                                                })),
                                                                            })])]),
                                                                })])]),
                                                    })])]),
                                        })],
                                }));
                                case 'span': return _pa.ss($, ($) => ({
                                    'state': "span",
                                    'value': (0, exports.Span)($, {
                                        'value serializers': $p['value serializers'],
                                    }),
                                }));
                                case 'label': return _pa.ss($, ($) => ({
                                    'state': "label",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                            'classes': _pa.cc($['classes'], ($) => (0, exports.Classes)($, {
                                                'value serializers': $p['value serializers'],
                                            })),
                                            'text': _pa.cc($['text'], ($) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]),
                                            'div': _pa.cc($['div'], ($) => (0, exports.Div)($, {
                                                'value serializers': $p['value serializers'],
                                            })),
                                        })],
                                }));
                                case 'img': return _pa.ss($, ($) => ({
                                    'state': "img",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                            'classes': _pa.cc($['classes'], ($) => (0, exports.Classes)($, {
                                                'value serializers': $p['value serializers'],
                                            })),
                                            'src': _pa.cc($['src'], ($) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]),
                                            'alt': _pa.cc($['alt'], ($) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]),
                                            'width': _pa.cc($['width'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                            'delimiter': ['backtick', null],
                                                            'value': $p['value serializers']['default number']($, null),
                                                        })]], () => ['not set', null])]),
                                            'height': _pa.cc($['height'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                            'delimiter': ['backtick', null],
                                                            'value': $p['value serializers']['default number']($, null),
                                                        })]], () => ['not set', null])]),
                                        })],
                                }));
                                case 'svg': return _pa.ss($, ($) => ({
                                    'state': "svg",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                            'classes': _pa.cc($['classes'], ($) => (0, exports.Classes)($, {
                                                'value serializers': $p['value serializers'],
                                            })),
                                            'content': _pa.cc($['content'], ($) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]),
                                            'width': _pa.cc($['width'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                            'delimiter': ['backtick', null],
                                                            'value': $p['value serializers']['default number']($, null),
                                                        })]], () => ['not set', null])]),
                                            'height': _pa.cc($['height'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                                            'delimiter': ['backtick', null],
                                                            'value': $p['value serializers']['default number']($, null),
                                                        })]], () => ['not set', null])]),
                                        })],
                                }));
                                default: return _pa.au($[0]);
                            }
                        })]),
                })])]),
    })];
exports.Div = Div;
const Document = ($, $p) => ['verbose group', _pa.dictionary_literal({
        'css': _pa.cc($['css'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
        'root': _pa.cc($['root'], ($) => (0, exports.Div)($, {
            'value serializers': $p['value serializers'],
        })),
    })];
exports.Document = Document;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyc2hhbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW1wbGVtZW50YXRpb24vZ2VuZXJhdGVkL3BhcmV0by9zY2hlbWFzL2h0bWwtcHJpbnQvbWFyc2hhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBdUM7QUFPaEMsTUFBTSxPQUFPLEdBQTZCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN4RixXQUFXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1lBQzVCLE9BQU8sRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBSFEsUUFBQSxPQUFPLFdBR2Y7QUFDRSxNQUFNLElBQUksR0FBMEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsa0JBQWtCLENBQUM7UUFDM0YsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFBLGVBQU8sRUFDMUMsQ0FBQyxFQUNEO1lBQ0ksbUJBQW1CLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQy9DLENBQ0osQ0FBQztRQUNGLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDdkQsQ0FBQyxDQUFDLEVBQStCLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUNsRCxXQUFXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO3dCQUM1QixPQUFPLEVBQUUsQ0FBQztxQkFDYixDQUFDLENBQUMsQ0FBQyxFQUNKLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUMxQixDQUFDLENBQUM7UUFDSCxVQUFVLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDcEcsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFBLGVBQU8sRUFDMUMsQ0FBQyxFQUNEO3dCQUNJLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztxQkFDL0MsQ0FDSixDQUFDO29CQUNGLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQTRCLEVBQUU7NEJBQ2pGLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0NBQ1gsS0FBSyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29DQUNsQyxPQUFPLEVBQUUsTUFBTTtvQ0FDZixPQUFPLEVBQUUsSUFBQSxZQUFJLEVBQ1QsQ0FBQyxFQUNEO3dDQUNJLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztxQ0FDL0MsQ0FDSjtpQ0FDSixDQUFDLENBQUMsQ0FBQTtnQ0FDSCxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7b0NBQy9CLE9BQU8sRUFBRSxHQUFHO29DQUNaLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsa0JBQWtCLENBQUM7NENBQzlDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvREFDdkMsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztvREFDNUIsT0FBTyxFQUFFLENBQUM7aURBQ2IsQ0FBQyxDQUFDLENBQUM7NENBQ0osTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO29EQUN2QyxXQUFXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO29EQUM1QixPQUFPLEVBQUUsQ0FBQztpREFDYixDQUFDLENBQUMsQ0FBQzt5Q0FDUCxDQUFDLENBQUM7aUNBQ04sQ0FBQyxDQUFDLENBQUE7Z0NBQ0gsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29DQUMvQixPQUFPLEVBQUUsR0FBRztvQ0FDWixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFDOzRDQUM5QyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7b0RBQ3ZDLFdBQVcsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7b0RBQzVCLE9BQU8sRUFBRSxDQUFDO2lEQUNiLENBQUMsQ0FBQyxDQUFDO3lDQUNQLENBQUMsQ0FBQztpQ0FDTixDQUFDLENBQUMsQ0FBQTtnQ0FDSCxPQUFPLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7NEJBQ2hDLENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDVCxDQUFDLENBQUMsQ0FBQTtBQTFEVSxRQUFBLElBQUksUUEwRGQ7QUFDSSxNQUFNLEdBQUcsR0FBeUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsa0JBQWtCLENBQUM7UUFDekYsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFBLGVBQU8sRUFDMUMsQ0FBQyxFQUNEO1lBQ0ksbUJBQW1CLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQy9DLENBQ0osQ0FBQztRQUNGLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDdkQsQ0FBQyxDQUFDLEVBQStCLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUNsRCxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO3dCQUMvQixPQUFPLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FDOUMsQ0FBQyxFQUNELElBQUksQ0FDUDtxQkFDSixDQUFDLENBQUMsQ0FBQyxFQUNKLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUMxQixDQUFDLENBQUM7UUFDSCxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3pELENBQUMsQ0FBQyxFQUErQixFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDbEQsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQzt3QkFDL0IsT0FBTyxFQUFFLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQzlDLENBQUMsRUFDRCxJQUFJLENBQ1A7cUJBQ0osQ0FBQyxDQUFDLENBQUMsRUFDSixHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FDMUIsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsa0JBQWtCLENBQUM7b0JBQ3BHLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQTRCLEVBQUU7NEJBQ2pGLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0NBQ1gsS0FBSyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29DQUNqQyxPQUFPLEVBQUUsS0FBSztvQ0FDZCxPQUFPLEVBQUUsSUFBQSxXQUFHLEVBQ1IsQ0FBQyxFQUNEO3dDQUNJLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztxQ0FDL0MsQ0FDSjtpQ0FDSixDQUFDLENBQUMsQ0FBQTtnQ0FDSCxLQUFLLE9BQU8sQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7b0NBQ25DLE9BQU8sRUFBRSxPQUFPO29DQUNoQixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFDOzRDQUM5QyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUEsZUFBTyxFQUMxQyxDQUFDLEVBQ0Q7Z0RBQ0ksbUJBQW1CLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFDOzZDQUMvQyxDQUNKLENBQUM7NENBQ0YsVUFBVSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsa0JBQWtCLENBQUM7d0RBQ3BHLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBQSxlQUFPLEVBQzFDLENBQUMsRUFDRDs0REFDSSxtQkFBbUIsRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUM7eURBQy9DLENBQ0osQ0FBQzt3REFDRixNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUE0QixFQUFFO2dFQUNqRixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29FQUNYLEtBQUssUUFBUSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzt3RUFDcEMsT0FBTyxFQUFFLFFBQVE7d0VBQ2pCLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7cUVBQzdCLENBQUMsQ0FBQyxDQUFBO29FQUNILEtBQUssTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzt3RUFDbEMsT0FBTyxFQUFFLE1BQU07d0VBQ2YsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztxRUFDN0IsQ0FBQyxDQUFDLENBQUE7b0VBQ0gsS0FBSyxRQUFRLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dFQUNwQyxPQUFPLEVBQUUsUUFBUTt3RUFDakIsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztxRUFDN0IsQ0FBQyxDQUFDLENBQUE7b0VBQ0gsT0FBTyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dFQUNoQyxDQUFDOzREQUNMLENBQUMsQ0FBQyxDQUFDLENBQUM7d0RBQ0osTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsa0JBQWtCLENBQUM7b0VBQzVGLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBQSxlQUFPLEVBQzFDLENBQUMsRUFDRDt3RUFDSSxtQkFBbUIsRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUM7cUVBQy9DLENBQ0osQ0FBQztvRUFDRixNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUE0QixFQUFFOzRFQUNqRixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dGQUNYLEtBQUssSUFBSSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztvRkFDaEMsT0FBTyxFQUFFLElBQUk7b0ZBQ2IsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztpRkFDN0IsQ0FBQyxDQUFDLENBQUE7Z0ZBQ0gsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29GQUNoQyxPQUFPLEVBQUUsSUFBSTtvRkFDYixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO2lGQUM3QixDQUFDLENBQUMsQ0FBQTtnRkFDSCxPQUFPLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7NEVBQ2hDLENBQUM7d0VBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztvRUFDSixRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3pELENBQUMsQ0FBQyxFQUErQixFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvRkFDbEQsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztvRkFDL0IsT0FBTyxFQUFFLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQzlDLENBQUMsRUFDRCxJQUFJLENBQ1A7aUZBQ0osQ0FBQyxDQUFDLENBQUMsRUFDSixHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FDMUIsQ0FBQyxDQUFDO29FQUNILE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFDO2dGQUM5RixTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUEsZUFBTyxFQUMxQyxDQUFDLEVBQ0Q7b0ZBQ0ksbUJBQW1CLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lGQUMvQyxDQUNKLENBQUM7Z0ZBQ0YsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFBLFdBQUcsRUFDOUIsQ0FBQyxFQUNEO29GQUNJLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpRkFDL0MsQ0FDSixDQUFDOzZFQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpRUFDVCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cURBQ1QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lDQUNULENBQUMsQ0FBQztpQ0FDTixDQUFDLENBQUMsQ0FBQTtnQ0FDSCxLQUFLLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7b0NBQ2xDLE9BQU8sRUFBRSxNQUFNO29DQUNmLE9BQU8sRUFBRSxJQUFBLFlBQUksRUFDVCxDQUFDLEVBQ0Q7d0NBQ0ksbUJBQW1CLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO3FDQUMvQyxDQUNKO2lDQUNKLENBQUMsQ0FBQyxDQUFBO2dDQUNILEtBQUssT0FBTyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztvQ0FDbkMsT0FBTyxFQUFFLE9BQU87b0NBQ2hCLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsa0JBQWtCLENBQUM7NENBQzlDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBQSxlQUFPLEVBQzFDLENBQUMsRUFDRDtnREFDSSxtQkFBbUIsRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUM7NkNBQy9DLENBQ0osQ0FBQzs0Q0FDRixNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7b0RBQ3ZDLFdBQVcsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7b0RBQzVCLE9BQU8sRUFBRSxDQUFDO2lEQUNiLENBQUMsQ0FBQyxDQUFDOzRDQUNKLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBQSxXQUFHLEVBQzlCLENBQUMsRUFDRDtnREFDSSxtQkFBbUIsRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUM7NkNBQy9DLENBQ0osQ0FBQzt5Q0FDTCxDQUFDLENBQUM7aUNBQ04sQ0FBQyxDQUFDLENBQUE7Z0NBQ0gsS0FBSyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29DQUNqQyxPQUFPLEVBQUUsS0FBSztvQ0FDZCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFDOzRDQUM5QyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUEsZUFBTyxFQUMxQyxDQUFDLEVBQ0Q7Z0RBQ0ksbUJBQW1CLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFDOzZDQUMvQyxDQUNKLENBQUM7NENBQ0YsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO29EQUNyQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO29EQUM1QixPQUFPLEVBQUUsQ0FBQztpREFDYixDQUFDLENBQUMsQ0FBQzs0Q0FDSixLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7b0RBQ3JDLFdBQVcsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7b0RBQzVCLE9BQU8sRUFBRSxDQUFDO2lEQUNiLENBQUMsQ0FBQyxDQUFDOzRDQUNKLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDdkQsQ0FBQyxDQUFDLEVBQStCLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDOzREQUNsRCxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDOzREQUMvQixPQUFPLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FDOUMsQ0FBQyxFQUNELElBQUksQ0FDUDt5REFDSixDQUFDLENBQUMsQ0FBQyxFQUNKLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUMxQixDQUFDLENBQUM7NENBQ0gsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUN6RCxDQUFDLENBQUMsRUFBK0IsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7NERBQ2xELFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7NERBQy9CLE9BQU8sRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUM5QyxDQUFDLEVBQ0QsSUFBSSxDQUNQO3lEQUNKLENBQUMsQ0FBQyxDQUFDLEVBQ0osR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQzFCLENBQUMsQ0FBQzt5Q0FDTixDQUFDLENBQUM7aUNBQ04sQ0FBQyxDQUFDLENBQUE7Z0NBQ0gsS0FBSyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29DQUNqQyxPQUFPLEVBQUUsS0FBSztvQ0FDZCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFDOzRDQUM5QyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUEsZUFBTyxFQUMxQyxDQUFDLEVBQ0Q7Z0RBQ0ksbUJBQW1CLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFDOzZDQUMvQyxDQUNKLENBQUM7NENBQ0YsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO29EQUM3QyxXQUFXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO29EQUM1QixPQUFPLEVBQUUsQ0FBQztpREFDYixDQUFDLENBQUMsQ0FBQzs0Q0FDSixPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3ZELENBQUMsQ0FBQyxFQUErQixFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0REFDbEQsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQzs0REFDL0IsT0FBTyxFQUFFLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQzlDLENBQUMsRUFDRCxJQUFJLENBQ1A7eURBQ0osQ0FBQyxDQUFDLENBQUMsRUFDSixHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FDMUIsQ0FBQyxDQUFDOzRDQUNILFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDekQsQ0FBQyxDQUFDLEVBQStCLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDOzREQUNsRCxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDOzREQUMvQixPQUFPLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FDOUMsQ0FBQyxFQUNELElBQUksQ0FDUDt5REFDSixDQUFDLENBQUMsQ0FBQyxFQUNKLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUMxQixDQUFDLENBQUM7eUNBQ04sQ0FBQyxDQUFDO2lDQUNOLENBQUMsQ0FBQyxDQUFBO2dDQUNILE9BQU8sQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTs0QkFDaEMsQ0FBQzt3QkFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNQLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNULENBQUMsQ0FBQyxDQUFBO0FBcE9VLFFBQUEsR0FBRyxPQW9PYjtBQUNJLE1BQU0sUUFBUSxHQUE4QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztRQUNuRyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3JDLFdBQVcsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7Z0JBQzVCLE9BQU8sRUFBRSxDQUFDO2FBQ2IsQ0FBQyxDQUFDLENBQUM7UUFDSixNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUEsV0FBRyxFQUNoQyxDQUFDLEVBQ0Q7WUFDSSxtQkFBbUIsRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDL0MsQ0FDSixDQUFDO0tBQ0wsQ0FBQyxDQUFDLENBQUE7QUFYVSxRQUFBLFFBQVEsWUFXbEIifQ==