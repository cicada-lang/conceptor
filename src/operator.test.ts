import * as Context from "./context"
import * as op from "./operator"
import { bodies_of_water } from "./contexts/bodies-of-water"
import { planets } from "./contexts/planets"

// console.log(op.objs_intent(bodies_of_water, new Set(["canal", "channel"])))
// console.log(op.objs_closure(bodies_of_water, new Set(["canal", "channel"])))

console.log(op.attrs_extent(planets, new Set(["size.small"])))
console.log(op.attrs_extent(planets, new Set(["size.medium"])))
console.log(op.attrs_extent(planets, new Set(["size.large"])))

console.log(op.attrs_extent(planets, new Set(["distance-from-sun.far"])))
console.log(op.attrs_extent(planets, new Set(["distance-from-sun.near"])))

console.log(op.attrs_extent(planets, new Set(["moon.no"])))
console.log(op.attrs_extent(planets, new Set(["moon.yes"])))
