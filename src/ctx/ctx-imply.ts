import * as Ctx from "../ctx"
import * as util from "../util"

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
