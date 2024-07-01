export type Objects = Set<string>
export type Attributes = Set<string>

export type Context = {
  objects: Objects
  attributes: Attributes
  crossTable: Map<string, Set<string>>
}

export function createContext(): Context {
  return {
    objects: new Set(),
    attributes: new Set(),
    crossTable: new Map(),
  }
}
