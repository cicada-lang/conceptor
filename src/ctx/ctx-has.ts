import * as Ctx from "../ctx"
import * as Relation from "../relation"

export function has(ctx: Ctx.Ctx, obj: string, attr: string): boolean {
  return ctx.relation.has(Relation.format(obj, attr))
}
