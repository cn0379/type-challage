type EndsWith<T extends string, U extends string> = T extends `${infer L}${U}` ? true : false;
