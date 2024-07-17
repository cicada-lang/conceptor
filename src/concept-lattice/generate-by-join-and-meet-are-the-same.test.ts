import assert from "node:assert"
import test from "node:test"
import { createContextFromCrossTable } from "../context/createContextFromCrossTable.js"
import { planets } from "../examples/planets.js"
import { waterbodies } from "../examples/waterbodies.js"
import { generateConceptSetByJoin } from "./generateConceptSetByJoin.js"
import { generateConceptSetByMeet } from "./generateConceptSetByMeet.js"

test("by join and meet are the same -- planets", () => {
  const context = createContextFromCrossTable(planets)

  console.log(generateConceptSetByJoin(context).representatives)
  console.log(generateConceptSetByMeet(context).representatives)

  assert(
    generateConceptSetByJoin(context).isEqualTo(
      generateConceptSetByMeet(context),
    ),
  )
})

test("by join and meet are the same -- waterbodies", () => {
  const context = createContextFromCrossTable(waterbodies)

  console.log(generateConceptSetByJoin(context).representatives)
  console.log(generateConceptSetByMeet(context).representatives)

  assert(
    generateConceptSetByJoin(context).isEqualTo(
      generateConceptSetByMeet(context),
    ),
  )
})
