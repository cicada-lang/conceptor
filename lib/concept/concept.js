"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ctx = __importStar(require("../ctx/ctx"));
class Concept {
    constructor(ctx, objs, attrs) {
        this.objs = objs;
        this.attrs = attrs;
        if (!Ctx.objs_match_attrs_p(ctx, objs, attrs)) {
            throw new Error("Concept constructor fail\n" +
                "objs does not match attrs\n" +
                `objs: ${Array.from(objs)}\n` +
                `attrs: ${Array.from(attrs)}\n`);
        }
    }
}
exports.Concept = Concept;
__export(require("./concept_builder"));
__export(require("./concept_operator"));
__export(require("./concept_predicate"));
__export(require("./concept_pretty"));
