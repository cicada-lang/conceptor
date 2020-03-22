import * as Context from "../context/context"
import * as util from "../util"

export class Concept {
  constructor(
    public ctx: Context.Context,
    public objs: Set<string>,
    public attrs: Set<string>,
  ) {
    if (!Context.objs_match_attrs_p(ctx, objs, attrs)) {
      throw new Error(
        "Concept constructor fail\n" +
          "objs does not match attrs\n" +
          `objs: ${Array.from(objs)}\n` +
          `attrs: ${Array.from(attrs)}\n`)
    }
  }
}

export * from "./concept-builder"
export * from "./concept-operator"
export * from "./concept-predicate"
export * from "./concept-pretty"
