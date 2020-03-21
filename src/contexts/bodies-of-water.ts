import * as Context from "../context"

export const bodies_of_water = Context.context_from_table({
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
})
