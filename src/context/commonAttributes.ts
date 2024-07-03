import type { Attribute, Context, Entity } from "./index.js"

export function commonAttributes(
  context: Context,
  entities: Set<Entity> | Array<Entity>,
): Set<Attribute> {
  entities = new Set(entities)
  const attributes = new Set<Attribute>()
  for (const entity of entities) {
    for (const attribute of context.entityAttributeIndex.get(entity) || [])
      attributes.add(attribute)
  }

  return attributes
}
