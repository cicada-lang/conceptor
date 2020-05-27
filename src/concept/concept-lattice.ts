import * as Concept from "../concept"
import * as Ctx from "../ctx"
import * as Lattice from "../lattice/lattice"

export class ConceptLattice extends Lattice.CompleteLattice<Concept.Concept> {
  constructor(public ctx: Ctx.Ctx) {
    super(
      Concept.subconcept_p,
      (xs) => Concept.supremum(ctx, xs),
      (xs) => Concept.infimum(ctx, xs)
    )
  }
}
