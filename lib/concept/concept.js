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
const Context = __importStar(require("../context/context"));
const util = __importStar(require("../util"));
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
        util.equal(Context.objs_intent(ctx, objs), attrs) &&
        util.equal(Context.attrs_extent(ctx, attrs), objs);
}
exports.objs_match_attrs_p = objs_match_attrs_p;
__export(require("./concept-builder"));
__export(require("./concept-operator"));
__export(require("./concept-predicate"));
