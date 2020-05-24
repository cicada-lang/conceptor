import * as Concept from "../concept"

export function repr(concept: Concept.Concept): string {
  const the = {
    objs: Array.from(concept.objs),
    attrs: Array.from(concept.attrs),
  }
  return JSON.stringify(the, null, 2)
}
