export type Error =
    | ['parse error', null]
    | ['unmarshall error', null]
    | ['primitive deserialization', null]