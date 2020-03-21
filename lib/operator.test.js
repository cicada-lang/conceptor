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
const bodies_of_water_1 = require("./contexts/bodies-of-water");
console.log(op.derive_attrs(bodies_of_water_1.bodies_of_water, new Set(["canal", "channel"])));
console.log(op.closure_objs(bodies_of_water_1.bodies_of_water, new Set(["canal", "channel"])));
