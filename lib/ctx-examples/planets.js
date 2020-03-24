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
    "mercury": ["size.small", "distance-from-sun.near", "moon.no"],
    "venus": ["size.small", "distance-from-sun.near", "moon.no"],
    "earth": ["size.small", "distance-from-sun.near", "moon.yes"],
    "mars": ["size.small", "distance-from-sun.near", "moon.yes"],
    "jupiter": ["size.large", "distance-from-sun.far", "moon.yes"],
    "saturn": ["size.large", "distance-from-sun.far", "moon.yes"],
    "uranus": ["size.medium", "distance-from-sun.far", "moon.yes"],
    "neptune": ["size.medium", "distance-from-sun.far", "moon.yes"],
    "pluto": ["size.small", "distance-from-sun.far", "moon.yes"],
});
