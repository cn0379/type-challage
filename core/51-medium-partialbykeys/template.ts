type IntersectionToObj<T> = {
    [K in keyof T]: T[K]
}

type PartialByKeys<T, K = any> = IntersectionToObj<{
    [P in keyof T as P extends K ? P : never]?: T[P]
} & {
        [P in Exclude<keyof T, K>]: T[P]
    }>

interface P11 {
    aa: string
}
interface Model {
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
} 


type P22 = boolean

type P33 = P11 & Model

type Pt1 = PartialByKeys<Model>