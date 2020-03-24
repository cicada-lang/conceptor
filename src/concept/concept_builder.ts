import * as Concept from "./concept"
import * as Ctx from "../ctx/ctx"

export function top(
  ctx: Ctx.Ctx
): Concept.Concept {
  let objs = Ctx.objs_closure(ctx, ctx.objs)
  let attrs = Ctx.objs_intent(ctx, ctx.objs)
  return new Concept.Concept(ctx, objs, attrs)
}

export function bottom(
  ctx: Ctx.Ctx
): Concept.Concept {
  let objs = Ctx.attrs_extent(ctx, ctx.attrs)
  let attrs = Ctx.attrs_closure(ctx, ctx.attrs)
  return new Concept.Concept(ctx, objs, attrs)
}
