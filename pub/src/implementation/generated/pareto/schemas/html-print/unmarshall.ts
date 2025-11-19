import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/html-print/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/html-print/data_types/target"


export const Classes: _i_signatures._T_Classes = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_text(
            $,
            null
        ),
    }
)
export const Span: _i_signatures._T_Span = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'classes': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "classes",
                }
            ), ($) => Classes(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'title': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "title",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => _i_generic.process_text(
                        $,
                        null
                    ),
                }
            )),
            'children': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "children",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'classes': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "classes",
                                    }
                                ), ($) => Classes(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                                'type': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "type",
                                    }
                                ), ($) => _i_generic.process_unconstrained_state_group(
                                    $,
                                    {
                                        'states': _pa.dictionary_literal({
                                            'span': ($): _i_out._T_Span.children.L._type.SG => ['span', Span(
                                                $,
                                                {
                                                    'value deserializers': $p['value deserializers'],
                                                }
                                            )],
                                            'a': ($): _i_out._T_Span.children.L._type.SG => ['a', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'text': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "text",
                                                            }
                                                        ), ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        )),
                                                        'href': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "href",
                                                            }
                                                        ), ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        )),
                                                    }),
                                                }
                                            )],
                                            'p': ($): _i_out._T_Span.children.L._type.SG => ['p', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'text': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "text",
                                                            }
                                                        ), ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        )),
                                                    }),
                                                }
                                            )],
                                        }),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
        }),
    }
)
export const Div: _i_signatures._T_Div = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'classes': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "classes",
                }
            ), ($) => Classes(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'width': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "width",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    ),
                }
            )),
            'height': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "height",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    ),
                }
            )),
            'children': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "children",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'type': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "type",
                                    }
                                ), ($) => _i_generic.process_unconstrained_state_group(
                                    $,
                                    {
                                        'states': _pa.dictionary_literal({
                                            'div': ($): _i_out._T_Div.children.L._type.SG => ['div', Div(
                                                $,
                                                {
                                                    'value deserializers': $p['value deserializers'],
                                                }
                                            )],
                                            'table': ($): _i_out._T_Div.children.L._type.SG => ['table', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'classes': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "classes",
                                                            }
                                                        ), ($) => Classes(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        )),
                                                        'children': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "children",
                                                            }
                                                        ), ($) => _i_generic.process_unconstrained_list(
                                                            $,
                                                            {
                                                                'value': ($) => _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'classes': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "classes",
                                                                                }
                                                                            ), ($) => Classes(
                                                                                $,
                                                                                {
                                                                                    'value deserializers': $p['value deserializers'],
                                                                                }
                                                                            )),
                                                                            'type': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "type",
                                                                                }
                                                                            ), ($) => _i_generic.process_unconstrained_state_group(
                                                                                $,
                                                                                {
                                                                                    'states': _pa.dictionary_literal({
                                                                                        'header': ($): _i_out._T_Div.children.L._type.SG.table.children.L._type.SG => ['header', _i_generic.process_nothing(
                                                                                            $,
                                                                                            null
                                                                                        )],
                                                                                        'body': ($): _i_out._T_Div.children.L._type.SG.table.children.L._type.SG => ['body', _i_generic.process_nothing(
                                                                                            $,
                                                                                            null
                                                                                        )],
                                                                                        'footer': ($): _i_out._T_Div.children.L._type.SG.table.children.L._type.SG => ['footer', _i_generic.process_nothing(
                                                                                            $,
                                                                                            null
                                                                                        )],
                                                                                    }),
                                                                                }
                                                                            )),
                                                                            'rows': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "rows",
                                                                                }
                                                                            ), ($) => _i_generic.process_unconstrained_list(
                                                                                $,
                                                                                {
                                                                                    'value': ($) => _i_generic.process_group(
                                                                                        $,
                                                                                        {
                                                                                            'properties': ($) => ({
                                                                                                'classes': _pa.cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "classes",
                                                                                                    }
                                                                                                ), ($) => Classes(
                                                                                                    $,
                                                                                                    {
                                                                                                        'value deserializers': $p['value deserializers'],
                                                                                                    }
                                                                                                )),
                                                                                                'type': _pa.cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "type",
                                                                                                    }
                                                                                                ), ($) => _i_generic.process_unconstrained_state_group(
                                                                                                    $,
                                                                                                    {
                                                                                                        'states': _pa.dictionary_literal({
                                                                                                            'th': ($): _i_out._T_Div.children.L._type.SG.table.children.L.rows.L._type.SG => ['th', _i_generic.process_nothing(
                                                                                                                $,
                                                                                                                null
                                                                                                            )],
                                                                                                            'td': ($): _i_out._T_Div.children.L._type.SG.table.children.L.rows.L._type.SG => ['td', _i_generic.process_nothing(
                                                                                                                $,
                                                                                                                null
                                                                                                            )],
                                                                                                        }),
                                                                                                    }
                                                                                                )),
                                                                                                'height': _pa.cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "height",
                                                                                                    }
                                                                                                ), ($) => _i_generic.process_optional(
                                                                                                    $,
                                                                                                    {
                                                                                                        'value': ($) => _i_generic.process_number(
                                                                                                            $,
                                                                                                            {
                                                                                                                'deserializer': $p['value deserializers']['default number'],
                                                                                                            }
                                                                                                        ),
                                                                                                    }
                                                                                                )),
                                                                                                'cells': _pa.cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "cells",
                                                                                                    }
                                                                                                ), ($) => _i_generic.process_unconstrained_list(
                                                                                                    $,
                                                                                                    {
                                                                                                        'value': ($) => _i_generic.process_group(
                                                                                                            $,
                                                                                                            {
                                                                                                                'properties': ($) => ({
                                                                                                                    'classes': _pa.cc(_i_generic.get_entry(
                                                                                                                        $,
                                                                                                                        {
                                                                                                                            'key': "classes",
                                                                                                                        }
                                                                                                                    ), ($) => Classes(
                                                                                                                        $,
                                                                                                                        {
                                                                                                                            'value deserializers': $p['value deserializers'],
                                                                                                                        }
                                                                                                                    )),
                                                                                                                    'div': _pa.cc(_i_generic.get_entry(
                                                                                                                        $,
                                                                                                                        {
                                                                                                                            'key': "div",
                                                                                                                        }
                                                                                                                    ), ($) => Div(
                                                                                                                        $,
                                                                                                                        {
                                                                                                                            'value deserializers': $p['value deserializers'],
                                                                                                                        }
                                                                                                                    )),
                                                                                                                }),
                                                                                                            }
                                                                                                        ),
                                                                                                    }
                                                                                                )),
                                                                                            }),
                                                                                        }
                                                                                    ),
                                                                                }
                                                                            )),
                                                                        }),
                                                                    }
                                                                ),
                                                            }
                                                        )),
                                                    }),
                                                }
                                            )],
                                            'span': ($): _i_out._T_Div.children.L._type.SG => ['span', Span(
                                                $,
                                                {
                                                    'value deserializers': $p['value deserializers'],
                                                }
                                            )],
                                            'label': ($): _i_out._T_Div.children.L._type.SG => ['label', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'classes': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "classes",
                                                            }
                                                        ), ($) => Classes(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        )),
                                                        'text': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "text",
                                                            }
                                                        ), ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        )),
                                                        'div': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "div",
                                                            }
                                                        ), ($) => Div(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        )),
                                                    }),
                                                }
                                            )],
                                            'img': ($): _i_out._T_Div.children.L._type.SG => ['img', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'classes': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "classes",
                                                            }
                                                        ), ($) => Classes(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        )),
                                                        'src': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "src",
                                                            }
                                                        ), ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        )),
                                                        'alt': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "alt",
                                                            }
                                                        ), ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        )),
                                                        'width': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "width",
                                                            }
                                                        ), ($) => _i_generic.process_optional(
                                                            $,
                                                            {
                                                                'value': ($) => _i_generic.process_number(
                                                                    $,
                                                                    {
                                                                        'deserializer': $p['value deserializers']['default number'],
                                                                    }
                                                                ),
                                                            }
                                                        )),
                                                        'height': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "height",
                                                            }
                                                        ), ($) => _i_generic.process_optional(
                                                            $,
                                                            {
                                                                'value': ($) => _i_generic.process_number(
                                                                    $,
                                                                    {
                                                                        'deserializer': $p['value deserializers']['default number'],
                                                                    }
                                                                ),
                                                            }
                                                        )),
                                                    }),
                                                }
                                            )],
                                            'svg': ($): _i_out._T_Div.children.L._type.SG => ['svg', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'classes': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "classes",
                                                            }
                                                        ), ($) => Classes(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        )),
                                                        'content': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "content",
                                                            }
                                                        ), ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        )),
                                                        'width': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "width",
                                                            }
                                                        ), ($) => _i_generic.process_optional(
                                                            $,
                                                            {
                                                                'value': ($) => _i_generic.process_number(
                                                                    $,
                                                                    {
                                                                        'deserializer': $p['value deserializers']['default number'],
                                                                    }
                                                                ),
                                                            }
                                                        )),
                                                        'height': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "height",
                                                            }
                                                        ), ($) => _i_generic.process_optional(
                                                            $,
                                                            {
                                                                'value': ($) => _i_generic.process_number(
                                                                    $,
                                                                    {
                                                                        'deserializer': $p['value deserializers']['default number'],
                                                                    }
                                                                ),
                                                            }
                                                        )),
                                                    }),
                                                }
                                            )],
                                        }),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
        }),
    }
)
export const Document: _i_signatures._T_Document = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'css': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "css",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'root': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "root",
                }
            ), ($) => Div(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
