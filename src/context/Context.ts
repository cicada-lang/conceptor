export type Entity = string
export type Attribute = string

export type Context = Readonly<{
  entities: ReadonlySet<Entity>
  attributes: ReadonlySet<Attribute>
  entityAttributeIndex: ReadonlyMap<Entity, ReadonlySet<Attribute>>
  attributeEntityIndex: ReadonlyMap<Attribute, ReadonlySet<Entity>>
}>
