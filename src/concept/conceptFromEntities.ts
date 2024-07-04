import {
  commonAttributes,
  commonEntities,
  type Context,
  type Entity,
} from "../context/index.js"
import type { Concept } from "./Concept.js"

export function conceptFromEntities(
  context: Context,
  entities: ReadonlySet<Entity> | ReadonlyArray<Entity>,
): Concept {
  entities = new Set(entities)

  const intent = commonAttributes(context, entities)
  const extent = commonEntities(context, intent)

  return Object.freeze({
    context,
    extent,
    intent,
  })
}
