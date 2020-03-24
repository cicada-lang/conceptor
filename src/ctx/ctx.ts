export class Ctx {
  objs: Set<string> = new Set()
  attrs: Set<string> = new Set()
  incidence: Set<string> = new Set()
}

export * from "./ctx_builder"
export * from "./ctx_operator"
export * from "./ctx_predicate"
