import { setIsSupersetOf } from "../utils/Set.js"
import type { Attribute, Context, Entity } from "./index.js"

export function commonEntities(
  context: Context,
  inputAttributes: ReadonlySet<Attribute> | ReadonlyArray<Attribute>,
): ReadonlySet<Entity> {
  inputAttributes = new Set(inputAttributes)

  const resultEntities = new Set<Entity>()
  for (const [keyEntity, foundAttributes] of context.entityAttributeIndex) {
    if (setIsSupersetOf(foundAttributes, inputAttributes)) {
      resultEntities.add(keyEntity)
    }
  }

  return resultEntities
}
