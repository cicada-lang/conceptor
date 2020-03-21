import * as util from "./util"
import * as Context from "./context"

export function derive_objs(ctx: Context.Context, attrs: Set<string>): Set<string> {
  let objs: Set<string> = new Set()
  for (let obj of ctx.objs) {
    if (util.forall(attrs, (attr) => Context.obj_has_attr_p(ctx, obj, attr))) {
      objs.add(obj)
    }
  }
  return objs
}

export function derive_attrs(ctx: Context.Context, objs: Set<string>): Set<string> {
  let attrs: Set<string> = new Set()
  for (let attr of ctx.attrs) {
    if (util.forall(objs, (obj) => Context.obj_has_attr_p(ctx, obj, attr))) {
      attrs.add(attr)
    }
  }
  return attrs
}

export function closure_objs(ctx: Context.Context, objs: Set<string>): Set<string> {
  return derive_objs(ctx, derive_attrs(ctx, objs))
}

export function closure_attrs(ctx: Context.Context, attrs: Set<string>): Set<string> {
  return derive_attrs(ctx, derive_objs(ctx, attrs))
}

export function formal_concept_p(ctx: Context.Context, objs: Set<string>, attrs: Set<string>): boolean {
  return util.include(ctx.objs, objs) &&
    util.include(ctx.attrs, attrs) &&
    util.equal(derive_attrs(ctx, objs), attrs) &&
    util.equal(derive_objs(ctx, attrs), objs)
}
