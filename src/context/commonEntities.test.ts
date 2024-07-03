import assert from "node:assert"
import test from "node:test"
import { planets } from "../examples/planets.js"
import { commonEntities } from "./commonEntities.js"
import { createContextFromCrossTable } from "./createContextFromCrossTable.js"

test("commonEntities", () => {
  const context = createContextFromCrossTable(planets)

  assert.deepStrictEqual(
    commonEntities(context, ["size.small"]),
    new Set(["mercury", "venus", "earth", "mars", "pluto"]),
  )

  assert.deepStrictEqual(
    commonEntities(context, ["size.small", "moon.yes"]),
    new Set(["earth", "mars", "pluto"]),
  )
})
