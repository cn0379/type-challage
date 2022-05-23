type myAwaited<T> = T extends Promise<infer R> ? myAwaited<R> : T

declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
  [P in keyof T]: myAwaited<T[P]>
}>

