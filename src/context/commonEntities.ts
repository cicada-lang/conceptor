import type { Attribute, Context, Entity } from "./index.js"

export function commonEntities(
  context: Context,
  attributes: Set<Attribute> | Array<Attribute>,
): Set<Entity> {
  attributes = new Set(attributes)
  const entities = new Set<Entity>()
  for (const attribute of attributes) {
    for (const [keyEntity, attributeSet] of context.entityAttributeIndex) {
      if (attributeSet.has(attribute)) {
        entities.add(keyEntity)
      }
    }
  }

  return entities
}
