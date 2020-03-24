"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ctx = __importStar(require("../ctx/ctx"));
exports.planets = Ctx.ctx_from_table({
    "mercury": ["size.small", "distance_from_sun.near", "moon.no"],
    "venus": ["size.small", "distance_from_sun.near", "moon.no"],
    "earth": ["size.small", "distance_from_sun.near", "moon.yes"],
    "mars": ["size.small", "distance_from_sun.near", "moon.yes"],
    "jupiter": ["size.large", "distance_from_sun.far", "moon.yes"],
    "saturn": ["size.large", "distance_from_sun.far", "moon.yes"],
    "uranus": ["size.medium", "distance_from_sun.far", "moon.yes"],
    "neptune": ["size.medium", "distance_from_sun.far", "moon.yes"],
    "pluto": ["size.small", "distance_from_sun.far", "moon.yes"],
});
