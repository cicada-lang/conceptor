import {
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

export function generateConceptSet(context: Context): QuotientSet<Concept> {
  const targets = generateEntityConceptSet(context)
  const results = generateAttributeConceptSet(context).union(targets)

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

  return results
}

export function generateConcepts(context: Context): Array<Concept> {
  return generateConceptSet(context).representatives
}
