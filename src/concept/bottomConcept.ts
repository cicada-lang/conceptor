import type { Context } from "../context/Context.js"
import type { Concept } from "./Concept.js"

export function bottomConcept(context: Context): Concept {
  return {
    context,
    extent: new Set(),
    intent: context.attributes,
  }
}
