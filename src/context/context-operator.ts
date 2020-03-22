import * as Context from "./context"
import * as util from "../util"

export function attrs_extent(
  ctx: Context.Context,
  attrs: Set<string>,
): Set<string> {
  let objs: Set<string> = new Set()
  for (let obj of ctx.objs)
    if (util.forall(attrs, (attr) => Context.has(ctx, obj, attr)))
      objs.add(obj)
  return objs
}

export function objs_intent(
  ctx: Context.Context,
  objs: Set<string>,
): Set<string> {
  let attrs: Set<string> = new Set()
  for (let attr of ctx.attrs)
    if (util.forall(objs, (obj) => Context.has(ctx, obj, attr)))
      attrs.add(attr)
  return attrs
}

export function objs_closure(
  ctx: Context.Context,
  objs: Set<string>,
): Set<string> {
  return attrs_extent(ctx, objs_intent(ctx, objs))
}

export function attrs_closure(
  ctx: Context.Context,
  attrs: Set<string>,
): Set<string> {
  return objs_intent(ctx, attrs_extent(ctx, attrs))
}
