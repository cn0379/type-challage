type MyDiff<A, B> = A extends B ? never : A


// 1. 先把第二个只读参数变为第一个参数的下标
// 2. 吧第二个参数全部变为可选
// 3. 逐个对比看看第二个要变为可选参数的是否存在存在的话就不要了
type MyReadonly2<T, K extends keyof T = keyof T> =
    { readonly [S in K]: T[S] }
    & { [S in MyDiff<keyof T, K>]: T[S] }

type MyReadonly3<T, K extends keyof T> =
    { readonly [S in K]: T[S] }
    & { [S in MyDiff<keyof T, K>]: T[S] }


interface Todo3 {
    title: string
    description?: string
    completed: boolean
}

type t15 = MyReadonly3<Todo3, 'title' | 'description'>