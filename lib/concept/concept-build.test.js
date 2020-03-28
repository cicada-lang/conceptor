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
const bodies_of_water_1 = require("../ctx-examples/bodies-of-water");
const planets_1 = require("../ctx-examples/planets");
console.log("top of bodies_of_water:", Concept.pretty_concept(Concept.top(bodies_of_water_1.bodies_of_water)));
console.log("bottom of bodies_of_water:", Concept.pretty_concept(Concept.bottom(bodies_of_water_1.bodies_of_water)));
console.log("top of planets:", Concept.pretty_concept(Concept.top(planets_1.planets)));
console.log("bottom of planets:", Concept.pretty_concept(Concept.bottom(planets_1.planets)));
