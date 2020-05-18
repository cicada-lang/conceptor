import * as Ctx from "../ctx"
import * as util from "../util"

export function has(ctx: Ctx.Ctx, obj: string, attr: string): boolean {
  return ctx.incidence.has(`(${obj} has ${attr})`)
}

export function objs_match_attrs_p(
  ctx: Ctx.Ctx,
  objs: Set<string>,
  attrs: Set<string>
): boolean {
  return (
    util.include(ctx.objs, objs) &&
    util.include(ctx.attrs, attrs) &&
    util.equal(Ctx.objs_intent(ctx, objs), attrs) &&
    util.equal(Ctx.attrs_extent(ctx, attrs), objs)
  )
}

export function imply(
  ctx: Ctx.Ctx,
  given_attrs: Set<string>,
  concluding_attrs: Set<string>
): boolean {
  return util.include(
    Ctx.attrs_extent(ctx, concluding_attrs),
    Ctx.attrs_extent(ctx, given_attrs)
  )
}
