import * as Ctx from "../ctx"

export function has(ctx: Ctx.Ctx, obj: string, attr: string): boolean {
  return ctx.incidence.has(`(${obj} has ${attr})`)
}
