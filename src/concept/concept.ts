import * as Context from "../context/context"
import * as util from "../util"

export class Concept {
  constructor(
    public ctx: Context.Context,
    public objs: Set<string>,
    public attrs: Set<string>,
  ) {
    if (!objs_match_attrs_p(ctx, objs, attrs)) {
      throw new Error(
        "Concept constructor fail\n" +
          "objs does not match attrs\n" +
          `objs: ${Array.from(objs)}\n` +
          `attrs: ${Array.from(attrs)}\n`)
    }
  }
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

export * from "./concept-builder"
export * from "./concept-operator"
export * from "./concept-predicate"
