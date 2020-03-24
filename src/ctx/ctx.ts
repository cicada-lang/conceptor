export class Ctx {
  objs: Set<string> = new Set()
  attrs: Set<string> = new Set()
  incidence: Set<string> = new Set()
}

export * from "./ctx-builder"
export * from "./ctx-operator"
export * from "./ctx-predicate"
