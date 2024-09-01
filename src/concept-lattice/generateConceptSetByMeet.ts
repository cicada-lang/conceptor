import { conceptMeet, topConcept, type Concept } from "../concept/index.js"
import type { Context } from "../context/index.js"
import type { QuotientSet } from "../utils/quotient-set/index.js"
import { generateAttributeConceptSet } from "./generateAttributeConceptSet.js"
import { generateEntityConceptSet } from "./generateEntityConceptSet.js"

export function generateConceptSetByMeet(
  context: Context,
): QuotientSet<Concept> {
  const targets = generateAttributeConceptSet(context)
  const results = generateEntityConceptSet(context).union(targets)

  while (true) {
    const first = targets.representatives.shift()
    if (first === undefined) {
      break
    }

    for (const target of targets.representatives) {
      const concept = conceptMeet(first, target)
      if (!results.has(concept)) {
        targets.add(concept)
        results.add(concept)
      }
    }
  }

  return results.add(topConcept(context))
}
