import { log } from "../utils/log.js"
import type { Concept } from "./Concept.js"

export function assertSameContext(
  concepts: Array<Concept>,
  options: { who: string },
): void {
  if (concepts.length < 2) return

  const { who } = options

  const [firstConcept, ...rest] = concepts
  const firstContext = firstConcept.context
  for (const concept of rest) {
    if (firstContext !== concept.context) {
      const message = "I expect the contexts of x and y to be the same."

      log({
        who,
        message,
        concepts,
        first: firstConcept,
        offendingConcept: concept,
      })

      throw new Error(`[assertSameContext by ${who}] ${message}`)
    }
  }
}
