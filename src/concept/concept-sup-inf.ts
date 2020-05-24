import * as Concept from "../concept"
import * as Ctx from "../ctx"
import * as util from "../util"

export function sup(ctx: Ctx.Ctx, xs: Array<Concept.Concept>): Concept.Concept {
  if (xs.length === 0) {
    return Concept.top(ctx)
  }

  const attrs = util.intersection(...xs.map((x) => x.attrs))
  const objs = Ctx.attrs_extent(ctx, attrs)
  return new Concept.Concept(ctx, objs, attrs)
}

export function inf(ctx: Ctx.Ctx, xs: Array<Concept.Concept>): Concept.Concept {
  if (xs.length === 0) {
    return Concept.bottom(ctx)
  }

  const objs = util.intersection(...xs.map((x) => x.objs))
  const attrs = Ctx.objs_intent(ctx, objs)
  return new Concept.Concept(ctx, objs, attrs)
}
