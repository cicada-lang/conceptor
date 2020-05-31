import * as Concept from "../concept"
import * as Ctx from "../ctx"
import * as Objs from "../objs"
import * as Attrs from "../attrs"
import * as util from "../util"

export function supremum(
  ctx: Ctx.Ctx,
  xs: Array<Concept.Concept>
): Concept.Concept {
  if (xs.length === 0) {
    return Concept.top(ctx)
  }

  const attrs = new Attrs.Attrs(util.intersection(...xs.map((x) => x.attrs)))
  const objs = Ctx.attrs_derive_objs(ctx, attrs)
  return new Concept.Concept(objs, attrs)
}

export function infimum(
  ctx: Ctx.Ctx,
  xs: Array<Concept.Concept>
): Concept.Concept {
  if (xs.length === 0) {
    return Concept.bottom(ctx)
  }

  const objs = new Objs.Objs(util.intersection(...xs.map((x) => x.objs)))
  const attrs = Ctx.objs_derive_attrs(ctx, objs)
  return new Concept.Concept(objs, attrs)
}
