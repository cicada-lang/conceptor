import assert from "node:assert"
import test from "node:test"
import { createContextFromCrossTable } from "../context/createContextFromCrossTable.js"
import { planets } from "../examples/planets.js"
import { isExtent } from "./isExtent.js"
import { isIntent } from "./isIntent.js"

test("isExtent", () => {
  const context = createContextFromCrossTable(planets)

  assert(!isExtent(context, ["earth"]))
  assert(isExtent(context, ["earth", "mars"]))
})
