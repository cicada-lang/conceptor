import * as Ctx from "./ctx"
import * as util from "../util"

export function attrs_extent(
  ctx: Ctx.Ctx,
  attrs: Set<string>,
): Set<string> {
  let objs: Set<string> = new Set()
  for (let obj of ctx.objs)
    if (util.forall(attrs, (attr) => Ctx.has(ctx, obj, attr)))
      objs.add(obj)
  return objs
}

export function objs_intent(
  ctx: Ctx.Ctx,
  objs: Set<string>,
): Set<string> {
  let attrs: Set<string> = new Set()
  for (let attr of ctx.attrs)
    if (util.forall(objs, (obj) => Ctx.has(ctx, obj, attr)))
      attrs.add(attr)
  return attrs
}

export function objs_closure(
  ctx: Ctx.Ctx,
  objs: Set<string>,
): Set<string> {
  return attrs_extent(ctx, objs_intent(ctx, objs))
}

export function attrs_closure(
  ctx: Ctx.Ctx,
  attrs: Set<string>,
): Set<string> {
  return objs_intent(ctx, attrs_extent(ctx, attrs))
}
