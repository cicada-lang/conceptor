import { createContext, type Context } from "./Context.js"
import type { CrossTable } from "./CrossTable.js"

export function createContextFromCrossTable(table: CrossTable): Context {
  const context = createContext()
  context.entities = new Set(Object.keys(table))
  context.attributes = new Set(Object.values(table).flat())
  for (const [entity, attributes] of Object.entries(table)) {
    context.entityAttributeIndex.set(entity, new Set(attributes))
  }

  return context
}
