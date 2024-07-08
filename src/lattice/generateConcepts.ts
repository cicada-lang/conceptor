import {
  conceptFromAttributes,
  conceptFromEntities,
  conceptJoin,
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

// export function generateAttributeConceptSet(context: Context): QuotientSet<Concept> {
//   //
// }

export function generateConcepts(context: Context): Array<Concept> {
  const targets = generateEntityConceptSet(context)
  const results = createConceptSet()

  for (const entity of context.entities) {
    const entityConcept = conceptFromEntities(context, [entity])
    targets.add(entityConcept)
    results.add(entityConcept)
  }

  for (const attribute of context.attributes) {
    const attributeConcept = conceptFromAttributes(context, [attribute])

    results.add(attributeConcept)
  }

  while (true) {
    const first = targets.representatives.shift()
    if (first === undefined) {
      break
    }

    for (const target of targets.representatives) {
      const concept = conceptJoin(first, target)
      if (!results.has(concept)) {
        targets.add(concept)
        results.add(concept)
      }
    }
  }

  return results.representatives
}
