import { bottomConcept, conceptJoin, type Concept } from "../concept/index.js"
import type { Context } from "../context/index.js"
import type { QuotientSet } from "../utils/QuotientSet.js"
import { generateAttributeConceptSet } from "./generateAttributeConceptSet.js"
import { generateEntityConceptSet } from "./generateEntityConceptSet.js"

export function generateConceptSetByJoin(
  context: Context,
): QuotientSet<Concept> {
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

  return results.add(bottomConcept(context))
}
