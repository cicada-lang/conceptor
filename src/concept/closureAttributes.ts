import {
  commonAttributes,
  commonEntities,
  type Attribute,
  type Context,
} from "../context/index.js"

export function closureAttributes(
  context: Context,
  attributes: ReadonlySet<Attribute>,
): ReadonlySet<Attribute> {
  return commonAttributes(context, commonEntities(context, attributes))
}
