import assert from "node:assert"
import test from "node:test"
import { commonAttributes } from "./commonAttributes.js"
import { createContextFromCrossTable } from "./createContextFromCrossTable.js"

test("commonAttributes", () => {
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

  assert.deepStrictEqual(
    commonAttributes(context, ["earth"]),
    new Set(["size.small", "distance-from-sun.near", "moon.yes"]),
  )

  assert.deepStrictEqual(
    commonAttributes(context, ["earth", "mars"]),
    new Set(["size.small", "distance-from-sun.near", "moon.yes"]),
  )

  assert.deepStrictEqual(
    commonAttributes(context, ["earth", "mars", "jupiter"]),
    new Set([
      "size.small",
      "size.large",
      "distance-from-sun.near",
      "distance-from-sun.far",
      "moon.yes",
    ]),
  )
})
