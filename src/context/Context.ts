export type Entity = string
export type Attribute = string

export type Context = {
  entities: Set<Entity>
  attributes: Set<Attribute>
  entityAttributeIndex: Map<string, Set<string>>
}

export function createContext(): Context {
  return {
    entities: new Set(),
    attributes: new Set(),
    entityAttributeIndex: new Map(),
  }
}
