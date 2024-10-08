import {
  conceptFromAttributes,
  createConceptSet,
  type Concept,
} from "../concept/index.js"
import type { Context } from "../context/index.js"
import type { QuotientSet } from "../utils/quotient-set/index.js"

export function generateAttributeConceptSet(
  context: Context,
): QuotientSet<Concept> {
  const conceptSet = createConceptSet()

  for (const attribute of context.attributes) {
    const attributeConcept = conceptFromAttributes(context, [attribute])
    conceptSet.add(attributeConcept)
  }

  return conceptSet
}
