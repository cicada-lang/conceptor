import * as Ctx from "../ctx"
import * as Relation from "../relation"

export function from_table(table: { [key: string]: Array<string> }): Ctx.Ctx {
  const ctx = new Ctx.Ctx()

  for (const [obj, attrs] of Object.entries(table)) {
    ctx.objs.add(obj)
    for (const attr of attrs) {
      ctx.attrs.add(attr)
      ctx.relation.add(Relation.format(obj, attr))
    }
  }

  return ctx
}
