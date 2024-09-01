import { setIntersection } from "../utils/set/index.js"
import {
  entitiesOf,
  type Attribute,
  type Context,
  type Entity,
} from "./index.js"

export function commonEntities(
  context: Context,
  inputAttributes: ReadonlySet<Attribute> | ReadonlyArray<Attribute>,
): ReadonlySet<Entity> {
  let resultEntities = context.entities
  for (const inputAttribute of inputAttributes) {
    resultEntities = setIntersection(
      resultEntities,
      entitiesOf(context, inputAttribute),
    )
  }

  return resultEntities
}
