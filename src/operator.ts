import * as util from "./util"
import * as Context from "./context"

export function has(
  ctx: Context.Context,
  obj: string,
  attr: string,
): boolean {
  return ctx.incidence.has(`(${obj} has ${attr})`)
}

export function derive_objs(
  ctx: Context.Context,
  attrs: Set<string>,
): Set<string> {
  let objs: Set<string> = new Set()
  for (let obj of ctx.objs) {
    if (util.forall(attrs, (attr) => has(ctx, obj, attr))) {
      objs.add(obj)
    }
  }
  return objs
}

export function derive_attrs(
  ctx: Context.Context,
  objs: Set<string>,
): Set<string> {
  let attrs: Set<string> = new Set()
  for (let attr of ctx.attrs) {
    if (util.forall(objs, (obj) => has(ctx, obj, attr))) {
      attrs.add(attr)
    }
  }
  return attrs
}

export function closure_objs(
  ctx: Context.Context,
  objs: Set<string>,
): Set<string> {
  return derive_objs(ctx, derive_attrs(ctx, objs))
}

export function closure_attrs(
  ctx: Context.Context,
  attrs: Set<string>,
): Set<string> {
  return derive_attrs(ctx, derive_objs(ctx, attrs))
}

export function imply(
  ctx: Context.Context,
  given_attrs: Set<string>,
  concluding_attrs: Set<string>,
): boolean {
  return util.include(
    derive_objs(ctx, concluding_attrs),
    derive_objs(ctx, given_attrs))
}
