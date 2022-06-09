type PickByType<T, U> = Pick<T, { [K in keyof T]: T[K] extends U ? K : never }[keyof T]>;

type P1<T, U> =  { [K in keyof T]: T[K] extends U ? K : never }[keyof T]

interface Model {
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }

type Pt = Pick<Model,'name'>