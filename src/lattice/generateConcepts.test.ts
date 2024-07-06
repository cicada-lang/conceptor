import assert from "node:assert"
import test from "node:test"
import { createContextFromCrossTable } from "../context/createContextFromCrossTable.js"
import { planets } from "../examples/planets.js"
import { generateConcepts } from "./generateConcepts.js"

test("generateConcepts", () => {
  const context = createContextFromCrossTable(planets)
  const concepts = generateConcepts(context)

  assert.strictEqual(concepts.length, 12)
})
