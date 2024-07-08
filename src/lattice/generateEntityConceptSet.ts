import {
  conceptFromEntities,
  createConceptSet,
  type Concept,
} from "../concept/index.js"
import type { Context } from "../context/index.js"
import type { QuotientSet } from "../utils/QuotientSet.js"

export function generateEntityConceptSet(
  context: Context,
): QuotientSet<Concept> {
  const conceptSet = createConceptSet()

  for (const entity of context.entities) {
    const entityConcept = conceptFromEntities(context, [entity])
    conceptSet.add(entityConcept)
  }

  return conceptSet
}
