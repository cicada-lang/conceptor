import { QuotientSet } from "../utils/quotient-set/index.js"
import type { Concept } from "./Concept.js"
import { conceptEqual } from "./conceptEqual.js"

export function createConceptSet(): QuotientSet<Concept> {
  return new QuotientSet({ equal: conceptEqual })
}
