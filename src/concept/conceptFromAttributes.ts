import {
  commonAttributes,
  commonEntities,
  type Attribute,
  type Context,
} from "../context/index.js"
import type { Concept } from "./Concept.js"

export function conceptFromAttributes(
  context: Context,
  attributes: ReadonlySet<Attribute> | ReadonlyArray<Attribute>,
): Concept {
  attributes = new Set(attributes)

  const extent = commonEntities(context, attributes)
  const intent = commonAttributes(context, extent)

  return Object.freeze({
    context,
    extent,
    intent,
  })
}
