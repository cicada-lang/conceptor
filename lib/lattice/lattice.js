"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lattice {
    constructor(pre, join, meet) {
        this.pre = pre;
        this.join = join;
        this.meet = meet;
    }
}
exports.Lattice = Lattice;
class CompleteLattice extends Lattice {
    constructor(pre, sup, inf) {
        super(pre, (x, y) => sup([x, y]), (x, y) => inf([x, y]));
        this.pre = pre;
        this.sup = sup;
        this.inf = inf;
    }
    get top() { return this.inf([]); }
    get bottom() { return this.sup([]); }
}
exports.CompleteLattice = CompleteLattice;
