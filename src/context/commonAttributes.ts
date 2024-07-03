import type { Attribute, Context, Entity } from "./index.js"

export function commonAttributes(
  context: Context,
  inputEntities: Set<Entity> | Array<Entity>,
): Set<Attribute> {
  inputEntities = new Set(inputEntities)

  const resultAttributes = new Set<Attribute>()
  for (const inputEntity of inputEntities) {
    for (const attribute of context.entityAttributeIndex.get(inputEntity) || [])
      resultAttributes.add(attribute)
  }

  return resultAttributes
}
