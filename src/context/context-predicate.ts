import * as Context from "./context"
import * as util from "../util"

export function has(
  ctx: Context.Context,
  obj: string,
  attr: string,
): boolean {
  return ctx.incidence.has(`(${obj} has ${attr})`)
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
