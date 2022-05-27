type Replace<S extends string, From extends string, To extends string> =
    From extends '' ? S : S extends `${infer A}${From}${infer C}` ? `${A}${To}${C}` : S

type R1 = Replace<'foobarbar', 'bar', ''>