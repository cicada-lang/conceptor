export class Context {
  objs: Set<string> = new Set()
  attrs: Set<string> = new Set()
  incidence: Set<string> = new Set()
}

export function repr_incidence_has(obj: string, attr: string): string {
  return (`(${obj} has ${attr})`)
}

export function context_from_table(table: { [key: string]: Array<string> }): Context {
  let ctx = new Context()
  for (let [obj, attrs] of Object.entries(table)) {
    ctx.objs.add(obj)
    for (let attr of attrs) {
      ctx.attrs.add(attr)
      ctx.incidence.add(repr_incidence_has(obj, attr))
    }
  }
  return ctx
}

export function obj_has_attr_p(ctx: Context, obj: string, attr: string): boolean {
  return ctx.incidence.has(`(${obj} has ${attr})`)
}
