export class Context {
  objects: Array<string>
  attributes: Array<string>
  incidence: Set<string>

  constructor() {
    this.objects = new Array()
    this.attributes = new Array()
    this.incidence = new Set()
  }
}

export type Entry = { [key: string]: string }

export function context_from_table(table: Array<Entry>): Context {
  throw new Error("TODO")
}

export function derive_extent(context: Context, intent: Set<string>): Set<string> {
  throw new Error("TODO")
}

export function derive_intent(context: Context, intent: Set<string>): Set<string> {
  throw new Error("TODO")
}

export function extent_closure(context: Context, extent: Set<string>): Set<string> {
  throw new Error("TODO")
}

export function intent_closure(context: Context, intent: Set<string>): Set<string> {
  throw new Error("TODO")
}

export function formal_concept_p(context: Context, extent: Set<string>, intent: Set<string>): boolean {
  throw new Error("TODO")
}
