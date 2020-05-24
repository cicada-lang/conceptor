import * as Ctx from "../ctx"

export function from_table(table: {
  [key: string]: Array<string>
}): Ctx.Ctx {
  const ctx = new Ctx.Ctx()
  for (const [obj, attrs] of Object.entries(table)) {
    ctx.objs.add(obj)
    for (const attr of attrs) {
      ctx.attrs.add(attr)
      ctx.incidence.add(incidence_format(obj, attr))
    }
  }
  return ctx
}

export function incidence_format(obj: string, attr: string): string {
  return `(${obj} has ${attr})`
}
