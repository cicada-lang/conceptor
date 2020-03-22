import * as util from "./util"
import * as Context from "./context"
import * as op from "./operator"

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
    util.equal(op.objs_intent(ctx, objs), attrs) &&
    util.equal(op.attrs_extent(ctx, attrs), objs)
}

export function subconcept_p(x: Concept, y: Concept): boolean {
  return util.include(y.objs, x.objs)
}

export function superconcept_p(x: Concept, y: Concept): boolean {
  return subconcept_p(y, x)
}

// TODO
// greatest_common_subconcept
// least_common_superconcept
