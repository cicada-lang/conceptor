import assert from "node:assert"
import test from "node:test"
import { planets } from "../examples/planets.js"
import { commonAttributes } from "./commonAttributes.js"
import { createContextFromCrossTable } from "./createContextFromCrossTable.js"

test("commonAttributes", () => {
  const context = createContextFromCrossTable(planets)

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
    new Set(["moon.yes"]),
  )
})
