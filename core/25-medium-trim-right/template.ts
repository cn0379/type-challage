type space = ' ' | '\t' | '\n';
type TrimRight<S extends string> = S extends `${infer L}${space}` ? TrimRight<L> : S;



type TrimLeft<S extends string> = S extends `${space}${infer T}` ? TrimLeft<T> : S;
// type TrimRight<S extends string> = S extends `${infer T}${WhiteSpace}` ? TrimRight<T> : S;

type A<S> = S extends `${space}${infer T}` ? 1 : 2;
type A1<S> = A<'1   '>