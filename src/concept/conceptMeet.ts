import { setIntersection } from "../utils/Set.js"
import { assertSameContext } from "./assertSameContext.js"
import type { Concept } from "./Concept.js"
import { conceptFromEntities } from "./conceptFromEntities.js"

export function conceptMeet(x: Concept, y: Concept): Concept {
  assertSameContext([x, y], {
    who: "conceptMeet",
    message: "I expect the contexts of x and y to be the same.",
  })

  return conceptFromEntities(x.context, setIntersection(x.extent, y.extent))
}
