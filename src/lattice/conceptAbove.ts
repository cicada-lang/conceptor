import { assertSameContext } from "../concept/assertSameContext.js"
import type { Concept } from "../concept/Concept.js"
import { setIsSupersetOf } from "../utils/Set.js"

export function conceptAbove(x: Concept, y: Concept): boolean {
  assertSameContext([x, y], { who: "conceptAbove" })

  return setIsSupersetOf(x.extent, y.extent)
}
