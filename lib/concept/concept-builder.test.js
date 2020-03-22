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
const bodies_of_water_1 = require("../context-examples/bodies-of-water");
const planets_1 = require("../context-examples/planets");
console.log("top_concept of bodies_of_water:", Concept.pretty_concept(Concept.top_concept(bodies_of_water_1.bodies_of_water)));
console.log("bottom_concept of bodies_of_water:", Concept.pretty_concept(Concept.bottom_concept(bodies_of_water_1.bodies_of_water)));
console.log("top_concept of planets:", Concept.pretty_concept(Concept.top_concept(planets_1.planets)));
console.log("bottom_concept of planets:", Concept.pretty_concept(Concept.bottom_concept(planets_1.planets)));
