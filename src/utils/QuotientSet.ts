export type QuotientSetOpitons<T>  = {
  equal: (x: T, y: T) => boolean
}

export class QuotientSet<T> {
  representatives: Array<T>
  equal: (x: T, y: T) => boolean

  constructor(options: QuotientSetOpitons<T>) {
    this.representatives = []
    this.equal = options.equal
  }

  has(x: T): boolean {
    const found = this.representatives.find((y) => this.equal(x, y))
    if (found === undefined) return false
    else return true
  }

  add(x: T): this {
    const found = this.representatives.find((y) => this.equal(x, y))
    if (found === undefined) {
      this.representatives.push(x)
    }

    return this
  }

  delete(x: T): boolean {
    const foundIndex = this.representatives.findIndex((y) => this.equal(x, y))
    if (foundIndex === -1) {
      return false
    }

    this.representatives.splice(foundIndex, 1)
    return true
  }
}
