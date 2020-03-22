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
const Context = __importStar(require("../context/context"));
function top_concept(ctx) {
    let objs = Context.objs_closure(ctx, ctx.objs);
    let attrs = Context.objs_intent(ctx, ctx.objs);
    return new Concept.Concept(ctx, objs, attrs);
}
exports.top_concept = top_concept;
function bottom_concept(ctx) {
    let objs = Context.attrs_extent(ctx, ctx.attrs);
    let attrs = Context.attrs_closure(ctx, ctx.attrs);
    return new Concept.Concept(ctx, objs, attrs);
}
exports.bottom_concept = bottom_concept;
