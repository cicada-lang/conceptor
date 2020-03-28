export class Ctx {
  objs: Set<string> = new Set()
  attrs: Set<string> = new Set()
  incidence: Set<string> = new Set()
}

export * from "./ctx-build"
export * from "./ctx-function"
export * from "./ctx-predicate"
