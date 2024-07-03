import assert from "node:assert"
import test from "node:test"
import { commonEntities } from "./commonEntities.js"
import { createContextFromCrossTable } from "./createContextFromCrossTable.js"

test("commonEntities", () => {
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
    commonEntities(context, ["size.small"]),
    new Set(["mercury", "venus", "earth", "mars", "pluto"]),
  )

  assert.deepStrictEqual(
    commonEntities(context, ["size.small", "moon.yes"]),
    new Set(["earth", "mars", "pluto"]),
  )
})
