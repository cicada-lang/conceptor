import * as Context from "./context";
export declare function has(ctx: Context.Context, obj: string, attr: string): boolean;
export declare function objs_match_attrs_p(ctx: Context.Context, objs: Set<string>, attrs: Set<string>): boolean;
export declare function imply(ctx: Context.Context, given_attrs: Set<string>, concluding_attrs: Set<string>): boolean;
