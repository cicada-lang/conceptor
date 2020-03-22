export class Context {
  objs: Set<string> = new Set()
  attrs: Set<string> = new Set()
  incidence: Set<string> = new Set()
}

export * from "./context-builder"
export * from "./context-operator"
export * from "./context-predicate"
