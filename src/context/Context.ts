export type Entities = Set<string>
export type Attributes = Set<string>

export type Context = {
  entities: Entities
  attributes: Attributes
  entityAttributeIndex: Map<string, Set<string>>
}

export function createContext(): Context {
  return {
    entities: new Set(),
    attributes: new Set(),
    entityAttributeIndex: new Map(),
  }
}
