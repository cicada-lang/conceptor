export function forall<A>(s: Set<A>, p: (x: A) => boolean): boolean {
  for (let x of s) {
    if (!p(x)) return false
  }
  return true
}

export function exists<A>(s: Set<A>, p: (x: A) => boolean): boolean {
  for (let x of s) {
    if (p(x)) return true
  }
  return false
}

export function include<A>(big_set: Set<A>, small_set: Set<A>): boolean {
  return forall(small_set, (x) => big_set.has(x))
}

export function union<A>(...sets: Array<Set<A>>): Set<A> {
  let result: Set<A> = new Set()
  for (let s of sets) for (let x of s) result.add(x)

  return result
}

export function intersection<A>(...sets: Array<Set<A>>): Set<A> {
  if (sets.length === 0) return new Set()

  let head = sets[0]
  let tail = sets.slice(1)

  let result: Set<A> = head
  for (let s of tail) for (let x of result) if (!s.has(x)) result.delete(x)

  return result
}
