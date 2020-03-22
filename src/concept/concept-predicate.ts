import * as Concept from "./concept"
import * as util from "../util"

export function subconcept_p(
  x: Concept.Concept,
  y: Concept.Concept,
): boolean {
  return util.include(y.objs, x.objs)
}

export function superconcept_p(
  x: Concept.Concept,
  y: Concept.Concept,
): boolean {
  return subconcept_p(y, x)
}
