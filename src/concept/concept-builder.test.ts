import * as Concept from "./concept"
import { bodies_of_water } from "../context-examples/bodies-of-water"
import { planets } from "../context-examples/planets"

console.log(
  "top_concept of bodies_of_water:",
  Concept.pretty_concept(Concept.top_concept(bodies_of_water)))
console.log(
  "bottom_concept of bodies_of_water:",
  Concept.pretty_concept(Concept.bottom_concept(bodies_of_water)))

console.log(
  "top_concept of planets:",
  Concept.pretty_concept(Concept.top_concept(planets)))
console.log(
  "bottom_concept of planets:",
  Concept.pretty_concept(Concept.bottom_concept(planets)))
