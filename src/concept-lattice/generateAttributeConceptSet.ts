import {
  conceptFromEntities,
  createConceptSet,
  type Concept,
} from "../concept/index.js"
import type { Context } from "../context/index.js"
import type { QuotientSet } from "../utils/QuotientSet.js"

export function generateAttributeConceptSet(
  context: Context,
): QuotientSet<Concept> {
  const conceptSet = createConceptSet()

  for (const attribute of context.attributes) {
    const attributeConcept = conceptFromEntities(context, [attribute])
    conceptSet.add(attributeConcept)
  }

  return conceptSet
}
