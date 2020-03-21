import * as Context from "./context";
export declare function has(ctx: Context.Context, obj: string, attr: string): boolean;
export declare function derive_objs(ctx: Context.Context, attrs: Set<string>): Set<string>;
export declare function derive_attrs(ctx: Context.Context, objs: Set<string>): Set<string>;
export declare function closure_objs(ctx: Context.Context, objs: Set<string>): Set<string>;
export declare function closure_attrs(ctx: Context.Context, attrs: Set<string>): Set<string>;
export declare function imply(ctx: Context.Context, given_attrs: Set<string>, concluding_attrs: Set<string>): boolean;
