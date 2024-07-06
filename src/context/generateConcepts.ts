import {
  conceptFromEntities,
  createConceptSet,
  type Concept,
} from "../concept/index.js"
import type { Context } from "./index.js"

export function generateConcepts(context: Context): Array<Concept> {
  const targets = createConceptSet()
  const results = createConceptSet()
  for (const entity of context.entities) {
    const entityConcept = conceptFromEntities(context, [entity])
    targets.add(entityConcept)
    results.add(entityConcept)
  }

  return results.representatives
}
