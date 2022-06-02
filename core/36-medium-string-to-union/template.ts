type StringToUnion<T extends string> = T extends `${infer S}${infer R}` ?
    S | StringToUnion<R>
    : never;

type S1 = StringToUnion<'hello'>