// 意思是先加个readonly T[k] 是获取类型  
// 类型不能 keyof 所以是T 完成递归
type DeepReadonly<T> = keyof T extends never
    ? T
    : { readonly [k in keyof T]: DeepReadonly<T[k]> };

type T<T> = keyof T extends never ? T : number

type T2 = DeepReadonly<X>

// keyof T 没有确切的结果是never
type T3<T> = keyof T

type T4 = T3<() => 22>

type X = {
    a: () => 22

}