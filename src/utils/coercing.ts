export function coercing<A, B, C>(
  to: (x: A) => B,
  fn: (...args: Array<B>) => C,
): (...args: Array<A>) => C {
  return (...args) => fn(...args.map(to))
}
