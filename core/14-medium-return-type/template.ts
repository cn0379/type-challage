type MyReturnType<T> = T extends (...arg: any) => infer R ? R : never

const fn1 = (v: boolean, w: any) => {}
const fn3 = (v: boolean, w: any) => [1,2,3] as const

type fn2 = MyReturnType<typeof fn1>