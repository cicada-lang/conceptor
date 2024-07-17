import { setIntersection } from "../utils/Set.js"
import {
  attributesOf,
  type Attribute,
  type Context,
  type Entity,
} from "./index.js"

export function commonAttributes(
  context: Context,
  inputEntities: ReadonlySet<Entity> | ReadonlyArray<Entity>,
): ReadonlySet<Attribute> {
  inputEntities = Array.from(inputEntities)
  if (inputEntities.length === 0) {
    return context.attributes
  }

  const [firstEntity, ...restEntities] = inputEntities
  let resultAttributes = attributesOf(context, firstEntity)
  for (const entity of restEntities) {
    resultAttributes = setIntersection(
      resultAttributes,
      attributesOf(context, entity),
    )
  }

  return resultAttributes
}
