import * as Context from "./context"
import * as op from "./operator"
import { bodies_of_water } from "./contexts/bodies-of-water"

console.log(op.derive_attrs(bodies_of_water, new Set(["canal", "channel"])))
console.log(op.closure_objs(bodies_of_water, new Set(["canal", "channel"])))
