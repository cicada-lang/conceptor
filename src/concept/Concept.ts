import type { Attribute, Context, Entity } from "../context/Context.js"

// concept 只有在某个 context 下才有意义，
// 因此 context 应该是 concept 的一部分，
// 并且我们需要假设 context 是不能变的（immutable）。

export type Concept = {
  context: Context
  extent: Set<Entity>
  intent: Set<Attribute>
}
