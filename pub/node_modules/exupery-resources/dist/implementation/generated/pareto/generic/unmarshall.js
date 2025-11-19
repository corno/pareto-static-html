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
exports.process_derived_reference = exports.process_stack_reference = exports.process_selected_reference = exports.process_nothing = exports.process_optional = exports.process_unconstrained_list = exports.process_unresolved_list = exports.process_text = exports.process_boolean = exports.process_number = exports.process_unconstrained_dictionary = exports.process_unresolved_dictionary = exports.get_entry = exports.process_group = exports.process_unresolved_state_group = exports.process_unconstrained_state_group = void 0;
const _ea = __importStar(require("exupery-core-alg"));
const process_unconstrained_state_group = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'tagged value': return _ea.ss($, ($) => {
                const data = $.value;
                return $p.states.__get_entry($.state.value).transform(($) => $(data), () => _ea.deprecated_panic(`Unexpected state: ${$.state.value}`));
            });
            default: return _ea.deprecated_panic(`Unexpected type for state group: ${$[0]}`);
        }
    });
};
exports.process_unconstrained_state_group = process_unconstrained_state_group;
const process_unresolved_state_group = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'tagged value': return _ea.ss($, ($) => {
                const data = $.value;
                return {
                    'location': $["|"].range,
                    'state group': $p.states.__get_entry($.state.value).transform(($) => $(data), () => _ea.deprecated_panic(`Unexpected state: ${$.state.value}`))
                };
            });
            default: return _ea.deprecated_panic(`Unexpected type for state group: ${$[0]}`);
        }
    });
};
exports.process_unresolved_state_group = process_unresolved_state_group;
const process_group = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'indexed collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'verbose group': return _ea.ss($, ($) => {
                        return $p.properties(_ea.deprecated_build_dictionary(($i) => {
                            $.entries.__for_each(($) => {
                                $i['add entry']($.key.value, $.value.transform(($) => $.value, () => _ea.deprecated_panic(`no value for property: ${$.key.value}`)));
                            });
                        }));
                    });
                    default: return _ea.deprecated_panic(`Unexpected type for group: ${$[0]}`);
                }
            }));
            default: return _ea.deprecated_panic(`Unexpected type for group: ${$[0]}`);
        }
    });
};
exports.process_group = process_group;
const get_entry = ($, $p) => {
    return $.__get_entry($p.key).transform(($) => $, () => _ea.deprecated_panic(`no such entry: ${$p.key}`));
};
exports.get_entry = get_entry;
const process_unresolved_dictionary = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'indexed collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'dictionary': return _ea.ss($, ($) => {
                        return {
                            'location': {
                                'start': $["{"].range.start,
                                'end': $["}"].range.end,
                            },
                            'dictionary': _ea.deprecated_build_dictionary(($i) => {
                                $.entries.__for_each(($) => {
                                    const key_location = $.key.range;
                                    $i['add entry']($.key.value, $.value.transform(($) => ({
                                        'location': key_location,
                                        'entry': $p.value($.value),
                                    }), () => _ea.deprecated_panic(`no value for property: ${$.key.value}`)));
                                });
                            })
                        };
                    });
                    default: return _ea.deprecated_panic(`Unexpected type for dictionary: ${$[0]}`);
                }
            }));
            default: return _ea.deprecated_panic(`Unexpected type for dictionary: ${$[0]}`);
        }
    });
};
exports.process_unresolved_dictionary = process_unresolved_dictionary;
const process_unconstrained_dictionary = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'indexed collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'dictionary': return _ea.ss($, ($) => {
                        return _ea.deprecated_build_dictionary(($i) => {
                            $.entries.__for_each(($) => {
                                $i['add entry']($.key.value, $.value.transform(($) => $p.value($.value), () => _ea.deprecated_panic(`no value for property: ${$.key.value}`)));
                            });
                        });
                    });
                    default: return _ea.deprecated_panic(`Unexpected type for dictionary: ${$[0]}`);
                }
            }));
            default: return _ea.deprecated_panic(`Unexpected type for dictionary: ${$[0]}`);
        }
    });
};
exports.process_unconstrained_dictionary = process_unconstrained_dictionary;
const process_number = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => $p.deserializer($.value, null));
            default: return _ea.deprecated_panic(`Unexpected type for number: ${$[0]}`);
        }
    });
};
exports.process_number = process_number;
const process_boolean = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => $p.deserializer($.value, null));
            default: return _ea.deprecated_panic(`Unexpected type for boolean: ${$[0]}`);
        }
    });
};
exports.process_boolean = process_boolean;
const process_text = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => $.value);
            default: return _ea.deprecated_panic(`Unexpected type for text: ${$[0]}`);
        }
    });
};
exports.process_text = process_text;
const process_unresolved_list = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'ordered collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'list': return _ea.ss($, ($) => {
                        const temp = $["["];
                        return {
                            'location': $["["].range,
                            'list': $["elements"].map(($) => ({
                                'location': temp.range,
                                'element': $p.value($.value)
                            }))
                        };
                    });
                    default: return _ea.deprecated_panic(`Unexpected type for list: ${$[0]}`);
                }
            }));
            default: return _ea.deprecated_panic(`Unexpected type for list: ${$[0]}`);
        }
    });
};
exports.process_unresolved_list = process_unresolved_list;
const process_unconstrained_list = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'ordered collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'list': return _ea.ss($, ($) => {
                        return $["elements"].map(($) => $p.value($.value));
                    });
                    default: return _ea.deprecated_panic(`Unexpected type for list: ${$[0]}`);
                }
            }));
            default: return _ea.deprecated_panic(`Unexpected type for list: ${$[0]}`);
        }
    });
};
exports.process_unconstrained_list = process_unconstrained_list;
const process_optional = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'not set': return _ea.ss($, ($) => _ea.not_set());
            case 'set optional value': return _ea.ss($, ($) => _ea.set($p.value($.value)));
            default: return _ea.deprecated_panic(`Unexpected type for nothing: ${$[0]}`);
        }
    });
};
exports.process_optional = process_optional;
const process_nothing = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'not set': return _ea.ss($, ($) => null);
            default: return _ea.deprecated_panic(`Unexpected type for nothing: ${$[0]}`);
        }
    });
};
exports.process_nothing = process_nothing;
const process_selected_reference = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => ({
                'key': $.value,
                'location': $.range,
            }));
            default: return _ea.deprecated_panic(`Unexpected type for selected reference key: ${$[0]}`);
        }
    });
};
exports.process_selected_reference = process_selected_reference;
const process_stack_reference = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => ({
                'key': $.value,
                'location': $.range,
            }));
            default: return _ea.deprecated_panic(`Unexpected type for selected reference key: ${$[0]}`);
        }
    });
};
exports.process_stack_reference = process_stack_reference;
const process_derived_reference = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'not set': return _ea.ss($, ($) => null);
            default: return _ea.deprecated_panic(`Unexpected type for derived reference: ${$[0]}`);
        }
    });
};
exports.process_derived_reference = process_derived_reference;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5tYXJzaGFsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbXBsZW1lbnRhdGlvbi9nZW5lcmF0ZWQvcGFyZXRvL2dlbmVyaWMvdW5tYXJzaGFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHNEQUF1QztBQU1oQyxNQUFNLGlDQUFpQyxHQUFHLENBQzdDLENBQWEsRUFDYixFQUVDLEVBRVcsRUFBRTtJQUNkLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNuQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ1gsS0FBSyxjQUFjLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUE7Z0JBQ3BCLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQ3hCLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUNoQixDQUFDLFNBQVMsQ0FDUCxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUNkLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUNuRSxDQUFBO1lBQ0wsQ0FBQyxDQUFDLENBQUE7WUFDRixPQUFPLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNwRixDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFyQlksUUFBQSxpQ0FBaUMscUNBcUI3QztBQUVNLE1BQU0sOEJBQThCLEdBQUcsQ0FDMUMsQ0FBYSxFQUNiLEVBRUMsRUFFK0MsRUFBRTtJQUNsRCxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDbkIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNYLEtBQUssY0FBYyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFBO2dCQUNwQixPQUFPO29CQUNILFVBQVUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSztvQkFDeEIsYUFBYSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUNoQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDaEIsQ0FBQyxTQUFTLENBQ1AsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDZCxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FDbkU7aUJBQ0osQ0FBQTtZQUNMLENBQUMsQ0FBQyxDQUFBO1lBQ0YsT0FBTyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDcEYsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBeEJZLFFBQUEsOEJBQThCLGtDQXdCMUM7QUFFTSxNQUFNLGFBQWEsR0FBRyxDQUN6QixDQUFhLEVBQ2IsRUFFQyxFQUVXLEVBQUU7SUFDZCxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDbkIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNYLEtBQUssb0JBQW9CLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUMvRCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUNYLEtBQUssZUFBZSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO3dCQUN6QyxPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7NEJBQ3hELENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0NBQ3ZCLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ2QsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLDBCQUEwQixDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQ3RFLENBQUMsQ0FBQTs0QkFDTixDQUFDLENBQUMsQ0FBQTt3QkFDTixDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUNQLENBQUMsQ0FBQyxDQUFBO29CQUNGLE9BQU8sQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLGdCQUFnQixDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUM5RSxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNILE9BQU8sQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLGdCQUFnQixDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQzlFLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQTtBQTNCWSxRQUFBLGFBQWEsaUJBMkJ6QjtBQUVNLE1BQU0sU0FBUyxHQUFHLENBQ3JCLENBQTZCLEVBQzdCLEVBRUMsRUFFUyxFQUFFO0lBQ1osT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQ2xDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQ1IsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FDekQsQ0FBQTtBQUNMLENBQUMsQ0FBQTtBQVhZLFFBQUEsU0FBUyxhQVdyQjtBQUVNLE1BQU0sNkJBQTZCLEdBQUcsQ0FDekMsQ0FBYSxFQUNiLEVBRUMsRUFDOEMsRUFBRTtJQUNqRCxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDbkIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNYLEtBQUssb0JBQW9CLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUMvRCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUNYLEtBQUssWUFBWSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO3dCQUN0QyxPQUFPOzRCQUNILFVBQVUsRUFBRTtnQ0FDUixPQUFPLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLO2dDQUMzQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHOzZCQUMxQjs0QkFDRCxZQUFZLEVBQUUsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7Z0NBQ2pELENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0NBQ3ZCLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFBO29DQUNoQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dDQUNKLFVBQVUsRUFBRSxZQUFZO3dDQUN4QixPQUFPLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3FDQUM3QixDQUFDLEVBQ0YsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLDBCQUEwQixDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQ3RFLENBQUMsQ0FBQTtnQ0FDTixDQUFDLENBQUMsQ0FBQTs0QkFDTixDQUFDLENBQUM7eUJBQ0wsQ0FBQTtvQkFDTCxDQUFDLENBQUMsQ0FBQTtvQkFDRixPQUFPLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDbkYsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDSCxPQUFPLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNuRixDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFwQ1ksUUFBQSw2QkFBNkIsaUNBb0N6QztBQUVNLE1BQU0sZ0NBQWdDLEdBQUcsQ0FDNUMsQ0FBYSxFQUNiLEVBRUMsRUFDMkMsRUFBRTtJQUM5QyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDbkIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNYLEtBQUssb0JBQW9CLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUMvRCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUNYLEtBQUssWUFBWSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO3dCQUN0QyxPQUFPLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFOzRCQUMxQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dDQUN2QixFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFDeEIsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLDBCQUEwQixDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQ3RFLENBQUMsQ0FBQTs0QkFDTixDQUFDLENBQUMsQ0FBQTt3QkFDTixDQUFDLENBQUMsQ0FBQTtvQkFDTixDQUFDLENBQUMsQ0FBQTtvQkFDRixPQUFPLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDbkYsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDSCxPQUFPLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNuRixDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUExQlksUUFBQSxnQ0FBZ0Msb0NBMEI1QztBQUdNLE1BQU0sY0FBYyxHQUFHLENBQzFCLENBQWEsRUFDYixFQUVDLEVBQ0ssRUFBRTtJQUNSLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNuQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ1gsS0FBSyxRQUFRLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQTtZQUN0RSxPQUFPLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUUvRSxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFiWSxRQUFBLGNBQWMsa0JBYTFCO0FBRU0sTUFBTSxlQUFlLEdBQUcsQ0FDM0IsQ0FBYSxFQUNiLEVBRUMsRUFFTSxFQUFFO0lBQ1QsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ25CLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDWCxLQUFLLFFBQVEsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFBO1lBQ3RFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLGdCQUFnQixDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ2hGLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQTtBQWJZLFFBQUEsZUFBZSxtQkFhM0I7QUFFTSxNQUFNLFlBQVksR0FBRyxDQUN4QixDQUFhLEVBQ2IsRUFBUSxFQUVGLEVBQUU7SUFDUixPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDbkIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNYLEtBQUssUUFBUSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQy9DLE9BQU8sQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQzdFLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQTtBQVhZLFFBQUEsWUFBWSxnQkFXeEI7QUFFTSxNQUFNLHVCQUF1QixHQUFHLENBQ25DLENBQWEsRUFDYixFQUVDLEVBQ3dDLEVBQUU7SUFDM0MsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ25CLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDWCxLQUFLLG9CQUFvQixDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDL0QsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDWCxLQUFLLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTt3QkFDaEMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUNuQixPQUFPOzRCQUNILFVBQVUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSzs0QkFDeEIsTUFBTSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0NBQzlCLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSztnQ0FDdEIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs2QkFDL0IsQ0FBQyxDQUFDO3lCQUNOLENBQUE7b0JBQ0wsQ0FBQyxDQUFDLENBQUE7b0JBQ0YsT0FBTyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQzdFLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ0gsT0FBTyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDN0UsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBMUJZLFFBQUEsdUJBQXVCLDJCQTBCbkM7QUFFTSxNQUFNLDBCQUEwQixHQUFHLENBQ3RDLENBQWEsRUFDYixFQUVDLEVBRXFDLEVBQUU7SUFDeEMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ25CLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDWCxLQUFLLG9CQUFvQixDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDL0QsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDWCxLQUFLLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTt3QkFDaEMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO29CQUN0RCxDQUFDLENBQUMsQ0FBQTtvQkFDRixPQUFPLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDN0UsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDSCxPQUFPLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUM3RSxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFwQlksUUFBQSwwQkFBMEIsOEJBb0J0QztBQUVNLE1BQU0sZ0JBQWdCLEdBQUcsQ0FDNUIsQ0FBYSxFQUNiLEVBRUMsRUFFK0IsRUFBRTtJQUNsQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDbkIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNYLEtBQUssU0FBUyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7WUFDdEQsS0FBSyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzlFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLGdCQUFnQixDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRWhGLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQTtBQWZZLFFBQUEsZ0JBQWdCLG9CQWU1QjtBQUVNLE1BQU0sZUFBZSxHQUFHLENBQzNCLENBQWEsRUFDYixFQUFRLEVBQ0osRUFBRTtJQUNOLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNuQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ1gsS0FBSyxTQUFTLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM3QyxPQUFPLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUVoRixDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFYWSxRQUFBLGVBQWUsbUJBVzNCO0FBRU0sTUFBTSwwQkFBMEIsR0FBRyxDQUN0QyxDQUFhLEVBQ2IsRUFBUSxFQUNpRSxFQUFFO0lBQzNFLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNuQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ1gsS0FBSyxRQUFRLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUs7Z0JBQ2QsVUFBVSxFQUFFLENBQUMsQ0FBQyxLQUFLO2FBQ3RCLENBQUMsQ0FBQyxDQUFBO1lBQ0gsT0FBTyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsK0NBQStDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDL0YsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBYlksUUFBQSwwQkFBMEIsOEJBYXRDO0FBRU0sTUFBTSx1QkFBdUIsR0FBRyxDQUNuQyxDQUFhLEVBQ2IsRUFBUSxFQUNrRSxFQUFFO0lBQzVFLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNuQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ1gsS0FBSyxRQUFRLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUs7Z0JBQ2QsVUFBVSxFQUFFLENBQUMsQ0FBQyxLQUFLO2FBQ3RCLENBQUMsQ0FBQyxDQUFBO1lBQ0gsT0FBTyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsK0NBQStDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDL0YsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBYlksUUFBQSx1QkFBdUIsMkJBYW5DO0FBRU0sTUFBTSx5QkFBeUIsR0FBRyxDQUNyQyxDQUFhLEVBQ2IsRUFBUSxFQUNKLEVBQUU7SUFDTixPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDbkIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNYLEtBQUssU0FBUyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDN0MsT0FBTyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsMENBQTBDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7UUFFMUYsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBWFksUUFBQSx5QkFBeUIsNkJBV3JDIn0=