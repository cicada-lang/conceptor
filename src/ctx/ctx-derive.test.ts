import * as Ctx from "../ctx"
import * as Objs from "../objs"
import * as Attrs from "../attrs"
import { bodies_of_water } from "../ctx-examples/bodies-of-water"
import { planets } from "../ctx-examples/planets"

console.log(Ctx.objs_derive_attrs(bodies_of_water, new Objs.Objs(["canal", "channel"])))
console.log(Ctx.objs_closure(bodies_of_water, new Objs.Objs(["canal", "channel"])))

console.log(Ctx.attrs_derive_objs(planets, new Attrs.Attrs(["size.small"])))
console.log(Ctx.attrs_derive_objs(planets, new Attrs.Attrs(["size.medium"])))
console.log(Ctx.attrs_derive_objs(planets, new Attrs.Attrs(["size.large"])))

console.log(Ctx.attrs_derive_objs(planets, new Attrs.Attrs(["distance-from-sun.far"])))
console.log(Ctx.attrs_derive_objs(planets, new Attrs.Attrs(["distance-from-sun.near"])))

console.log(Ctx.attrs_derive_objs(planets, new Attrs.Attrs(["moon.no"])))
console.log(Ctx.attrs_derive_objs(planets, new Attrs.Attrs(["moon.yes"])))
