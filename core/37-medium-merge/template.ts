// your answers
type Merge<F, S> = {
    [K in (keyof F | keyof S)]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never
}
// 通过Omit<A&B, never>可以将A&B合到一个对象中；同Pick<A&B, keyof A | keyof B>
// type Merge<F, S> = Omit<Omit<F, keyof S> & S, never>;
