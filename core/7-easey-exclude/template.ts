// 两个元素逐个对比看是否存在 
type MyExclude<T, U> = T extends U ? never : T


type t1 = 'a' | 'b' | 'c'
type t2 = 'a'
type t3 = t2 & MyExclude<t1, 'c'>
// type type1 = Exclude<1 | 2, 2>