"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ctx = __importStar(require("./ctx"));
const util = __importStar(require("../util"));
function attrs_extent(ctx, attrs) {
    let objs = new Set();
    for (let obj of ctx.objs)
        if (util.forall(attrs, (attr) => Ctx.has(ctx, obj, attr)))
            objs.add(obj);
    return objs;
}
exports.attrs_extent = attrs_extent;
function objs_intent(ctx, objs) {
    let attrs = new Set();
    for (let attr of ctx.attrs)
        if (util.forall(objs, (obj) => Ctx.has(ctx, obj, attr)))
            attrs.add(attr);
    return attrs;
}
exports.objs_intent = objs_intent;
function objs_closure(ctx, objs) {
    return attrs_extent(ctx, objs_intent(ctx, objs));
}
exports.objs_closure = objs_closure;
function attrs_closure(ctx, attrs) {
    return objs_intent(ctx, attrs_extent(ctx, attrs));
}
exports.attrs_closure = attrs_closure;
