export class Lattice<T> {
  constructor(
    public pre: (x: T, y: T) => boolean,
    public join: (x: T, y: T) => T,
    public meet: (x: T, y: T) => T
  ) {}
}

export class CompleteLattice<T> extends Lattice<T> {
  constructor(
    public pre: (x: T, y: T) => boolean,
    public supremum: (xs: Array<T>) => T,
    public infimum: (xs: Array<T>) => T
  ) {
    super(
      pre,
      (x, y) => supremum([x, y]),
      (x, y) => infimum([x, y])
    )
  }

  get top(): T {
    return this.infimum([])
  }
  get bottom(): T {
    return this.supremum([])
  }
}
