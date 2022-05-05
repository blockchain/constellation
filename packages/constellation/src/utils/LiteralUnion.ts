type LiteralStringUnion<T extends U, U = string> = T | (U & {})
type LiteralNumberUnion<T extends U, U = number> = T | (U & {})

export type { LiteralNumberUnion, LiteralStringUnion }
