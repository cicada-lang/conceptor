import type { Context, Entity } from "../context/index.js"
import { setEqual } from "../utils/Set.js"
import { closureEntities } from "./index.js"

export function isExtent(
  context: Context,
  entities: ReadonlySet<Entity> | ReadonlyArray<Entity>,
): boolean {
  entities = new Set(entities)

  return setEqual(closureEntities(context, entities), entities)
}
