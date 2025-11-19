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
const _i_serialize = __importStar(require("../../generic/serialize"));
const _i_marshall = __importStar(require("./marshall"));
const Classes = ($, $p) => _i_serialize.Document(_i_marshall.Classes($, {
    'value serializers': $p['value serializers'],
}));
exports.Classes = Classes;
const Span = ($, $p) => _i_serialize.Document(_i_marshall.Span($, {
    'value serializers': $p['value serializers'],
}));
exports.Span = Span;
const Div = ($, $p) => _i_serialize.Document(_i_marshall.Div($, {
    'value serializers': $p['value serializers'],
}));
exports.Div = Div;
const Document = ($, $p) => _i_serialize.Document(_i_marshall.Document($, {
    'value serializers': $p['value serializers'],
}));
exports.Document = Document;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2ltcGxlbWVudGF0aW9uL2dlbmVyYXRlZC9wYXJldG8vc2NoZW1hcy9odG1sLXByaW50L3NlcmlhbGl6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLHNFQUF1RDtBQUN2RCx3REFBeUM7QUFHbEMsTUFBTSxPQUFPLEdBQTZCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FDN0UsV0FBVyxDQUFDLE9BQU8sQ0FDZixDQUFDLEVBQ0Q7SUFDSSxtQkFBbUIsRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Q0FDL0MsQ0FDSixDQUNKLENBQUE7QUFQWSxRQUFBLE9BQU8sV0FPbkI7QUFDTSxNQUFNLElBQUksR0FBMEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUN2RSxXQUFXLENBQUMsSUFBSSxDQUNaLENBQUMsRUFDRDtJQUNJLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztDQUMvQyxDQUNKLENBQ0osQ0FBQTtBQVBZLFFBQUEsSUFBSSxRQU9oQjtBQUNNLE1BQU0sR0FBRyxHQUF5QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQ3JFLFdBQVcsQ0FBQyxHQUFHLENBQ1gsQ0FBQyxFQUNEO0lBQ0ksbUJBQW1CLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0NBQy9DLENBQ0osQ0FDSixDQUFBO0FBUFksUUFBQSxHQUFHLE9BT2Y7QUFDTSxNQUFNLFFBQVEsR0FBOEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUMvRSxXQUFXLENBQUMsUUFBUSxDQUNoQixDQUFDLEVBQ0Q7SUFDSSxtQkFBbUIsRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Q0FDL0MsQ0FDSixDQUNKLENBQUE7QUFQWSxRQUFBLFFBQVEsWUFPcEIifQ==