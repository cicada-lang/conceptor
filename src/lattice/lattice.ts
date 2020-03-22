export class Lattice<T> {
  constructor(
    public pre: (x: T, y: T) => boolean,
    public join: (x: T, y: T) => T,
    public meet: (x: T, y: T) => T,
  ) {}
}

export class CompleteLattice<T> extends Lattice<T> {
  constructor(
    public pre: (x: T, y: T) => boolean,
    public sup: (xs: Array<T>) => T,
    public inf: (xs: Array<T>) => T,
  ) {
    super(pre, (x, y) => sup([x, y]), (x, y) => inf([x, y]))
  }

  get top(): T { return this.inf([]) }
  get bottom(): T { return this.sup([]) }
}
