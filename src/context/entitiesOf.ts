import type { Attribute, Context, Entity } from "./Context.js"
import { attributesOf } from "./attributesOf.js"

export function entitiesOf(
  context: Context,
  attribute: Attribute,
): ReadonlySet<Entity> {
  const entities = new Set<Entity>()
  for (const entity of context.entities) {
    if (attributesOf(context, entity).has(attribute)) {
      entities.add(entity)
    }
  }

  return entities
}
