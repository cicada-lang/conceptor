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
// NOTE The extend of a set of attrs is the set of all objs that have all the attrs.
// - when view a set of attrs as one attr,
//   to say an obj has this attr,
//   is to say the obj has each attr of the attrs.
// - note that english does not have a mean
//   to reverse the subject and the object of the verb `have`.
//   unlike the word `own` can be reversed by `is owned by`.
function attrs_extent(ctx, attrs) {
    let objs = new Set();
    for (let obj of ctx.objs)
        if (util.forall(attrs, (attr) => Ctx.has(ctx, obj, attr)))
            objs.add(obj);
    return objs;
}
exports.attrs_extent = attrs_extent;
// NOTE The intent of a set of objs is the set of all attrs that are shared by all objs.
// - when view a set of objs as one obj,
//   to say this obj has an attr,
//   is to say each obj of the objs has the attr.
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
