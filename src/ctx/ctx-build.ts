import * as Ctx from "../ctx"

export function ctx_from_table(table: {
  [key: string]: Array<string>
}): Ctx.Ctx {
  let ctx = new Ctx.Ctx()
  for (let [obj, attrs] of Object.entries(table)) {
    ctx.objs.add(obj)
    for (let attr of attrs) {
      ctx.attrs.add(attr)
      ctx.incidence.add(incidence_format(obj, attr))
    }
  }
  return ctx
}

export function incidence_format(obj: string, attr: string): string {
  return `(${obj} has ${attr})`
}
