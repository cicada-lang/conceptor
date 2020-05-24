import * as Ctx from "../ctx"
import * as Objs from "../objs"
import * as Attrs from "../attrs"
import * as util from "../util"

// NOTE The extent of a set of attrs is the set of all objs that have all the attrs.
// - when view a set of attrs as one attr,
//   to say an obj has this attr,
//   is to say the obj has each attr of the attrs.
// - note that english does not have a mean
//   to reverse the subject and the object of the verb `have`.
//   unlike the word `own` can be reversed by `is owned by`.
export function attrs_extent(ctx: Ctx.Ctx, attrs: Attrs.Attrs): Objs.Objs {
  const objs = new Objs.Objs()

  for (const obj of ctx.objs) {
    if (util.forall(attrs, (attr) => Ctx.has(ctx, obj, attr))) {
      objs.add(obj)
    }
  }

  return objs
}

// NOTE The intent of a set of objs is the set of all attrs that are shared by all objs.
// - when view a set of objs as one obj,
//   to say this obj has an attr,
//   is to say each obj of the objs has the attr.
export function objs_intent(ctx: Ctx.Ctx, objs: Objs.Objs): Attrs.Attrs {
  const attrs = new Attrs.Attrs()

  for (const attr of ctx.attrs) {
    if (util.forall(objs, (obj) => Ctx.has(ctx, obj, attr))) {
      attrs.add(attr)
    }
  }

  return attrs
}
