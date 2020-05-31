import * as Concept from "../concept"
import * as ut from "../ut"

export function subconcept_p(x: Concept.Concept, y: Concept.Concept): boolean {
  return ut.include(y.objs, x.objs)
}

export function superconcept_p(
  x: Concept.Concept,
  y: Concept.Concept
): boolean {
  return subconcept_p(y, x)
}
