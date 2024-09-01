import { setEqual } from "../utils/set/index.js"
import type { Concept } from "./Concept.js"

export function conceptEqual(x: Concept, y: Concept): boolean {
  if (x.context !== y.context) return false
  return setEqual(x.extent, y.extent)
}
