import * as Ctx from "../ctx"
import * as Attrs from "../attrs"
import * as ut from "../ut"

export function imply(
  ctx: Ctx.Ctx,
  given_attrs: Attrs.Attrs,
  concluding_attrs: Attrs.Attrs
): boolean {
  return ut.set.include(
    Ctx.attrs_derive_objs(ctx, concluding_attrs),
    Ctx.attrs_derive_objs(ctx, given_attrs)
  )
}
