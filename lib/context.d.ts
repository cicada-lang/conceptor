export declare class Context {
    objs: Set<string>;
    attrs: Set<string>;
    incidence: Set<string>;
}
export declare function repr_incidence_has(obj: string, attr: string): string;
export declare function context_from_table(table: {
    [key: string]: Array<string>;
}): Context;
export declare function obj_has_attr_p(ctx: Context, obj: string, attr: string): boolean;
