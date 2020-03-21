import * as Context from "./context";
export declare function derive_objs(ctx: Context.Context, attrs: Set<string>): Set<string>;
export declare function derive_attrs(ctx: Context.Context, objs: Set<string>): Set<string>;
export declare function closure_objs(ctx: Context.Context, objs: Set<string>): Set<string>;
export declare function closure_attrs(ctx: Context.Context, attrs: Set<string>): Set<string>;
export declare function formal_concept_p(ctx: Context.Context, objs: Set<string>, attrs: Set<string>): boolean;
