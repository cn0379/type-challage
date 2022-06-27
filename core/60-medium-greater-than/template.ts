// 创建一个长度为 T 的元组
type Number2Tuple<T, R extends number[] = []> = 
  R['length'] extends T 
  ? R 
  : Number2Tuple<T, [...R, 0]>;

type GreaterThan<T extends number, U extends number, Arr = Number2Tuple<T>> = 
  Arr extends [number, ...infer E] 
  ? 
    E['length'] extends U 
    ? true 
    : GreaterThan<T, U, E>
  : false;