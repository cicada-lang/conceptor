"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const util = __importStar(require("./util"));
const Context = __importStar(require("./context"));
function derive_objs(ctx, attrs) {
    let objs = new Set();
    for (let obj of ctx.objs) {
        if (util.forall(attrs, (attr) => Context.obj_has_attr_p(ctx, obj, attr))) {
            objs.add(obj);
        }
    }
    return objs;
}
exports.derive_objs = derive_objs;
function derive_attrs(ctx, objs) {
    let attrs = new Set();
    for (let attr of ctx.attrs) {
        if (util.forall(objs, (obj) => Context.obj_has_attr_p(ctx, obj, attr))) {
            attrs.add(attr);
        }
    }
    return attrs;
}
exports.derive_attrs = derive_attrs;
function closure_objs(ctx, objs) {
    return derive_objs(ctx, derive_attrs(ctx, objs));
}
exports.closure_objs = closure_objs;
function closure_attrs(ctx, attrs) {
    return derive_attrs(ctx, derive_objs(ctx, attrs));
}
exports.closure_attrs = closure_attrs;
function formal_concept_p(ctx, objs, attrs) {
    return util.include_p(ctx.objs, objs) &&
        util.include_p(ctx.attrs, attrs) &&
        util.equal(derive_attrs(ctx, objs), attrs) &&
        util.equal(derive_objs(ctx, attrs), objs);
}
exports.formal_concept_p = formal_concept_p;
