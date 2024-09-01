import { assertSameContext } from "../concept/assertSameContext.js"
import type { Concept } from "../concept/Concept.js"
import { setIsSubsetOf } from "../utils/set/index.js"

export function conceptBelow(x: Concept, y: Concept): boolean {
  assertSameContext([x, y], { who: "conceptBelow" })

  return setIsSubsetOf(x.extent, y.extent)
}
