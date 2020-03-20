"use strict";
class context_t {
    constructor() {
        this.objects = new Array();
        this.attributes = new Array();
        this.relation = new Set();
    }
}
function context_from_table(table) {
    throw new Error();
}
function concept_p(ctx, extent, intent) {
    return true;
}
