import * as Ctx from "../ctx"
import * as Objs from "../objs"
import * as Attrs from "../attrs"
import * as util from "../util"

export class Concept {
  constructor(
    ctx: Ctx.Ctx,
    public objs: Objs.Objs,
    public attrs: Attrs.Attrs
  ) {
    if (!Ctx.match(ctx, objs, attrs)) {
      throw new Error(
        "Concept constructor fail\n" +
          "objs does not match attrs\n" +
          `objs: ${Array.from(objs)}\n` +
          `attrs: ${Array.from(attrs)}\n`
      )
    }
  }
}
