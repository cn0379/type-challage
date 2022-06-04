type AnyOf<T extends any[]> = T[number] extends 0 | '' | false | [] | { [key: string]: never }
    ? false : true;

type At1 = AnyOf<[0, '', false, [], {}]>