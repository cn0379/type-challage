type MyReverse<T> = T extends [infer A, ...infer B] ? [...MyReverse<B>, A] : []
type FlipArguments<T> = T extends (...args: infer A) => infer R ? (...args: MyReverse<A>) => R : never