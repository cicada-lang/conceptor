import type { Attribute, Context } from "../context/index.js"
import { setEqual } from "../utils/set/index.js"
import { closureAttributes } from "./index.js"

export function isIntent(
  context: Context,
  attributes: ReadonlySet<Attribute> | ReadonlyArray<Attribute>,
): boolean {
  attributes = new Set(attributes)

  return setEqual(closureAttributes(context, attributes), attributes)
}
