"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Context = __importStar(require("./context"));
const util = __importStar(require("../util"));
function has(ctx, obj, attr) {
    return ctx.incidence.has(`(${obj} has ${attr})`);
}
exports.has = has;
function objs_match_attrs_p(ctx, objs, attrs) {
    return util.include(ctx.objs, objs) &&
        util.include(ctx.attrs, attrs) &&
        util.equal(Context.objs_intent(ctx, objs), attrs) &&
        util.equal(Context.attrs_extent(ctx, attrs), objs);
}
exports.objs_match_attrs_p = objs_match_attrs_p;
function imply(ctx, given_attrs, concluding_attrs) {
    return util.include(Context.attrs_extent(ctx, concluding_attrs), Context.attrs_extent(ctx, given_attrs));
}
exports.imply = imply;
