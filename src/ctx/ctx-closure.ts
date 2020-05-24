import * as Ctx from "../ctx"
import * as Objs from "../objs"
import * as Attrs from "../attrs"
import * as util from "../util"

export function objs_closure(ctx: Ctx.Ctx, objs: Objs.Objs): Objs.Objs {
  return Ctx.attrs_derive_objs(ctx, Ctx.objs_derive_attrs(ctx, objs))
}

export function attrs_closure(ctx: Ctx.Ctx, attrs: Attrs.Attrs): Attrs.Attrs {
  return Ctx.objs_derive_attrs(ctx, Ctx.attrs_derive_objs(ctx, attrs))
}
