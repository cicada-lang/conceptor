class context_t {
  objects: Array<string>
  attributes: Array<string>
  incidence: Set<string>

  constructor() {
    this.objects = new Array()
    this.attributes = new Array()
    this.incidence = new Set()
  }
}

type entry_t = { [key: string]: string }

function context_from_table(
  table: Array<entry_t>,
): context_t {
  throw new Error("TODO")
}

function concept_p(
  ctx: context_t,
  extent: Set<string>,
  intent: Set<string>,
): boolean {
  throw new Error("TODO")
}
