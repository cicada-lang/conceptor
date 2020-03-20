class context_t {
  objects: Array<string>
  attributes: Array<string>
  relation: Set<string>

  constructor() {
    this.objects = new Array()
    this.attributes = new Array()
    this.relation = new Set()
  }
}

// function context_rander_concept_lattice

type entry_t = { [ key: string ]: string }

function context_from_table(
  table: Array<entry_t>,
): context_t {
  throw new Error()
}

function concept_p(
  ctx: context_t,
  extent: Set<string>,
  intent: Set<string>,
): boolean {
  return true
}
