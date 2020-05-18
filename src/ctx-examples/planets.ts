import * as Ctx from "../ctx"

export const planets = Ctx.ctx_from_table({
  mercury: ["size.small", "distance-from-sun.near", "moon.no"],
  venus: ["size.small", "distance-from-sun.near", "moon.no"],
  earth: ["size.small", "distance-from-sun.near", "moon.yes"],
  mars: ["size.small", "distance-from-sun.near", "moon.yes"],
  jupiter: ["size.large", "distance-from-sun.far", "moon.yes"],
  saturn: ["size.large", "distance-from-sun.far", "moon.yes"],
  uranus: ["size.medium", "distance-from-sun.far", "moon.yes"],
  neptune: ["size.medium", "distance-from-sun.far", "moon.yes"],
  pluto: ["size.small", "distance-from-sun.far", "moon.yes"],
})
