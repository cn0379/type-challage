type IsUnion<T, B = T> = T extends B ?
    [B] extends [T] ? false : true
    : never;



type IsUnion2<T, B = T> = T extends B ? [B] extends [T] ? [T] : true : ''

type tu1 = IsUnion2<'a' | 'b' | 'c' | 'd'>

// 冒泡



