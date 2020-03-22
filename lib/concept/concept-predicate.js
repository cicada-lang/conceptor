"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const util = __importStar(require("../util"));
function subconcept_p(x, y) {
    if (x.ctx !== y.ctx)
        throw new Error("CONTEXT_MISMATCH");
    return util.include(y.objs, x.objs);
}
exports.subconcept_p = subconcept_p;
function superconcept_p(x, y) {
    return subconcept_p(y, x);
}
exports.superconcept_p = superconcept_p;
