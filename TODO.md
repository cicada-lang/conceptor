回顾《形式概念分析笔记》
回顾《Restructuring lattice theory》笔记
完成 docs/notes/从格到形式概念分析.md

# lattice

`conceptBeneath` -- 为 layout 做准备
`conceptCover` -- 为 layout 做准备

找出 lattice 中的所有最长 chain -- 为计算 rank 做准备

# lattice layout

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
