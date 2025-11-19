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
const _ea = __importStar(require("exupery-core-alg"));
const sh = __importStar(require("pareto-fountain-pen/dist/shorthands/block"));
const is_empty_1 = require("pareto-standard-operations/dist/implementation/algorithms/operations/impure/list/is_empty");
const enrich_with_position_information_1 = require("pareto-standard-operations/dist/implementation/algorithms/operations/impure/list/enrich_with_position_information");
const Classes = ($) => {
    return (0, is_empty_1.$$)($)
        ? sh.b.nothing()
        : sh.b.sub([
            sh.b.snippet(` class="`),
            sh.b.sub((0, enrich_with_position_information_1.$$)($).map(($) => $['is first']
                ? sh.b.snippet($.value)
                : sh.b.sub([sh.b.snippet(` `), sh.b.snippet($.value)]))),
            sh.b.snippet(`"`)
        ]);
};
exports.Classes = Classes;
const Span = ($) => {
    return (0, is_empty_1.$$)($.children)
        ? sh.b.sub([
            sh.b.snippet(`<span`),
            (0, exports.Classes)($.classes),
            $.title.transform(($) => sh.b.sub([sh.b.snippet(` title="`), sh.b.snippet($), sh.b.snippet(`"`)]), () => sh.b.nothing()),
            sh.b.snippet(`></span>`)
        ])
        : sh.b.sub([
            sh.b.snippet(`<span`),
            (0, exports.Classes)($.classes),
            $.title.transform(($) => sh.b.sub([sh.b.snippet(` title="`), sh.b.snippet($), sh.b.snippet(`"`)]), () => sh.b.nothing()),
            sh.b.snippet(`>`),
            sh.b.sub($.children.map((child) => _ea.cc(child.type, ($) => {
                switch ($[0]) {
                    case 'span': return _ea.ss($, ($) => (0, exports.Span)($));
                    case 'a': return _ea.ss($, ($) => sh.b.sub([
                        sh.b.snippet(`<a`),
                        (0, exports.Classes)(child.classes),
                        sh.b.snippet(` href="`),
                        sh.b.snippet($.href),
                        sh.b.snippet(`">`),
                        sh.b.snippet($.text),
                        sh.b.snippet(`</a>`)
                    ]));
                    case 'p': return _ea.ss($, ($) => sh.b.sub([
                        sh.b.snippet(`<p`),
                        (0, exports.Classes)(child.classes),
                        sh.b.snippet(`>`),
                        sh.b.snippet($.text),
                        sh.b.snippet(`</p>`)
                    ]));
                    default: return _ea.au($[0]);
                }
            }))),
            sh.b.snippet(`</span>`)
        ]);
};
exports.Span = Span;
const Div = ($) => {
    return (0, is_empty_1.$$)($.children)
        ? sh.b.sub([
            sh.b.snippet(`<div`),
            (0, exports.Classes)($.classes),
            $.width.transform(($) => sh.b.sub([sh.b.snippet(` width="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]), () => sh.b.nothing()),
            $.height.transform(($) => sh.b.sub([sh.b.snippet(` height="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]), () => sh.b.nothing()),
            sh.b.snippet(`></div>`)
        ])
        : sh.b.sub([
            sh.b.snippet(`<div`),
            (0, exports.Classes)($.classes),
            $.width.transform(($) => sh.b.sub([sh.b.snippet(` width="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]), () => sh.b.nothing()),
            $.height.transform(($) => sh.b.sub([sh.b.snippet(` height="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]), () => sh.b.nothing()),
            sh.b.snippet(`>`),
            sh.b.indent([
                sh.g.sub($.children.map(($) => sh.g.nested_block([
                    _ea.cc($.type, ($) => {
                        switch ($[0]) {
                            case 'div': return _ea.ss($, ($) => (0, exports.Div)($));
                            case 'table': return _ea.ss($, ($) => sh.b.sub([
                                sh.b.snippet(`<table`),
                                (0, exports.Classes)($.classes),
                                sh.b.snippet(`>`),
                                sh.b.indent([
                                    sh.g.sub($.children.map((section) => sh.g.nested_block([
                                        _ea.cc(section.type, ($) => {
                                            switch ($[0]) {
                                                case 'header': return _ea.ss($, () => sh.b.sub([
                                                    sh.b.snippet(`<thead`),
                                                    (0, exports.Classes)(section.classes),
                                                    sh.b.snippet(`>`),
                                                    sh.b.indent([
                                                        sh.g.sub(section.rows.map((row) => sh.g.nested_block([
                                                            sh.b.snippet(`<tr`),
                                                            (0, exports.Classes)(row.classes),
                                                            row.height.transform(($) => sh.b.sub([sh.b.snippet(` height="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]), () => sh.b.nothing()),
                                                            sh.b.snippet(`>`),
                                                            sh.b.indent([
                                                                sh.g.sub(row.cells.map((cell) => sh.g.nested_block([
                                                                    _ea.cc(row.type, ($) => {
                                                                        switch ($[0]) {
                                                                            case 'th': return _ea.ss($, () => sh.b.sub([
                                                                                sh.b.snippet(`<th`),
                                                                                (0, exports.Classes)(cell.classes),
                                                                                sh.b.snippet(`>`),
                                                                                sh.b.indent([
                                                                                    sh.g.nested_block([
                                                                                        (0, exports.Div)(cell.div)
                                                                                    ])
                                                                                ]),
                                                                                sh.b.snippet(`</th>`)
                                                                            ]));
                                                                            case 'td': return _ea.ss($, () => sh.b.sub([
                                                                                sh.b.snippet(`<td`),
                                                                                (0, exports.Classes)(cell.classes),
                                                                                sh.b.snippet(`>`),
                                                                                sh.b.indent([
                                                                                    sh.g.nested_block([
                                                                                        (0, exports.Div)(cell.div)
                                                                                    ])
                                                                                ]),
                                                                                sh.b.snippet(`</td>`)
                                                                            ]));
                                                                            default: return _ea.au($[0]);
                                                                        }
                                                                    })
                                                                ])))
                                                            ]),
                                                            sh.b.snippet(`</tr>`)
                                                        ])))
                                                    ]),
                                                    sh.b.snippet(`</thead>`)
                                                ]));
                                                case 'body': return _ea.ss($, () => sh.b.sub([
                                                    sh.b.snippet(`<tbody`),
                                                    (0, exports.Classes)(section.classes),
                                                    sh.b.snippet(`>`),
                                                    sh.b.indent([
                                                        sh.g.sub(section.rows.map((row) => sh.g.nested_block([
                                                            sh.b.snippet(`<tr`),
                                                            (0, exports.Classes)(row.classes),
                                                            row.height.transform(($) => sh.b.sub([sh.b.snippet(` height="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]), () => sh.b.nothing()),
                                                            sh.b.snippet(`>`),
                                                            sh.b.indent([
                                                                sh.g.sub(row.cells.map((cell) => sh.g.nested_block([
                                                                    _ea.cc(row.type, ($) => {
                                                                        switch ($[0]) {
                                                                            case 'th': return _ea.ss($, () => sh.b.sub([
                                                                                sh.b.snippet(`<th`),
                                                                                (0, exports.Classes)(cell.classes),
                                                                                sh.b.snippet(`>`),
                                                                                sh.b.indent([
                                                                                    sh.g.nested_block([
                                                                                        (0, exports.Div)(cell.div)
                                                                                    ])
                                                                                ]),
                                                                                sh.b.snippet(`</th>`)
                                                                            ]));
                                                                            case 'td': return _ea.ss($, () => sh.b.sub([
                                                                                sh.b.snippet(`<td`),
                                                                                (0, exports.Classes)(cell.classes),
                                                                                sh.b.snippet(`>`),
                                                                                sh.b.indent([
                                                                                    sh.g.nested_block([
                                                                                        (0, exports.Div)(cell.div)
                                                                                    ])
                                                                                ]),
                                                                                sh.b.snippet(`</td>`)
                                                                            ]));
                                                                            default: return _ea.au($[0]);
                                                                        }
                                                                    })
                                                                ])))
                                                            ]),
                                                            sh.b.snippet(`</tr>`)
                                                        ])))
                                                    ]),
                                                    sh.b.snippet(`</tbody>`)
                                                ]));
                                                case 'footer': return _ea.ss($, () => sh.b.sub([
                                                    sh.b.snippet(`<tfoot`),
                                                    (0, exports.Classes)(section.classes),
                                                    sh.b.snippet(`>`),
                                                    sh.b.indent([
                                                        sh.g.sub(section.rows.map((row) => sh.g.nested_block([
                                                            sh.b.snippet(`<tr`),
                                                            (0, exports.Classes)(row.classes),
                                                            row.height.transform(($) => sh.b.sub([sh.b.snippet(` height="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]), () => sh.b.nothing()),
                                                            sh.b.snippet(`>`),
                                                            sh.b.indent([
                                                                sh.g.sub(row.cells.map((cell) => sh.g.nested_block([
                                                                    _ea.cc(row.type, ($) => {
                                                                        switch ($[0]) {
                                                                            case 'th': return _ea.ss($, () => sh.b.sub([
                                                                                sh.b.snippet(`<th`),
                                                                                (0, exports.Classes)(cell.classes),
                                                                                sh.b.snippet(`>`),
                                                                                sh.b.indent([
                                                                                    sh.g.nested_block([
                                                                                        (0, exports.Div)(cell.div)
                                                                                    ])
                                                                                ]),
                                                                                sh.b.snippet(`</th>`)
                                                                            ]));
                                                                            case 'td': return _ea.ss($, () => sh.b.sub([
                                                                                sh.b.snippet(`<td`),
                                                                                (0, exports.Classes)(cell.classes),
                                                                                sh.b.snippet(`>`),
                                                                                sh.b.indent([
                                                                                    sh.g.nested_block([
                                                                                        (0, exports.Div)(cell.div)
                                                                                    ])
                                                                                ]),
                                                                                sh.b.snippet(`</td>`)
                                                                            ]));
                                                                            default: return _ea.au($[0]);
                                                                        }
                                                                    })
                                                                ])))
                                                            ]),
                                                            sh.b.snippet(`</tr>`)
                                                        ])))
                                                    ]),
                                                    sh.b.snippet(`</tfoot>`)
                                                ]));
                                                default: return _ea.au($[0]);
                                            }
                                        })
                                    ])))
                                ]),
                                sh.b.snippet(`</table>`)
                            ]));
                            case 'span': return _ea.ss($, ($) => (0, exports.Span)($));
                            case 'label': return _ea.ss($, ($) => sh.b.sub([
                                sh.b.snippet(`<label`),
                                (0, exports.Classes)($.classes),
                                sh.b.snippet(`>`),
                                sh.b.snippet($.text),
                                sh.b.indent([
                                    sh.g.nested_block([
                                        (0, exports.Div)($.div)
                                    ])
                                ]),
                                sh.b.snippet(`</label>`)
                            ]));
                            case 'img': return _ea.ss($, ($) => sh.b.sub([
                                sh.b.snippet(`<img`),
                                (0, exports.Classes)($.classes),
                                sh.b.snippet(` src="`),
                                sh.b.snippet($.src),
                                sh.b.snippet(`" alt="`),
                                sh.b.snippet($.alt),
                                sh.b.snippet(`"`),
                                $.width.transform(($) => sh.b.sub([sh.b.snippet(` width="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]), () => sh.b.nothing()),
                                $.height.transform(($) => sh.b.sub([sh.b.snippet(` height="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]), () => sh.b.nothing()),
                                sh.b.snippet(` />`)
                            ]));
                            case 'svg': return _ea.ss($, ($) => sh.b.sub([
                                sh.b.snippet(`<svg`),
                                (0, exports.Classes)($.classes),
                                $.width.transform(($) => sh.b.sub([sh.b.snippet(` width="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]), () => sh.b.nothing()),
                                $.height.transform(($) => sh.b.sub([sh.b.snippet(` height="`), sh.b.snippet(`${$}`), sh.b.snippet(`"`)]), () => sh.b.nothing()),
                                sh.b.snippet(`>`),
                                sh.b.snippet($.content),
                                sh.b.snippet(`</svg>`)
                            ]));
                            default: return _ea.au($[0]);
                        }
                    })
                ])))
            ]),
            sh.b.snippet(`</div>`)
        ]);
};
exports.Div = Div;
const Document = ($) => {
    return sh.group([
        sh.g.nested_block([
            sh.b.snippet(`<!DOCTYPE html>`)
        ]),
        sh.g.nested_block([
            sh.b.snippet(`<html>`)
        ]),
        sh.g.nested_block([
            sh.b.snippet(`<head>`),
            sh.b.indent([
                sh.g.nested_block([
                    sh.b.snippet(`<meta charset="UTF-8">`),
                ]),
                sh.g.nested_block([
                    sh.b.snippet(`<meta name="viewport" content="width=device-width, initial-scale=1.0">`),
                ]),
                sh.g.nested_block([
                    sh.b.snippet(`<style>`),
                    sh.b.indent([
                        sh.g.nested_block([
                            sh.b.snippet($.css)
                        ])
                    ]),
                    sh.b.snippet(`</style>`)
                ])
            ]),
            sh.b.snippet(`</head>`)
        ]),
        sh.g.nested_block([
            sh.b.snippet(`<body>`),
            sh.b.indent([
                sh.g.nested_block([
                    (0, exports.Div)($.root)
                ])
            ]),
            sh.b.snippet(`</body>`)
        ]),
        sh.g.nested_block([
            sh.b.snippet(`</html>`)
        ])
    ]);
};
exports.Document = Document;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm91bnRhaW5fcGVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ltcGxlbWVudGF0aW9uL2FsZ29yaXRobXMvdHJhbnNmb3JtYXRpb25zL2h0bWwvZm91bnRhaW5fcGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQXVDO0FBS3ZDLDhFQUErRDtBQUUvRCx3SEFBa0k7QUFDbEksd0tBQTJMO0FBSXBMLE1BQU0sT0FBTyxHQUFjLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDcEMsT0FBTyxJQUFBLGFBQWdCLEVBQUMsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtRQUNoQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDUCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDeEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBQSxxQ0FBaUQsRUFBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUNwRSxDQUFDLENBQUMsVUFBVSxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUN2QixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUM3RCxDQUFDO1lBQ0YsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1NBQ3BCLENBQUMsQ0FBQTtBQUNWLENBQUMsQ0FBQTtB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