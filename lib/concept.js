"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const util = __importStar(require("./util"));
const op = __importStar(require("./operator"));
class Concept {
    constructor(ctx, objs, attrs) {
        this.ctx = ctx;
        this.objs = objs;
        this.attrs = attrs;
        if (!objs_match_attrs_p(ctx, objs, attrs)) {
            throw new Error("Concept constructor fail\n" +
                "objs does not match attrs\n" +
                `objs: ${Array.from(objs)}\n` +
                `attrs: ${Array.from(attrs)}\n`);
        }
    }
}
exports.Concept = Concept;
function objs_match_attrs_p(ctx, objs, attrs) {
    return util.include(ctx.objs, objs) &&
        util.include(ctx.attrs, attrs) &&
        util.equal(op.derive_attrs(ctx, objs), attrs) &&
        util.equal(op.derive_objs(ctx, attrs), objs);
}
exports.objs_match_attrs_p = objs_match_attrs_p;
// TODO
// export function subconcept_p(): boolean {}
// greatest_common_subconcept
// superconcept_p
// least_common_superconcept
// An implication A → B relates two sets A and B of attributes and expresses that every object possessing each attribute from A also has each attribute from B.
