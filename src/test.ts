export class Entity extends String {
  isEntity: true = true

  constructor(value: string) {
    super(value)
  }
}

export class Attribute extends String {
  isAttribute: true = true

  constructor(value: string) {
    super(value)
  }
}
