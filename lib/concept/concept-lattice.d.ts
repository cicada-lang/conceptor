import * as Concept from "./concept";
import * as Ctx from "../ctx/ctx";
import * as Lattice from "../lattice/lattice";
export declare class ConceptLattice extends Lattice.CompleteLattice<Concept.Concept> {
    ctx: Ctx.Ctx;
    constructor(ctx: Ctx.Ctx);
}
