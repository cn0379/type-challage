type RemoveIndexSignature<T> = {
    [key in keyof T  as key extends `${infer R}` ? R : never]: T[key]
}

type Foo2 = {
    [key: string]: any
    foo(): void
  }
  
type Baz2 = RemoveIndexSignature<Foo2>
