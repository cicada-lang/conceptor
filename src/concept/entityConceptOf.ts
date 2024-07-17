import type { Context, Entity } from "../context/Context.js"
import type { Concept } from "./Concept.js"
import { conceptFromEntities } from "./conceptFromEntities.js"

export function entityConceptOf(context: Context, entity: Entity): Concept {
  return conceptFromEntities(context, [entity])
}
