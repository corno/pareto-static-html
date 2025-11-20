import * as _easync from 'exupery-core-async'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'
import * as _ed from 'exupery-core-dev'

import * as d from "../../interface/queries/directory_content"
import * as d_directory_content from "../../interface/data/directory_content"


export const $$: d.Query = _easync.create_query_procedure(
    ($p, $r) => $r['read directory'](
        {
            'path': {
                'path': $p.path,
                'escape spaces in path': true,
            },
            'prepend results with path': true,
        },
        ($): d.Error => ['read directory', $],
    ).stage_without_error_transformation(
        ($) => {
            _ed.log_debug_message("Read directory content", () => {})
            return _easync.q.dictionary.parallel(
                $.map(($, key): _et.Staging_Result<d_directory_content.Node, d.Node_Error> => _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'file': return _ea.ss($, ($): _et.Staging_Result<d_directory_content.Node, d.Node_Error> => $r['read file'](
                            {
                                'path': key,
                                'escape spaces in path': true,
                            },
                            ($): d.Node_Error => ['file', $],
                        ).transform<d_directory_content.Node>(($) => ['file', $]))
                        case 'directory': return _ea.ss($, ($): _et.Staging_Result<d_directory_content.Node, d.Node_Error> => {
                            return $$(
                                $r,
                            )(
                                {
                                    'path': key,
                                },
                                ($): d.Node_Error => ['directory', $]
                            ).transform(($): d_directory_content.Node => ['directory', $])
                        })
                        default: return _ea.au($[0])
                    }
                })),
                ($): d.Error => ['directory content processing', $],
            )
        }
    )
)
