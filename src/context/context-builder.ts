import * as Context from "./context"

export function context_from_table(table: { [key: string]: Array<string> }): Context.Context {
  let ctx = new Context.Context()
  for (let [obj, attrs] of Object.entries(table)) {
    ctx.objs.add(obj)
    for (let attr of attrs) {
      ctx.attrs.add(attr)
      ctx.incidence.add(repr_incidence_has(obj, attr))
    }
  }
  return ctx
}

export function repr_incidence_has(obj: string, attr: string): string {
  return (`(${obj} has ${attr})`)
}
