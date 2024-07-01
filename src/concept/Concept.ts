import type { Attributes, Entities } from "../context/index.js"

export type Concept = {
  extent: Entities
  intent: Attributes
}

export function Concept(extent: Entities, intent: Attributes): Concept {
  return { extent, intent }
}
