import type { Attribute, Context, Entity } from "./Context.js"

export function attributesOf(
  context: Context,
  entity: Entity,
): ReadonlySet<Attribute> {
  const attributes = context.entityAttributeIndex.get(entity)
  if (attributes === undefined) {
    return new Set()
  }

  return attributes
}