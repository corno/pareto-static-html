import * as _easync from 'exupery-core-async'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'

import * as d from "../../interface/queries/directory_content"
import * as d_directory_content from "../../interface/data/directory_content"

import * as t_path_to_path from "exupery-resources/dist/implementation/transformers/path/path"


export const $$: d.Query = _easync.create_query_function(
    ($p, $r) => $r['read directory'](
        {
            'path': {
                'path': $p['path'],
                'escape spaces in path': true,
            },
        },
        ($): d.Error => ['read directory', $],
    ).query_without_error_transformation(
        ($) => {
            return _easync.q.dictionary.parallel(
                $.map(($, key): _et.Query_Result<d_directory_content.Node, d.Node_Error> => {
                    const path = $.path
                    return _ea.cc($['node type'], ($) => {
                        switch ($[0]) {
                            case 'file': return _ea.ss($, ($): _et.Query_Result<d_directory_content.Node, d.Node_Error> => $r['read file'](
                                {
                                    'path': path,
                                    'escape spaces in path': true,
                                },
                                ($): d.Node_Error => ['file', $],
                            ).transform_result<d_directory_content.Node>(($) => ['file', $]))
                            case 'directory': return _ea.ss($, ($): _et.Query_Result<d_directory_content.Node, d.Node_Error> => {
                                return $$(
                                    $r,
                                )(
                                    {
                                        'path': path,
                                    },
                                    ($): d.Node_Error => ['directory', $]
                                ).transform_result<d_directory_content.Node>(($): d_directory_content.Node => ['directory', $])
                            })
                            default: return _ea.au($[0])
                        }
                    })
                }),
                ($): d.Error => ['directory content processing', $],
            )
        }
    )
)
