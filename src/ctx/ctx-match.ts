import * as Ctx from "../ctx"
import * as Objs from "../objs"
import * as Attrs from "../attrs"
import * as ut from "../ut"

// NOTE objs match attrs
export function match(
  ctx: Ctx.Ctx,
  objs: Objs.Objs,
  attrs: Attrs.Attrs
): boolean {
  return (
    ut.set.include(ctx.objs, objs) &&
    ut.set.include(ctx.attrs, attrs) &&
    ut.equal(Ctx.objs_derive_attrs(ctx, objs), attrs) &&
    ut.equal(Ctx.attrs_derive_objs(ctx, attrs), objs)
  )
}
