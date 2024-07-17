`concept-graph/` -- 从 `generateConcepts` 生成有向图

- 以 concept 之间的蕴含关系为 有向边

找出 lattice 中的所有最长 chain -- 为计算 rank 做准备

为了找最长的 chain，可能需要考虑一般的（无圈）有向图中的算法。

- https://en.wikipedia.org/wiki/Longest_path_problem

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

# concept exploration

给出一个假定的 attribute 之间的 implication，
判断它是真的，或者找出反例。
