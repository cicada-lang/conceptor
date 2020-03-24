"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Concept = __importStar(require("./concept"));
const Ctx = __importStar(require("../ctx/ctx"));
const util = __importStar(require("../util"));
function sup(ctx, xs) {
    if (xs.length === 0)
        return Concept.top(ctx);
    let attrs = util.intersection(...xs.map(x => x.attrs));
    let objs = Ctx.attrs_extent(ctx, attrs);
    return new Concept.Concept(ctx, objs, attrs);
}
exports.sup = sup;
function inf(ctx, xs) {
    if (xs.length === 0)
        return Concept.bottom(ctx);
    let objs = util.intersection(...xs.map(x => x.objs));
    let attrs = Ctx.objs_intent(ctx, objs);
    return new Concept.Concept(ctx, objs, attrs);
}
exports.inf = inf;
