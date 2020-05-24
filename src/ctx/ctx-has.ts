import * as Ctx from "../ctx"
import * as Incidence from "../incidence"

export function has(ctx: Ctx.Ctx, obj: string, attr: string): boolean {
  return ctx.incidence.has(Incidence.format(obj, attr))
}
