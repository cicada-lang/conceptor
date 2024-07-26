import type { Attribute, Context, Entity } from "./Context.js"

export function entitiesOf(
  context: Context,
  attribute: Attribute,
): ReadonlySet<Entity> {
  return context.attributeEntityIndex.get(attribute) || new Set()
}
