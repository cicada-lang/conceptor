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
function subconcept_p(x, y) {
    return util.include(y.objs, x.objs);
}
exports.subconcept_p = subconcept_p;
function superconcept_p(x, y) {
    return subconcept_p(y, x);
}
exports.superconcept_p = superconcept_p;
// TODO
// greatest_common_subconcept
// least_common_superconcept
