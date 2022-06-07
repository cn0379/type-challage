type DropChar<S, C> = S extends `${infer X}${infer Y}` ? `${X extends C ? "" : X}${DropChar<Y, C>}` : ""

type Dt1 = DropChar<'butter fly!', ''>