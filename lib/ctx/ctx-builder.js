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
function ctx_from_table(table) {
    let ctx = new Ctx.Ctx();
    for (let [obj, attrs] of Object.entries(table)) {
        ctx.objs.add(obj);
        for (let attr of attrs) {
            ctx.attrs.add(attr);
            ctx.incidence.add(incidence_format(obj, attr));
        }
    }
    return ctx;
}
exports.ctx_from_table = ctx_from_table;
function incidence_format(obj, attr) {
    return (`(${obj} has ${attr})`);
}
exports.incidence_format = incidence_format;
