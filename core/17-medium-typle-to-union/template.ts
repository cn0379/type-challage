// type TupleToUnion<T extends unknown[]> = T[number]
type TupleToUnion<T> = T[number & keyof T]
