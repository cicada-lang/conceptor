import * as Concept from "../concept"
import * as Ctx from "../ctx"

export function top(ctx: Ctx.Ctx): Concept.Concept {
  const objs = Ctx.objs_closure(ctx, ctx.objs)
  const attrs = Ctx.objs_intent(ctx, ctx.objs)
  return new Concept.Concept(ctx, objs, attrs)
}

export function bottom(ctx: Ctx.Ctx): Concept.Concept {
  const objs = Ctx.attrs_extent(ctx, ctx.attrs)
  const attrs = Ctx.attrs_closure(ctx, ctx.attrs)
  return new Concept.Concept(ctx, objs, attrs)
}
