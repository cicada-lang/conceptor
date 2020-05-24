import * as Ctx from "../ctx"
import * as Objs from "../objs"
import * as Attrs from "../attrs"
import * as util from "../util"

export function attrs_derive_objs(ctx: Ctx.Ctx, attrs: Attrs.Attrs): Objs.Objs {
  const objs = new Objs.Objs()

  for (const obj of ctx.objs) {
    if (util.forall(attrs, (attr) => Ctx.has(ctx, obj, attr))) {
      objs.add(obj)
    }
  }

  return objs
}

export function objs_derive_attrs(ctx: Ctx.Ctx, objs: Objs.Objs): Attrs.Attrs {
  const attrs = new Attrs.Attrs()

  for (const attr of ctx.attrs) {
    if (util.forall(objs, (obj) => Ctx.has(ctx, obj, attr))) {
      attrs.add(attr)
    }
  }

  return attrs
}
