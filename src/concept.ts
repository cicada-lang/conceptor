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
  return util.include_p(ctx.objs, objs) &&
    util.include_p(ctx.attrs, attrs) &&
    util.equal(op.derive_attrs(ctx, objs), attrs) &&
    util.equal(op.derive_objs(ctx, attrs), objs)
}

// TODO
// export function subconcept_p(): boolean {}
// greatest_common_subconcept
// superconcept_p
// least_common_superconcept
