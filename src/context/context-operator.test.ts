import * as Context from "./context"
import { bodies_of_water } from "../context-examples/bodies-of-water"
import { planets } from "../context-examples/planets"

console.log(Context.objs_intent(bodies_of_water, new Set(["canal", "channel"])))
console.log(Context.objs_closure(bodies_of_water, new Set(["canal", "channel"])))

console.log(Context.attrs_extent(planets, new Set(["size.small"])))
console.log(Context.attrs_extent(planets, new Set(["size.medium"])))
console.log(Context.attrs_extent(planets, new Set(["size.large"])))

console.log(Context.attrs_extent(planets, new Set(["distance-from-sun.far"])))
console.log(Context.attrs_extent(planets, new Set(["distance-from-sun.near"])))

console.log(Context.attrs_extent(planets, new Set(["moon.no"])))
console.log(Context.attrs_extent(planets, new Set(["moon.yes"])))
