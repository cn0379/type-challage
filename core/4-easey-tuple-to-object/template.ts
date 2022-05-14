// 遍历array T[number]

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]]: P
}

const tuple = ['tesla', 'model 2', 'model X', 'module Y'] as const


// typeof 把 JS ==> TS
type t = TupleToObject<typeof tuple>

const obj2: t = {
    tesla: "tesla",
    "model 2": "model 2",
    "model X": "model X",
    "module Y": "module Y"
}