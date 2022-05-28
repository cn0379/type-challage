type AppendArgument<Fn, A> = 
Fn extends (...args: infer R) => infer T ? (...args: [...R, A]) => T : never


type Arr = Array<string | number>
type get<T> = T extends Array<infer U> ? U : T
type B = get<Arr>