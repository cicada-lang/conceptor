"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const op = __importStar(require("./operator"));
const planets_1 = require("./contexts/planets");
// console.log(op.objs_intent(bodies_of_water, new Set(["canal", "channel"])))
// console.log(op.objs_closure(bodies_of_water, new Set(["canal", "channel"])))
console.log(op.attrs_extent(planets_1.planets, new Set(["size.small"])));
console.log(op.attrs_extent(planets_1.planets, new Set(["size.medium"])));
console.log(op.attrs_extent(planets_1.planets, new Set(["size.large"])));
console.log(op.attrs_extent(planets_1.planets, new Set(["distance-from-sun.far"])));
console.log(op.attrs_extent(planets_1.planets, new Set(["distance-from-sun.near"])));
console.log(op.attrs_extent(planets_1.planets, new Set(["moon.no"])));
console.log(op.attrs_extent(planets_1.planets, new Set(["moon.yes"])));
