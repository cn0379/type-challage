type LengthOfString<
    S extends string,
    T extends string[] = []
    > = S extends `${infer F}${infer R}`
    ? LengthOfString<R, [F, ...T]>
    : T['length'];

type L1 = LengthOfString<'Sound! Euphonium'>