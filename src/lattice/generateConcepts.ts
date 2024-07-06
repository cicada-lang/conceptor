import {
  conceptFromAttributes,
  conceptFromEntities,
  conceptJoin,
  createConceptSet,
  type Concept,
} from "../concept/index.js"
import type { Context } from "../context/index.js"

export function generateConcepts(context: Context): Array<Concept> {
  const targets = createConceptSet()
  const results = createConceptSet()

  for (const entity of context.entities) {
    const entityConcept = conceptFromEntities(context, [entity])
    targets.add(entityConcept)
    results.add(entityConcept)
  }

  for (const attribute of context.attributes) {
    const attributeConcept = conceptFromAttributes(context, [attribute])
    targets.add(attributeConcept)
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
