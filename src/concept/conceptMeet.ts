import { setIntersection } from "../utils/set/index.js"
import { assertSameContext } from "./assertSameContext.js"
import type { Concept } from "./Concept.js"
import { conceptFromEntities } from "./conceptFromEntities.js"

export function conceptMeet(x: Concept, y: Concept): Concept {
  assertSameContext([x, y], { who: "conceptMeet" })

  return conceptFromEntities(x.context, setIntersection(x.extent, y.extent))
}
