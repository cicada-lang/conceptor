# lattice

`LatticeLayout`
`layoutLattice(context)`

# optimize

`Context` -- use double index `entityAttributeIndex` and `attributeEntityIndex`

# editing context

如何处理对 context 的修改？

- 由于 concept 包含 context，
  所以 context 必须是 immutable 的，
  所以对 context 的修改必须是 functional 的。

  - 增加与删除 entity 或 attribute；
  - 修改某个 entity 和 attribute 的关系。
