// 约束一下K 必须存在于T中
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

interface a  {
    a: string,
    b: string
}

type b = keyof a


// 原始类型
interface TState {
	name: string;
	age: number;
	like: string[];
}


// 只要name 和 age
type pick = MyPick<TState, "name" | "age">