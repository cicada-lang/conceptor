import type { Context } from "../context/Context.js"
import type { Concept } from "./Concept.js"

export function topConcept(context: Context): Concept {
  return {
    context,
    extent: context.entities,
    intent: new Set(),
  }
}
