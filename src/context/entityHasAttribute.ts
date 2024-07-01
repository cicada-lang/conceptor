import type { Attribute, Context, Entity } from "./Context.js"

export function entityHasAttribute(
  context: Context,
  entity: Entity,
  attribute: Attribute,
): boolean {
  const attributes = context.entityAttributeIndex.get(entity)
  if (attributes === undefined) return false
  return attributes.has(attribute)
}
