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
const _i_generic = __importStar(require("../../generic/unmarshall"));
const Classes = ($, $p) => _i_generic.process_unconstrained_list($, {
    'value': ($) => _i_generic.process_text($, null),
});
exports.Classes = Classes;
const Span = ($, $p) => _i_generic.process_group($, {
    'properties': ($) => ({
        'classes': _pa.cc(_i_generic.get_entry($, {
            'key': "classes",
        }), ($) => (0, exports.Classes)($, {
            'value deserializers': $p['value deserializers'],
        })),
        'title': _pa.cc(_i_generic.get_entry($, {
            'key': "title",
        }), ($) => _i_generic.process_optional($, {
            'value': ($) => _i_generic.process_text($, null),
        })),
        'children': _pa.cc(_i_generic.get_entry($, {
            'key': "children",
        }), ($) => _i_generic.process_unconstrained_list($, {
            'value': ($) => _i_generic.process_group($, {
                'properties': ($) => ({
                    'classes': _pa.cc(_i_generic.get_entry($, {
                        'key': "classes",
                    }), ($) => (0, exports.Classes)($, {
                        'value deserializers': $p['value deserializers'],
                    })),
                    'type': _pa.cc(_i_generic.get_entry($, {
                        'key': "type",
                    }), ($) => _i_generic.process_unconstrained_state_group($, {
                        'states': _pa.dictionary_literal({
                            'span': ($) => ['span', (0, exports.Span)($, {
                                    'value deserializers': $p['value deserializers'],
                                })],
                            'a': ($) => ['a', _i_generic.process_group($, {
                                    'properties': ($) => ({
                                        'text': _pa.cc(_i_generic.get_entry($, {
                                            'key': "text",
                                        }), ($) => _i_generic.process_text($, null)),
                                        'href': _pa.cc(_i_generic.get_entry($, {
                                            'key': "href",
                                        }), ($) => _i_generic.process_text($, null)),
                                    }),
                                })],
                            'p': ($) => ['p', _i_generic.process_group($, {
                                    'properties': ($) => ({
                                        'text': _pa.cc(_i_generic.get_entry($, {
                                            'key': "text",
                                        }), ($) => _i_generic.process_text($, null)),
                                    }),
                                })],
                        }),
                    })),
                }),
            }),
        })),
    }),
});
exports.Span = Span;
const Div = ($, $p) => _i_generic.process_group($, {
    'properties': ($) => ({
        'classes': _pa.cc(_i_generic.get_entry($, {
            'key': "classes",
        }), ($) => (0, exports.Classes)($, {
            'value deserializers': $p['value deserializers'],
        })),
        'width': _pa.cc(_i_generic.get_entry($, {
            'key': "width",
        }), ($) => _i_generic.process_optional($, {
            'value': ($) => _i_generic.process_number($, {
                'deserializer': $p['value deserializers']['default number'],
            }),
        })),
        'height': _pa.cc(_i_generic.get_entry($, {
            'key': "height",
        }), ($) => _i_generic.process_optional($, {
            'value': ($) => _i_generic.process_number($, {
                'deserializer': $p['value deserializers']['default number'],
            }),
        })),
        'children': _pa.cc(_i_generic.get_entry($, {
            'key': "children",
        }), ($) => _i_generic.process_unconstrained_list($, {
            'value': ($) => _i_generic.process_group($, {
                'properties': ($) => ({
                    'type': _pa.cc(_i_generic.get_entry($, {
                        'key': "type",
                    }), ($) => _i_generic.process_unconstrained_state_group($, {
                        'states': _pa.dictionary_literal({
                            'div': ($) => ['div', (0, exports.Div)($, {
                                    'value deserializers': $p['value deserializers'],
                                })],
                            'table': ($) => ['table', _i_generic.process_group($, {
                                    'properties': ($) => ({
                                        'classes': _pa.cc(_i_generic.get_entry($, {
                                            'key': "classes",
                                        }), ($) => (0, exports.Classes)($, {
                                            'value deserializers': $p['value deserializers'],
                                        })),
                                        'children': _pa.cc(_i_generic.get_entry($, {
                                            'key': "children",
                                        }), ($) => _i_generic.process_unconstrained_list($, {
                                            'value': ($) => _i_generic.process_group($, {
                                                'properties': ($) => ({
                                                    'classes': _pa.cc(_i_generic.get_entry($, {
                                                        'key': "classes",
                                                    }), ($) => (0, exports.Classes)($, {
                                                        'value deserializers': $p['value deserializers'],
                                                    })),
                                                    'type': _pa.cc(_i_generic.get_entry($, {
                                                        'key': "type",
                                                    }), ($) => _i_generic.process_unconstrained_state_group($, {
                                                        'states': _pa.dictionary_literal({
                                                            'header': ($) => ['header', _i_generic.process_nothing($, null)],
                                                            'body': ($) => ['body', _i_generic.process_nothing($, null)],
                                                            'footer': ($) => ['footer', _i_generic.process_nothing($, null)],
                                                        }),
                                                    })),
                                                    'rows': _pa.cc(_i_generic.get_entry($, {
                                                        'key': "rows",
                                                    }), ($) => _i_generic.process_unconstrained_list($, {
                                                        'value': ($) => _i_generic.process_group($, {
                                                            'properties': ($) => ({
                                                                'classes': _pa.cc(_i_generic.get_entry($, {
                                                                    'key': "classes",
                                                                }), ($) => (0, exports.Classes)($, {
                                                                    'value deserializers': $p['value deserializers'],
                                                                })),
                                                                'type': _pa.cc(_i_generic.get_entry($, {
                                                                    'key': "type",
                                                                }), ($) => _i_generic.process_unconstrained_state_group($, {
                                                                    'states': _pa.dictionary_literal({
                                                                        'th': ($) => ['th', _i_generic.process_nothing($, null)],
                                                                        'td': ($) => ['td', _i_generic.process_nothing($, null)],
                                                                    }),
                                                                })),
                                                                'height': _pa.cc(_i_generic.get_entry($, {
                                                                    'key': "height",
                                                                }), ($) => _i_generic.process_optional($, {
                                                                    'value': ($) => _i_generic.process_number($, {
                                                                        'deserializer': $p['value deserializers']['default number'],
                                                                    }),
                                                                })),
                                                                'cells': _pa.cc(_i_generic.get_entry($, {
                                                                    'key': "cells",
                                                                }), ($) => _i_generic.process_unconstrained_list($, {
                                                                    'value': ($) => _i_generic.process_group($, {
                                                                        'properties': ($) => ({
                                                                            'classes': _pa.cc(_i_generic.get_entry($, {
                                                                                'key': "classes",
                                                                            }), ($) => (0, exports.Classes)($, {
                                                                                'value deserializers': $p['value deserializers'],
                                                                            })),
                                                                            'div': _pa.cc(_i_generic.get_entry($, {
                                                                                'key': "div",
                                                                            }), ($) => (0, exports.Div)($, {
                                                                                'value deserializers': $p['value deserializers'],
                                                                            })),
                                                                        }),
                                                                    }),
                                                                })),
                                                            }),
                                                        }),
                                                    })),
                                                }),
                                            }),
                                        })),
                                    }),
                                })],
                            'span': ($) => ['span', (0, exports.Span)($, {
                                    'value deserializers': $p['value deserializers'],
                                })],
                            'label': ($) => ['label', _i_generic.process_group($, {
                                    'properties': ($) => ({
                                        'classes': _pa.cc(_i_generic.get_entry($, {
                                            'key': "classes",
                                        }), ($) => (0, exports.Classes)($, {
                                            'value deserializers': $p['value deserializers'],
                                        })),
                                        'text': _pa.cc(_i_generic.get_entry($, {
                                            'key': "text",
                                        }), ($) => _i_generic.process_text($, null)),
                                        'div': _pa.cc(_i_generic.get_entry($, {
                                            'key': "div",
                                        }), ($) => (0, exports.Div)($, {
                                            'value deserializers': $p['value deserializers'],
                                        })),
                                    }),
                                })],
                            'img': ($) => ['img', _i_generic.process_group($, {
                                    'properties': ($) => ({
                                        'classes': _pa.cc(_i_generic.get_entry($, {
                                            'key': "classes",
                                        }), ($) => (0, exports.Classes)($, {
                                            'value deserializers': $p['value deserializers'],
                                        })),
                                        'src': _pa.cc(_i_generic.get_entry($, {
                                            'key': "src",
                                        }), ($) => _i_generic.process_text($, null)),
                                        'alt': _pa.cc(_i_generic.get_entry($, {
                                            'key': "alt",
                                        }), ($) => _i_generic.process_text($, null)),
                                        'width': _pa.cc(_i_generic.get_entry($, {
                                            'key': "width",
                                        }), ($) => _i_generic.process_optional($, {
                                            'value': ($) => _i_generic.process_number($, {
                                                'deserializer': $p['value deserializers']['default number'],
                                            }),
                                        })),
                                        'height': _pa.cc(_i_generic.get_entry($, {
                                            'key': "height",
                                        }), ($) => _i_generic.process_optional($, {
                                            'value': ($) => _i_generic.process_number($, {
                                                'deserializer': $p['value deserializers']['default number'],
                                            }),
                                        })),
                                    }),
                                })],
                            'svg': ($) => ['svg', _i_generic.process_group($, {
                                    'properties': ($) => ({
                                        'classes': _pa.cc(_i_generic.get_entry($, {
                                            'key': "classes",
                                        }), ($) => (0, exports.Classes)($, {
                                            'value deserializers': $p['value deserializers'],
                                        })),
                                        'content': _pa.cc(_i_generic.get_entry($, {
                                            'key': "content",
                                        }), ($) => _i_generic.process_text($, null)),
                                        'width': _pa.cc(_i_generic.get_entry($, {
                                            'key': "width",
                                        }), ($) => _i_generic.process_optional($, {
                                            'value': ($) => _i_generic.process_number($, {
                                                'deserializer': $p['value deserializers']['default number'],
                                            }),
                                        })),
                                        'height': _pa.cc(_i_generic.get_entry($, {
                                            'key': "height",
                                        }), ($) => _i_generic.process_optional($, {
                                            'value': ($) => _i_generic.process_number($, {
                                                'deserializer': $p['value deserializers']['default number'],
                                            }),
                                        })),
                                    }),
                                })],
                        }),
                    })),
                }),
            }),
        })),
    }),
});
exports.Div = Div;
const Document = ($, $p) => _i_generic.process_group($, {
    'properties': ($) => ({
        'css': _pa.cc(_i_generic.get_entry($, {
            'key': "css",
        }), ($) => _i_generic.process_text($, null)),
        'root': _pa.cc(_i_generic.get_entry($, {
            'key': "root",
        }), ($) => (0, exports.Div)($, {
            'value deserializers': $p['value deserializers'],
        })),
    }),
});
exports.Document = Document;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5tYXJzaGFsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pbXBsZW1lbnRhdGlvbi9nZW5lcmF0ZWQvcGFyZXRvL3NjaGVtYXMvaHRtbC1wcmludC91bm1hcnNoYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQXVDO0FBR3ZDLHFFQUFzRDtBQU0vQyxNQUFNLE9BQU8sR0FBNkIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQzdGLENBQUMsRUFDRDtJQUNJLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FDbkMsQ0FBQyxFQUNELElBQUksQ0FDUDtDQUNKLENBQ0osQ0FBQTtBQVJZLFFBQUEsT0FBTyxXQVFuQjtBQUNNLE1BQU0sSUFBSSxHQUEwQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQzFFLENBQUMsRUFDRDtJQUNJLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNsQixTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUNsQyxDQUFDLEVBQ0Q7WUFDSSxLQUFLLEVBQUUsU0FBUztTQUNuQixDQUNKLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUEsZUFBTyxFQUNiLENBQUMsRUFDRDtZQUNJLHFCQUFxQixFQUFFLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNuRCxDQUNKLENBQUM7UUFDRixPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUNoQyxDQUFDLEVBQ0Q7WUFDSSxLQUFLLEVBQUUsT0FBTztTQUNqQixDQUNKLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFD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