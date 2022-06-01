type AppendToObject<T, U extends string, V> = {
    [P in keyof T | U]: P extends keyof T ? T[P] : V
}


type testExpect3 = {
    key: 'cow'
    value: 'yellow'
    sun: false
    isMotherRussia: false | undefined
}

// typeof
// JS中的typeof：在运行时判断类型
// TS中的typeof：在编译时获取类型
interface Person {
    name: string,
    age: number,
}

let person: Person = { name: 'tao', age: 18 }
// ********************************************

//两者一样
type p1 = typeof person
type p2 = Person

let obj1: p1 = {
    name: 'tao',
    age: 18
}

// ********************************************

// in：遍历
type Names = "xiaoming" | "zhangsan"

type Obj = {
    [k in Names]: k
}

const obj3 = {
    xiaoming: 'xiaoming',
    zhangsan: 'zhangsan'
}

// ********************************************
// keyof 作用： 获取类，对象，接口的所有属性名组成的 联合类型
// 接口
interface Person {
    name: string;
    age: number;
}
type K1 = keyof Person;   // "name" | "age"
type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join" 


// 对象
let obj4 = { name: 'tao', age: 18 }
// type newobj = typeof obj
// type keyofObj = keyof newobj  //name | age

type keyofObj = keyof typeof obj4  //简写 name | age
let newObj1: keyofObj = 'name'    //通过
let newObj2: keyofObj = 'namexx'  //报错


// 类
class User {
    constructor(public username: string, public age: number) { }
}
type UserType = keyof User  //username | age

let userValue: UserType = 'username' //通过

// ********************************************

// infer
interface Customer {
    custname: string
    buymoney: number
}

// 需求：获取custFuncType的参数类型
type custFuncType = (cust: Customer) => string

// 实现：
type inferType<T> = T extends (parmas: infer P) => any ? P : T

type inferReusltType = inferType<custFuncType>  //Customer类型

