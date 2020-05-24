import * as Ctx from "../ctx"
import * as Objs from "../objs"
import * as Attrs from "../attrs"
import * as util from "../util"

// NOTE objs match attrs
export function match(
  ctx: Ctx.Ctx,
  objs: Objs.Objs,
  attrs: Attrs.Attrs
): boolean {
  return (
    util.include(ctx.objs, objs) &&
    util.include(ctx.attrs, attrs) &&
    util.equal(Ctx.objs_derive_attrs(ctx, objs), attrs) &&
    util.equal(Ctx.attrs_derive_objs(ctx, attrs), objs)
  )
}
