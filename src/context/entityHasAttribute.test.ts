import assert from "node:assert"
import test from "node:test"
import { createContextFromCrossTable } from "./createContextFromCrossTable.js"
import { entityHasAttribute } from "./entityHasAttribute.js"

test("entityHasAttribute", () => {
  const context = createContextFromCrossTable({
    mercury: ["size.small", "distance-from-sun.near", "moon.no"],
    venus: ["size.small", "distance-from-sun.near", "moon.no"],
    earth: ["size.small", "distance-from-sun.near", "moon.yes"],
    mars: ["size.small", "distance-from-sun.near", "moon.yes"],
    jupiter: ["size.large", "distance-from-sun.far", "moon.yes"],
    saturn: ["size.large", "distance-from-sun.far", "moon.yes"],
    uranus: ["size.medium", "distance-from-sun.far", "moon.yes"],
    neptune: ["size.medium", "distance-from-sun.far", "moon.yes"],
    pluto: ["size.small", "distance-from-sun.far", "moon.yes"],
  })

  assert(entityHasAttribute(context, "earth", "moon.yes"))
  assert(!entityHasAttribute(context, "earth", "moon.no"))
  assert(entityHasAttribute(context, "earth", "size.small"))
  assert(entityHasAttribute(context, "venus", "moon.no"))
})
