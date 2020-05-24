import * as Ctx from "../ctx"
import * as util from "../util"

// NOTE objs match attrs
export function match(
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
