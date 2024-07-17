import { type Concept } from "../concept/index.js"
import type { Context } from "../context/index.js"
import { generateConceptSet } from "./generateConceptSet.js"

export function generateConcepts(context: Context): Array<Concept> {
  return generateConceptSet(context).representatives
}
