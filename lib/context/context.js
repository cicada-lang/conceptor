"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
class Context {
    constructor() {
        this.objs = new Set();
        this.attrs = new Set();
        this.incidence = new Set();
    }
}
exports.Context = Context;
__export(require("./context-builder"));
__export(require("./context-operator"));
__export(require("./context-predicate"));
