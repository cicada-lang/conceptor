"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Context {
    constructor() {
        this.objects = new Array();
        this.attributes = new Array();
        this.incidence = new Set();
    }
}
exports.Context = Context;
function context_from_table(table) {
    throw new Error("TODO");
}
exports.context_from_table = context_from_table;
function derive_extent(context, intent) {
    throw new Error("TODO");
}
exports.derive_extent = derive_extent;
function derive_intent(context, intent) {
    throw new Error("TODO");
}
exports.derive_intent = derive_intent;
function extent_closure(context, extent) {
    throw new Error("TODO");
}
exports.extent_closure = extent_closure;
function intent_closure(context, intent) {
    throw new Error("TODO");
}
exports.intent_closure = intent_closure;
function formal_concept_p(context, extent, intent) {
    throw new Error("TODO");
}
exports.formal_concept_p = formal_concept_p;
