import * as Ctx from "../ctx"
import * as Objs from "../objs"
import * as Attrs from "../attrs"
import * as ut from "../ut"

export class Concept {
  constructor(public objs: Objs.Objs, public attrs: Attrs.Attrs) {}

  get extent(): Objs.Objs {
    return this.objs
  }

  get intent(): Attrs.Attrs {
    return this.attrs
  }
}
