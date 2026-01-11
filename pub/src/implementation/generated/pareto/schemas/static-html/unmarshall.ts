    import * as _p from 'pareto-core-refiner'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_generic from "../../generic/unmarshall"
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/static-html/unmarshall"
    import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
    import * as _i_out from "../../../../../interface/generated/pareto/schemas/static-html/data_types/target"
    
    
    export const Classes: _i_signatures._T_Classes = ($, $p) => _i_generic.process_unconstrained_list(
        $,
        {
            'value': ($) => _i_generic.process_text(
                $,
                null
            ),
        }
    )
    export const Phrasing_Content: _i_signatures._T_Phrasing_Content = ($, $p) => _i_generic.process_unconstrained_list(
        $,
        {
            'value': ($) => _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _p.dictionary.literal({
                        'span': ($): _i_out._T_Phrasing_Content.L.SG => ['span', Phrasing_Content(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                        'classified span': ($): _i_out._T_Phrasing_Content.L.SG => ['classified span', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'classes': _p.deprecated_cc(_i_generic.get_entry(
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
                                    'content': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "content",
                                        }
                                    ), ($) => Phrasing_Content(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                }),
                            }
                        )],
                        'titled span': ($): _i_out._T_Phrasing_Content.L.SG => ['titled span', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'title': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "title",
                                        }
                                    ), ($) => _i_generic.process_text(
                                        $,
                                        null
                                    )),
                                    'content': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "content",
                                        }
                                    ), ($) => Phrasing_Content(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                }),
                            }
                        )],
                        'a': ($): _i_out._T_Phrasing_Content.L.SG => ['a', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'text': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "text",
                                        }
                                    ), ($) => _i_generic.process_text(
                                        $,
                                        null
                                    )),
                                    'href': _p.deprecated_cc(_i_generic.get_entry(
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
                        'p': ($): _i_out._T_Phrasing_Content.L.SG => ['p', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'text': _p.deprecated_cc(_i_generic.get_entry(
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
            ),
        }
    )
    export const Flow_Content: _i_signatures._T_Flow_Content = ($, $p) => _i_generic.process_unconstrained_list(
        $,
        {
            'value': ($) => _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _p.dictionary.literal({
                        'div': ($): _i_out._T_Flow_Content.L.SG => ['div', Flow_Content(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                        'dimensioned div': ($): _i_out._T_Flow_Content.L.SG => ['dimensioned div', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'width': _p.deprecated_cc(_i_generic.get_entry(
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
                                    'height': _p.deprecated_cc(_i_generic.get_entry(
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
                                    'content': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "content",
                                        }
                                    ), ($) => Flow_Content(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                }),
                            }
                        )],
                        'classified div': ($): _i_out._T_Flow_Content.L.SG => ['classified div', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'classes': _p.deprecated_cc(_i_generic.get_entry(
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
                                    'content': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "content",
                                        }
                                    ), ($) => Flow_Content(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                }),
                            }
                        )],
                        'table': ($): _i_out._T_Flow_Content.L.SG => ['table', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'classes': _p.deprecated_cc(_i_generic.get_entry(
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
                                    'sections': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "sections",
                                        }
                                    ), ($) => _i_generic.process_unconstrained_list(
                                        $,
                                        {
                                            'value': ($) => _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'classes': _p.deprecated_cc(_i_generic.get_entry(
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
                                                        'type': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "type",
                                                            }
                                                        ), ($) => _i_generic.process_unconstrained_state_group(
                                                            $,
                                                            {
                                                                'states': _p.dictionary.literal({
                                                                    'header': ($): _i_out._T_Flow_Content.L.SG.table.sections.L._type.SG => ['header', _i_generic.process_nothing(
                                                                        $,
                                                                        null
                                                                    )],
                                                                    'body': ($): _i_out._T_Flow_Content.L.SG.table.sections.L._type.SG => ['body', _i_generic.process_nothing(
                                                                        $,
                                                                        null
                                                                    )],
                                                                    'footer': ($): _i_out._T_Flow_Content.L.SG.table.sections.L._type.SG => ['footer', _i_generic.process_nothing(
                                                                        $,
                                                                        null
                                                                    )],
                                                                }),
                                                            }
                                                        )),
                                                        'rows': _p.deprecated_cc(_i_generic.get_entry(
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
                                                                            'classes': _p.deprecated_cc(_i_generic.get_entry(
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
                                                                            'type': _p.deprecated_cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "type",
                                                                                }
                                                                            ), ($) => _i_generic.process_unconstrained_state_group(
                                                                                $,
                                                                                {
                                                                                    'states': _p.dictionary.literal({
                                                                                        'th': ($): _i_out._T_Flow_Content.L.SG.table.sections.L.rows.L._type.SG => ['th', _i_generic.process_nothing(
                                                                                            $,
                                                                                            null
                                                                                        )],
                                                                                        'td': ($): _i_out._T_Flow_Content.L.SG.table.sections.L.rows.L._type.SG => ['td', _i_generic.process_nothing(
                                                                                            $,
                                                                                            null
                                                                                        )],
                                                                                    }),
                                                                                }
                                                                            )),
                                                                            'height': _p.deprecated_cc(_i_generic.get_entry(
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
                                                                            'cells': _p.deprecated_cc(_i_generic.get_entry(
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
                                                                                                'classes': _p.deprecated_cc(_i_generic.get_entry(
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
                                                                                                'content': _p.deprecated_cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "content",
                                                                                                    }
                                                                                                ), ($) => Flow_Content(
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
                        'span': ($): _i_out._T_Flow_Content.L.SG => ['span', Phrasing_Content(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                        'label': ($): _i_out._T_Flow_Content.L.SG => ['label', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'classes': _p.deprecated_cc(_i_generic.get_entry(
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
                                    'text': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "text",
                                        }
                                    ), ($) => _i_generic.process_text(
                                        $,
                                        null
                                    )),
                                    'content': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "content",
                                        }
                                    ), ($) => Flow_Content(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                }),
                            }
                        )],
                        'img': ($): _i_out._T_Flow_Content.L.SG => ['img', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'classes': _p.deprecated_cc(_i_generic.get_entry(
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
                                    'src': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "src",
                                        }
                                    ), ($) => _i_generic.process_text(
                                        $,
                                        null
                                    )),
                                    'alt': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "alt",
                                        }
                                    ), ($) => _i_generic.process_text(
                                        $,
                                        null
                                    )),
                                    'width': _p.deprecated_cc(_i_generic.get_entry(
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
                                    'height': _p.deprecated_cc(_i_generic.get_entry(
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
                        'svg': ($): _i_out._T_Flow_Content.L.SG => ['svg', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'classes': _p.deprecated_cc(_i_generic.get_entry(
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
                                    'content': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "content",
                                        }
                                    ), ($) => _i_generic.process_text(
                                        $,
                                        null
                                    )),
                                    'width': _p.deprecated_cc(_i_generic.get_entry(
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
                                    'height': _p.deprecated_cc(_i_generic.get_entry(
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
            ),
        }
    )
    export const Document: _i_signatures._T_Document = ($, $p) => _i_generic.process_group(
        $,
        {
            'properties': ($) => ({
                'css': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "css",
                    }
                ), ($) => _i_generic.process_text(
                    $,
                    null
                )),
                'root': _p.deprecated_cc(_i_generic.get_entry(
                    $,
                    {
                        'key': "root",
                    }
                ), ($) => Flow_Content(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )),
            }),
        }
    )
