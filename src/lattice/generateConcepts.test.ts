import assert from "node:assert"
import test from "node:test"
import { createContextFromCrossTable } from "../context/createContextFromCrossTable.js"
import { planets } from "../examples/planets.js"
import { waterbodies } from "../examples/waterbodies.js"
import { generateConcepts } from "./generateConcepts.js"

test("generateConcepts -- planets", () => {
  const context = createContextFromCrossTable(planets)
  const concepts = generateConcepts(context)

  assert.strictEqual(concepts.length, 12)
})

test("generateConcepts -- waterbodies", () => {
  const context = createContextFromCrossTable(waterbodies)
  const concepts = generateConcepts(context)

  assert.strictEqual(concepts.length, 13)
})
