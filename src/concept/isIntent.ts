import type { Attribute, Context } from "../context/index.js"
import { setEqual } from "../utils/Set.js"
import { closureAttributes } from "./index.js"

export function isIntent(
  context: Context,
  attributes: ReadonlySet<Attribute>,
): boolean {
  return setEqual(closureAttributes(context, attributes), attributes)
}
