type KebabCase<S> =
    S extends `${infer S1}${infer S2}` ?
    S2 extends Uncapitalize<S2> ? `${Uncapitalize<S1>}${KebabCase<S2>}` : `${Uncapitalize<S1>}-${KebabCase<S2>}` // 这个分支判断的是剩余参数是不是大写是的话 xx-xx
    : '1';


type letter = KebabCase<'h'>

type T44 = Uncapitalize<'helloWorld'>; // 开头转为小写
