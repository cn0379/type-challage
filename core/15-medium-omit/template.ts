// type MyOmit<T, K extends keyof T> = {
//     [P in MyExclude<keyof T, K>]: T[P]
// }
// 解体思路先用exclude转为联合类型 再用pick 转为对象
type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>

interface test1 {
    a: string
    b: number
    c: number
    d: number
}

type test2 = MyExclude<keyof test1, 'a'>

type test3 = MyPick<test1, 'a' | 'b' | 'c'>