"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Concept = __importStar(require("./concept"));
const Lattice = __importStar(require("../lattice/lattice"));
class ConceptLattice extends Lattice.CompleteLattice {
    constructor(ctx) {
        super(Concept.subconcept_p, xs => Concept.sup(ctx, xs), xs => Concept.inf(ctx, xs));
        this.ctx = ctx;
    }
}
exports.ConceptLattice = ConceptLattice;
