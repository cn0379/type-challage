type Length<T extends readonly any[]> = T['length']


// tuple
type tuple = [string, number] 
type len = tuple['length']

// 普通数组
type arr = string[]
type len2 = arr['length']

// 普通数组类型取出的值为number类型 tuple 为具体的值