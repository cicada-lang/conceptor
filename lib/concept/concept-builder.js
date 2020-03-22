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
function top(ctx) {
    let objs = Ctx.objs_closure(ctx, ctx.objs);
    let attrs = Ctx.objs_intent(ctx, ctx.objs);
    return new Concept.Concept(ctx, objs, attrs);
}
exports.top = top;
function bottom(ctx) {
    let objs = Ctx.attrs_extent(ctx, ctx.attrs);
    let attrs = Ctx.attrs_closure(ctx, ctx.attrs);
    return new Concept.Concept(ctx, objs, attrs);
}
exports.bottom = bottom;
