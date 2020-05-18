import * as Ctx from "../ctx"
import * as util from "../util"

export class Concept {
  constructor(
    ctx: Ctx.Ctx,
    public objs: Set<string>,
    public attrs: Set<string>
  ) {
    if (!Ctx.objs_match_attrs_p(ctx, objs, attrs)) {
      throw new Error(
        "Concept constructor fail\n" +
          "objs does not match attrs\n" +
          `objs: ${Array.from(objs)}\n` +
          `attrs: ${Array.from(attrs)}\n`
      )
    }
  }
}
