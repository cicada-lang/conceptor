"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Context {
    constructor() {
        this.objs = new Set();
        this.attrs = new Set();
        this.incidence = new Set();
    }
}
exports.Context = Context;
function repr_incidence_has(obj, attr) {
    return (`(${obj} has ${attr})`);
}
exports.repr_incidence_has = repr_incidence_has;
function context_from_table(table) {
    let ctx = new Context();
    for (let [obj, attrs] of Object.entries(table)) {
        ctx.objs.add(obj);
        for (let attr of attrs) {
            ctx.attrs.add(attr);
            ctx.incidence.add(repr_incidence_has(obj, attr));
        }
    }
    return ctx;
}
exports.context_from_table = context_from_table;
function obj_has_attr_p(ctx, obj, attr) {
    return ctx.incidence.has(`(${obj} has ${attr})`);
}
exports.obj_has_attr_p = obj_has_attr_p;
