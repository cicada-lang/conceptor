import * as Concept from "../concept"

export function pretty_concept(concept: Concept.Concept): string {
  return JSON.stringify(
    {
      objs: Array.from(concept.objs),
      attrs: Array.from(concept.attrs),
    },
    null,
    4
  )
}
