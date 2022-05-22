type Last<T extends any[]> = T extends  [...infer Rest, infer last] ? T : never

type La = Last<[3, 2, 1]>