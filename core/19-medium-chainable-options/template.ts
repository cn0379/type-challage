type Chainable<O = {}> = {
    option<K extends string, V>(key: K, value: V): Chainable<O & { [P in K]: V }>;
    get(): O
}

type T1<T = {}> = {}
type T1t = T1

const aaaa: T1t = {
    a: "123"
}

interface PageInfo {
    title: string;
}

type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
    about: { title: "about" },
    contact: { title: "contact" },
    home: { title: "home" },
};

type Env1 = 'prod' | 'test' | 'dev';
type Env2 = 'prod' | 'boe' | 'ppe';

type EnvUnion = Env1 | Env2; // 并集
type EnvInter = Env1 & Env2; // 交集
