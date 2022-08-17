type LiteralStringUnion<T extends U, U = string> = T | (U & {})

export default LiteralStringUnion
