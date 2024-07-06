import { log } from "../utils/log.js"
import { setIntersection } from "../utils/Set.js"
import type { Concept } from "./Concept.js"
import { conceptFromEntities } from "./conceptFromEntities.js"

export function conceptMeet(x: Concept, y: Concept): Concept {
  if (x.context !== y.context) {
    const who = "conceptMeet"
    const message = "I expect the contexts of x and y to be the same."
    log({ who, x, y })
    throw new Error(`[${who}] ${message}`)
  }

  return conceptFromEntities(x.context, setIntersection(x.extent, y.extent))
}
