import { setIntersection } from "../utils/set/index.js"
import { assertSameContext } from "./assertSameContext.js"
import type { Concept } from "./Concept.js"
import { conceptFromAttributes } from "./conceptFromAttributes.js"

export function conceptJoin(x: Concept, y: Concept): Concept {
  assertSameContext([x, y], { who: "conceptJoin" })

  return conceptFromAttributes(x.context, setIntersection(x.intent, y.intent))
}
