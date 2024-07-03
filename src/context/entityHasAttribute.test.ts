import assert from "node:assert"
import test from "node:test"
import { planets } from "../examples/planets.js"
import { createContextFromCrossTable } from "./createContextFromCrossTable.js"
import { entityHasAttribute } from "./entityHasAttribute.js"

test("entityHasAttribute", () => {
  const context = createContextFromCrossTable(planets)

  assert(entityHasAttribute(context, "earth", "moon.yes"))
  assert(!entityHasAttribute(context, "earth", "moon.no"))
  assert(entityHasAttribute(context, "earth", "size.small"))
  assert(entityHasAttribute(context, "venus", "moon.no"))
})
