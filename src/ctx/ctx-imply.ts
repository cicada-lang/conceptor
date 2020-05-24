import * as Ctx from "../ctx"
import * as Attrs from "../attrs"
import * as util from "../util"

export function imply(
  ctx: Ctx.Ctx,
  given_attrs: Attrs.Attrs,
  concluding_attrs: Attrs.Attrs
): boolean {
  return util.include(
    Ctx.attrs_extent(ctx, concluding_attrs),
    Ctx.attrs_extent(ctx, given_attrs)
  )
}
