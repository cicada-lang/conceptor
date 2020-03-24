import * as Ctx from "../ctx/ctx"

export const planets = Ctx.ctx_from_table({
  "mercury": ["size.small", "distance_from_sun.near", "moon.no"],
  "venus": ["size.small", "distance_from_sun.near", "moon.no"],
  "earth": ["size.small", "distance_from_sun.near", "moon.yes"],
  "mars": ["size.small", "distance_from_sun.near", "moon.yes"],
  "jupiter": ["size.large", "distance_from_sun.far", "moon.yes"],
  "saturn": ["size.large", "distance_from_sun.far", "moon.yes"],
  "uranus": ["size.medium", "distance_from_sun.far", "moon.yes"],
  "neptune": ["size.medium", "distance_from_sun.far", "moon.yes"],
  "pluto": ["size.small", "distance_from_sun.far", "moon.yes"],
})
