import { log } from "../utils/log.js"
import type { Concept } from "./Concept.js"

export function assertSameContext(
  concepts: Array<Concept>,
  options: {
    who: string
    message: string
  } & Record<string, any>,
): void {
  if (concepts.length < 2) return

  const { who, message } = options

  const [first, ...rest] = concepts
  const firstContext = first.context
  for (const concept of rest) {
    if (firstContext !== concept.context) {
      log(options)
      throw new Error(`[assertSameContext by ${who}] ${message}`)
    }
  }
}
