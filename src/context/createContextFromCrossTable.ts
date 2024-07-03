import { type Attribute, type Context, type Entity } from "./Context.js"
import type { CrossTable } from "./CrossTable.js"

export function createContextFromCrossTable(table: CrossTable): Context {
  const context = {
    entities: new Set<Entity>(),
    attributes: new Set<Attribute>(),
    entityAttributeIndex: new Map<Entity, Set<Attribute>>(),
  }

  context.entities = new Set(Object.keys(table))
  context.attributes = new Set(Object.values(table).flat())
  for (const [entity, attributes] of Object.entries(table)) {
    context.entityAttributeIndex.set(entity, new Set(attributes))
  }

  return Object.freeze(context)
}
