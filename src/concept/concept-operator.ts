import * as Concept from "./concept"
import * as Ctx from "../ctx/ctx"
import * as util from "../util"

export function sup(
  ctx: Ctx.Ctx,
  xs: Array<Concept.Concept>
): Concept.Concept {
  if (xs.length === 0)
    return Concept.top(ctx)

  let attrs = util.intersection(...xs.map(x => x.attrs))
  let objs = Ctx.attrs_extent(ctx, attrs)
  return new Concept.Concept(ctx, objs, attrs)
}

export function inf(
  ctx: Ctx.Ctx,
  xs: Array<Concept.Concept>
): Concept.Concept {
  if (xs.length === 0)
    return Concept.bottom(ctx)

  let objs = util.intersection(...xs.map(x => x.objs))
  let attrs = Ctx.objs_intent(ctx, objs)
  return new Concept.Concept(ctx, objs, attrs)
}
