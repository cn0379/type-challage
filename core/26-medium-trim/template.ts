type Space = ' ' | '\t' | '\n';
type Trim<S extends string> = S extends `${Space}${infer L}` | `${infer L}${Space}` ? Trim<L> : S;

