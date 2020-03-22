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
function imply(ctx, given_attrs, concluding_attrs) {
    return util.include(Context.attrs_extent(ctx, concluding_attrs), Context.attrs_extent(ctx, given_attrs));
}
exports.imply = imply;
