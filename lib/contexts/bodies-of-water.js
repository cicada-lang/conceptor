"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Context = __importStar(require("../context"));
// NOTE
// - A body of water or waterbody (often spelled water body)
//   is any significant accumulation of water,
//   generally on a planet's surface.
// - <https://en.wikipedia.org/wiki/Body_of_water>
exports.bodies_of_water = Context.context_from_table({
    "canal": ["running", "constant"],
    "channel": ["running", "constant"],
    "lagoon": ["natural", "stagnant", "constant", "maritime"],
    "lake": ["natural", "stagnant", "constant"],
    "maar": ["natural", "stagnant", "constant"],
    "puddle": ["temporary", "natural", "stagnant"],
    "pond": ["natural", "stagnant", "constant"],
    "pool": ["natural", "stagnant", "constant"],
    "reservoir": ["stagnant", "constant"],
    "river": ["running", "natural", "constant"],
    "rivulet": ["running", "natural", "constant"],
    "runnel": ["running", "natural", "constant"],
    "sea": ["natural", "stagnant", "constant", "maritime"],
    "stream": ["running", "natural", "constant"],
    "tarn": ["natural", "stagnant", "constant"],
    "torrent": ["running", "natural", "constant"],
    "trickle": ["running", "natural", "constant"],
});
