import * as Concept from "./concept"
import * as Context from "../context/context"

export function top_concept(
  ctx: Context.Context
): Concept.Concept {
  let objs = Context.objs_closure(ctx, ctx.objs)
  let attrs = Context.objs_intent(ctx, ctx.objs)
  return new Concept.Concept(ctx, objs, attrs)
}

export function bottom_concept(
  ctx: Context.Context
): Concept.Concept {
  let objs = Context.attrs_extent(ctx, ctx.attrs)
  let attrs = Context.attrs_closure(ctx, ctx.attrs)
  return new Concept.Concept(ctx, objs, attrs)
}
