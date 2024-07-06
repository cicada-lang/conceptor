import { setIntersection } from "../utils/Set.js"
import { assertSameContext } from "./assertSameContext.js"
import type { Concept } from "./Concept.js"
import { conceptFromAttributes } from "./conceptFromAttributes.js"

export function conceptJoin(x: Concept, y: Concept): Concept {
  assertSameContext([x, y], {
    who: "conceptJoin",
    message: "I expect the contexts of x and y to be the same.",
  })

  return conceptFromAttributes(x.context, setIntersection(x.intent, y.intent))
}
