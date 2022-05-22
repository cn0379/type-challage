type Pop<T extends any[]> = T extends [...infer First, infer _] ? First : never

type Poptest = Pop<[3, 2, 1]>