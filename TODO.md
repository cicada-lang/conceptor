# learn

回顾 lattice 书，看看还函数需要加什么 API
实现 lattice 书中的 "from theory to practice"
读 rudolf wille 的原始论文和书

# context

`generateAllConcepts(context)`
`generateNewConcepts(context)`

如何处理对 context 的修改？

- 由于 concept 包含 context，
  所以 context 必须是 immutable 的，
  所以对 context 的修改必须是 functional 的。

  - 增加与删除 entity 或 attribute；
  - 修改某个 entity 和 attribute 的关系。

# lattice

实现 concept 之间的序关系

lessGeneral
moreGeneral

`buildLattice(context)`

# later

`Context` -- use double index `entityAttributeIndex` and `attributeEntityIndex`
