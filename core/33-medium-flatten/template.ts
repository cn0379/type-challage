type Flatten<T> = T extends []
    ? [] : T extends [infer First, ...infer Rest]
    ? [...Flatten<First>, ...Flatten<Rest>]
    : [T]

type Flatten2<T> = T extends [infer First, ...infer Rest]
    ? '1'
    : '2'


// 不满足解构直接返回出去完成递归
type Flatten3<T> = T extends []
    ? [] : T extends [infer First, ...infer Rest]
    ? [...Flatten3<First>, ...Flatten3<Rest>]
    : []

type F1 = Flatten3<[0, [[1]], 2, 3, [4]]>