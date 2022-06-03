type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>

type Foo1 = {
    name: string
    age: string
}
type Bar = {
    name: string
    age: string
    gender: number
}

type result = keyof (Foo1 | Bar) // "name" | "age"



type ColorfulCircle = Diff<Foo1, Bar>