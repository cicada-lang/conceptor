import { type Attribute, type Context, type Entity } from "./Context.js"
import type { CrossTable } from "./CrossTable.js"

export function createContextFromCrossTable(table: CrossTable): Context {
  const context = {
    entities: new Set<Entity>(),
    attributes: new Set<Attribute>(),
    entityAttributeIndex: new Map<Entity, Set<Attribute>>(),
    attributeEntityIndex: new Map<Attribute, Set<Entity>>(),
  }

  context.entities = new Set(Object.keys(table))
  context.attributes = new Set(Object.values(table).flat())

  for (const [entity, attributes] of Object.entries(table)) {
    context.entityAttributeIndex.set(entity, new Set(attributes))
  }

  for (const [entity, attributes] of Object.entries(table)) {
    for (const attribute of attributes) {
      let entities = context.attributeEntityIndex.get(attribute)
      if (entities === undefined) entities = new Set()
      context.attributeEntityIndex.set(attribute, entities)
      entities.add(entity)
    }
  }

  return Object.freeze(context)
}
