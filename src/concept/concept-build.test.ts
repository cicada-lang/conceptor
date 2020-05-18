import * as Concept from "./concept"
import { bodies_of_water } from "../ctx-examples/bodies-of-water"
import { planets } from "../ctx-examples/planets"

console.log(
  "top of bodies_of_water:",
  Concept.pretty_concept(Concept.top(bodies_of_water))
)
console.log(
  "bottom of bodies_of_water:",
  Concept.pretty_concept(Concept.bottom(bodies_of_water))
)

console.log("top of planets:", Concept.pretty_concept(Concept.top(planets)))
console.log(
  "bottom of planets:",
  Concept.pretty_concept(Concept.bottom(planets))
)
