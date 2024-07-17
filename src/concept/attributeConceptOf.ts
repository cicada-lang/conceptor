import type { Attribute, Context } from "../context/Context.js"
import type { Concept } from "./Concept.js"
import { conceptFromAttributes } from "./conceptFromAttributes.js"

export function attributeConceptOf(
  context: Context,
  attribute: Attribute,
): Concept {
  return conceptFromAttributes(context, [attribute])
}
