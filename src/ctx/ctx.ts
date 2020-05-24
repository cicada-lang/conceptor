import * as Objs from "../objs"
import * as Attrs from "../attrs"
import * as Incidence from "../incidence"

export class Ctx {
  objs: Objs.Objs = new Objs.Objs()
  attrs: Attrs.Attrs = new Attrs.Attrs()
  incidence: Incidence.Incidence = new Incidence.Incidence()
}
