type ReplaceKeys<U, T, Y> = U extends U
    ? {
        [I in keyof U]: I extends T ? (I extends keyof Y ? Y[I] : never) : U[I];
    }
    : never;

    // 过于复杂没有看懂能了解差不多再来看一下