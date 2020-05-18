import * as Ctx from "../ctx"
import * as util from "../util"

// NOTE The extend of a set of attrs is the set of all objs that have all the attrs.
// - when view a set of attrs as one attr,
//   to say an obj has this attr,
//   is to say the obj has each attr of the attrs.
// - note that english does not have a mean
//   to reverse the subject and the object of the verb `have`.
//   unlike the word `own` can be reversed by `is owned by`.
export function attrs_extent(ctx: Ctx.Ctx, attrs: Set<string>): Set<string> {
  const objs: Set<string> = new Set()
  for (const obj of ctx.objs)
    if (util.forall(attrs, (attr) => Ctx.has(ctx, obj, attr))) objs.add(obj)
  return objs
}

// NOTE The intent of a set of objs is the set of all attrs that are shared by all objs.
// - when view a set of objs as one obj,
//   to say this obj has an attr,
//   is to say each obj of the objs has the attr.
export function objs_intent(ctx: Ctx.Ctx, objs: Set<string>): Set<string> {
  const attrs: Set<string> = new Set()
  for (const attr of ctx.attrs)
    if (util.forall(objs, (obj) => Ctx.has(ctx, obj, attr))) attrs.add(attr)
  return attrs
}

export function objs_closure(ctx: Ctx.Ctx, objs: Set<string>): Set<string> {
  return attrs_extent(ctx, objs_intent(ctx, objs))
}

export function attrs_closure(ctx: Ctx.Ctx, attrs: Set<string>): Set<string> {
  return objs_intent(ctx, attrs_extent(ctx, attrs))
}
