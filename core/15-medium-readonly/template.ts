type Diff<A, B> = A extends B ? never : A

type MyReadonly2<T, K extends keyof T = keyof T> =
    { readonly [S in K]: T[S] }
    & { [S in Diff<keyof T, K>]: T[S] }


interface aaaaa {
    aa: string,
    bb: string,
}


interface bbbb {
    aa: string,
    bb: string,
    cc: string
}


