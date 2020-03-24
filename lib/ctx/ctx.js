"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
class Ctx {
    constructor() {
        this.objs = new Set();
        this.attrs = new Set();
        this.incidence = new Set();
    }
}
exports.Ctx = Ctx;
__export(require("./ctx_builder"));
__export(require("./ctx_operator"));
__export(require("./ctx_predicate"));
