"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_astn_token_iterator = exports.throw_unexpected_token = exports.throw_lexer_error = exports.Parse_Error_Class = void 0;
class Parse_Error_Class {
    type;
    range;
    constructor(type, range) {
        this.type = type;
        this.range = range;
    }
}
exports.Parse_Error_Class = Parse_Error_Class;
const throw_parse_error = (type, range) => {
    throw new Parse_Error_Class(type, range);
};
const throw_lexer_error = (type, range) => {
    throw new Parse_Error_Class(['lexer', type], range);
};
exports.throw_lexer_error = throw_lexer_error;
const throw_unexpected_token = (found, expected) => {
    return throw_parse_error(['parser', {
            'expected': expected,
            'cause': ['unexpected token', {
                    'found': found.type,
                }]
        }], {
        'start': found.start,
        'end': found.end
    });
};
exports.throw_unexpected_token = throw_unexpected_token;
const create_astn_token_iterator = ($, end) => {
    let position = 0;
    return {
        'get required token': (pet) => {
            return $.__get_element_at(position).transform(($) => $, () => throw_parse_error(['parser', {
                    'expected': pet,
                    'cause': ['missing token', null]
                }], {
                'start': end,
                'end': end,
            }));
        },
        'consume token': () => {
            position += 1;
        },
    };
};
exports.create_astn_token_iterator = create_astn_token_iterator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN0bl9wYXJzZV9nZW5lcmljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2ltcGxlbWVudGF0aW9uL2dlbmVyYXRlZC9wYXJldG8vZ2VuZXJpYy9wYXJzZS9hc3RuX3BhcnNlX2dlbmVyaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBUUEsTUFBYSxpQkFBaUI7SUFHTjtJQUNBO0lBRnBCLFlBQ29CLElBQXlDLEVBQ3pDLEtBQXVCO1FBRHZCLFNBQUksR0FBSixJQUFJLENBQXFDO1FBQ3pDLFVBQUssR0FBTCxLQUFLLENBQWtCO0lBRTFDLENBQUM7Q0FDTDtBQVBELDhDQU9DO0FBRUQsTUFBTSxpQkFBaUIsR0FBRyxDQUN0QixJQUF5QyxFQUN6QyxLQUF1QixFQUNsQixFQUFFO0lBQ1AsTUFBTSxJQUFJLGlCQUFpQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtBQUM1QyxDQUFDLENBQUE7QUFFTSxNQUFNLGlCQUFpQixHQUFHLENBQzdCLElBQWdDLEVBQ2hDLEtBQXVCLEVBQ2xCLEVBQUU7SUFDUCxNQUFNLElBQUksaUJBQWlCLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFDdkQsQ0FBQyxDQUFBO0FBTFksUUFBQSxpQkFBaUIscUJBSzdCO0FBRU0sTUFBTSxzQkFBc0IsR0FBRyxDQUNsQyxLQUFpQyxFQUNqQyxRQUEyQyxFQUN0QyxFQUFFO0lBQ1AsT0FBTyxpQkFBaUIsQ0FDcEIsQ0FBQyxRQUFRLEVBQUU7WUFDUCxVQUFVLEVBQUUsUUFBUTtZQUNwQixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRTtvQkFDMUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJO2lCQUN0QixDQUFDO1NBQ0wsQ0FBQyxFQUNGO1FBQ0ksT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLO1FBQ3BCLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRztLQUNuQixDQUNKLENBQUE7QUFDTCxDQUFDLENBQUE7QUFoQlksUUFBQSxzQkFBc0IsMEJBZ0JsQztBQUlNLE1BQU0sMEJBQTBCLEdBQUcsQ0FBQyxDQUFxQyxFQUFFLEdBQWdCLEVBQXVCLEVBQUU7SUFDdkgsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFBO0lBQ2hCLE9BQU87UUFDSCxvQkFBb0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FDekMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDUixHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FDbkIsQ0FBQyxRQUFRLEVBQUU7b0JBQ1AsVUFBVSxFQUFFLEdBQUc7b0JBQ2YsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQztpQkFDbkMsQ0FBQyxFQUNGO2dCQUNJLE9BQU8sRUFBRSxHQUFHO2dCQUNaLEtBQUssRUFBRSxHQUFHO2FBQ2IsQ0FDSixDQUNKLENBQUE7UUFDTCxDQUFDO1FBQ0QsZUFBZSxFQUFFLEdBQUcsRUFBRTtZQUNsQixRQUFRLElBQUksQ0FBQyxDQUFBO1FBQ2pCLENBQUM7S0FDSixDQUFBO0FBQ0wsQ0FBQyxDQUFBO0FBdEJZLFFBQUEsMEJBQTBCLDhCQXNCdEMifQ==