import * as _et from 'exupery-core-types'

export type Node =
    | ['file', string]
    | ['directory', Directory]

export type Directory = _et.Dictionary<Node>

export type Directory_Pair = {
    'top': Directory,
    'bottom': Directory,
}