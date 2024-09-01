import { setIntersection } from "../utils/set/index.js"
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
  let resultAttributes = context.attributes
  for (const inputEntity of inputEntities) {
    resultAttributes = setIntersection(
      resultAttributes,
      attributesOf(context, inputEntity),
    )
  }

  return resultAttributes
}
