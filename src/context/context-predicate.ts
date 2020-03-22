import * as Context from "./context"
import * as util from "../util"

export function has(
  ctx: Context.Context,
  obj: string,
  attr: string,
): boolean {
  return ctx.incidence.has(`(${obj} has ${attr})`)
}

export function objs_match_attrs_p(
  ctx: Context.Context,
  objs: Set<string>,
  attrs: Set<string>,
): boolean {
  return util.include(ctx.objs, objs) &&
    util.include(ctx.attrs, attrs) &&
    util.equal(Context.objs_intent(ctx, objs), attrs) &&
    util.equal(Context.attrs_extent(ctx, attrs), objs)
}

export function imply(
  ctx: Context.Context,
  given_attrs: Set<string>,
  concluding_attrs: Set<string>,
): boolean {
  return util.include(
    Context.attrs_extent(ctx, concluding_attrs),
    Context.attrs_extent(ctx, given_attrs))
}
