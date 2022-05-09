type LiteralNumberUnion<T extends U, U = number> = T | (U & {})

export default LiteralNumberUnion
