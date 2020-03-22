import * as Ctx from "./ctx";
export declare function has(ctx: Ctx.Ctx, obj: string, attr: string): boolean;
export declare function objs_match_attrs_p(ctx: Ctx.Ctx, objs: Set<string>, attrs: Set<string>): boolean;
export declare function imply(ctx: Ctx.Ctx, given_attrs: Set<string>, concluding_attrs: Set<string>): boolean;
