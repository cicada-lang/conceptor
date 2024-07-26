import type { Attribute, Context, Entity } from "./Context.js"

export function attributesOf(
  context: Context,
  entity: Entity,
): ReadonlySet<Attribute> {
  return context.entityAttributeIndex.get(entity) || new Set()
}
