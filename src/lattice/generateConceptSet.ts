import { type Concept } from "../concept/index.js"
import type { Context } from "../context/index.js"
import type { QuotientSet } from "../utils/QuotientSet.js"
import { generateConceptSetByJoin } from "./generateConceptSetByJoin.js"

export function generateConceptSet(context: Context): QuotientSet<Concept> {
  return generateConceptSetByJoin(context)
}
