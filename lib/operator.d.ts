import * as Context from "./context";
export declare function has(ctx: Context.Context, obj: string, attr: string): boolean;
export declare function attrs_extent(ctx: Context.Context, attrs: Set<string>): Set<string>;
export declare function objs_intent(ctx: Context.Context, objs: Set<string>): Set<string>;
export declare function objs_closure(ctx: Context.Context, objs: Set<string>): Set<string>;
export declare function attrs_closure(ctx: Context.Context, attrs: Set<string>): Set<string>;
export declare function imply(ctx: Context.Context, given_attrs: Set<string>, concluding_attrs: Set<string>): boolean;
