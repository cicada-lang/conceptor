import * as util from "../util"
import * as Context from "../context/context"
import * as Lattice from "../lattice/lattice"

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

export function subconcept_p(x: Concept, y: Concept): boolean {
  if (x.ctx !== y.ctx) {
    throw new Error("CONTEXT_MISMATCH")
  }

  return util.include(y.objs, x.objs)
}

export function superconcept_p(x: Concept, y: Concept): boolean {
  return subconcept_p(y, x)
}

export function greatest_common_subconcept(xs: Array<Concept>): Concept {
  throw new Error("TODO")
}

export function least_common_superconcept(xs: Array<Concept>): Concept {
  throw new Error("TODO")
}

// const concept_lattice: Lattice.CompleteLattice<Concept> =
//   new Lattice.CompleteLattice(pre, sup, inf)
