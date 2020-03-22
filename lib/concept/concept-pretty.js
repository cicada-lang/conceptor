"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pretty_concept(concept) {
    return JSON.stringify({
        objs: Array.from(concept.objs),
        attrs: Array.from(concept.attrs),
    }, null, 4);
}
exports.pretty_concept = pretty_concept;
