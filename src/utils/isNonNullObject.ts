export function isNonNullObject<T>(x: T): x is Exclude<T, null> & object {
  return x !== null && (typeof x === "object" || typeof x === "function")
}
