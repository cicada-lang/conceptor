import { log } from "../utils/log.js"
import { setIntersection } from "../utils/Set.js"
import type { Concept } from "./Concept.js"
import { conceptFromAttributes } from "./conceptFromAttributes.js"

export function conceptJoin(x: Concept, y: Concept): Concept {
  if (x.context !== y.context) {
    const who = "conceptJoin"
    const message = "I expect the contexts of x and y to be the same."
    log({ who, x, y })
    throw new Error(`[${who}] ${message}`)
  }

  return conceptFromAttributes(x.context, setIntersection(x.intent, y.intent))
}
