import * as Ctx from "../ctx"
import { bodies_of_water } from "../ctx-examples/bodies-of-water"
import { planets } from "../ctx-examples/planets"

console.log(Ctx.objs_intent(bodies_of_water, new Set(["canal", "channel"])))
console.log(Ctx.objs_closure(bodies_of_water, new Set(["canal", "channel"])))

console.log(Ctx.attrs_extent(planets, new Set(["size.small"])))
console.log(Ctx.attrs_extent(planets, new Set(["size.medium"])))
console.log(Ctx.attrs_extent(planets, new Set(["size.large"])))

console.log(Ctx.attrs_extent(planets, new Set(["distance-from-sun.far"])))
console.log(Ctx.attrs_extent(planets, new Set(["distance-from-sun.near"])))

console.log(Ctx.attrs_extent(planets, new Set(["moon.no"])))
console.log(Ctx.attrs_extent(planets, new Set(["moon.yes"])))
