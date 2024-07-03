export type Entity = string
export type Attribute = string

export type Context = Readonly<{
  entities: ReadonlySet<Entity>
  attributes: ReadonlySet<Attribute>
  entityAttributeIndex: ReadonlyMap<string, ReadonlySet<string>>
}>
