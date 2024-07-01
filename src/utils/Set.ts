export function setUnion<T>(x: Set<T>, y: Set<T>): Set<T> {
  return new Set([...x, ...y])
}

export function setIntersection<T>(x: Set<T>, y: Set<T>): Set<T> {
  const z = new Set<T>()
  for (const e of x) {
    if (y.has(e)) {
      z.add(e)
    }
  }

  return z
}

export function setDifference<T>(x: Set<T>, y: Set<T>): Set<T> {
  const z = new Set<T>()
  for (const e of x) {
    if (!y.has(e)) {
      z.add(e)
    }
  }

  return z
}

export function setSymmetricDifference<T>(x: Set<T>, y: Set<T>): Set<T> {
  return setDifference(setUnion(x, y), setIntersection(x, y))
}

export function setIsSubsetOf<T>(x: Set<T>, y: Set<T>): boolean {
  for (const e of x) {
    if (!y.has(e)) {
      return false
    }
  }

  return true
}

export function setIsSupersetOf<T>(x: Set<T>, y: Set<T>): boolean {
  return setIsSubsetOf(y, x)
}

export function setIsDisjointFrom<T>(x: Set<T>, y: Set<T>): boolean {
  for (const e of x) {
    if (y.has(e)) {
      return false
    }
  }

  for (const e of y) {
    if (x.has(e)) {
      return false
    }
  }

  return true
}
