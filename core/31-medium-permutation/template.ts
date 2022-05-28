type Permutation<T, K = T> = [T] extends [never]
    ? []
    : K extends infer U
    ? [U, ...Permutation<Exclude<T, U>>]
    : []