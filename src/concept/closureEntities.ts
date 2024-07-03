import {
  commonAttributes,
  commonEntities,
  type Context,
  type Entity,
} from "../context/index.js"

export function closureEntities(
  context: Context,
  entities: ReadonlySet<Entity>,
): ReadonlySet<Entity> {
  return commonEntities(context, commonAttributes(context, entities))
}
