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
function context_from_table(table) {
    let ctx = new Context.Context();
    for (let [obj, attrs] of Object.entries(table)) {
        ctx.objs.add(obj);
        for (let attr of attrs) {
            ctx.attrs.add(attr);
            ctx.incidence.add(repr_incidence_has(obj, attr));
        }
    }
    return ctx;
}
exports.context_from_table = context_from_table;
function repr_incidence_has(obj, attr) {
    return (`(${obj} has ${attr})`);
}
exports.repr_incidence_has = repr_incidence_has;
