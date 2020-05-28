import * as Objs from "../objs"
import * as Attrs from "../attrs"
import * as Relation from "../relation"

export class Ctx {
  objs: Objs.Objs = new Objs.Objs()
  attrs: Attrs.Attrs = new Attrs.Attrs()
  relation: Relation.Relation = new Relation.Relation()
}
