
export type Typed<T, K extends string> = T & {
    type: K;
}

export type WithType<T, K extends string> = Typed<T, K>;

export type OmitFromUnion<U extends { type: string; }, K extends string | number | symbol> = {
    [p in U["type"]]: Omit<Extract<U, {type: p}>, K>;
}[U["type"]]
