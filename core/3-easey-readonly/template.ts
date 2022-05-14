// 遍历每一项都为readonly
type MyReadonly<T> = {
   readonly [P in keyof T]: T[P]
}

interface Test {
    a: string,
    b: string
}

// type read = Readonly<Test>
type read = MyReadonly<Test>

let obj:read = {
    a: '123',
    b: '456'
}

// 不可以修改
// obj.a = '1263'