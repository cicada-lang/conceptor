export type Entities = Set<string>
export type Attributes = Set<string>

export type Context = {
  entities: Entities
  attributes: Attributes
  crossTable: Map<string, Set<string>>
}

export function createContext(): Context {
  return {
    entities: new Set(),
    attributes: new Set(),
    crossTable: new Map(),
  }
}
