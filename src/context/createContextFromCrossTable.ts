import { createContext, type Context } from "./Context.js"
import type { CrossTable } from "./CrossTable.js"

export function createContextFromCrossTable(table: CrossTable): Context {
  const context = createContext()
  return context
}
