# lattice layout

练习 order book 中计算 concept lattice 的算法。

- 以这个算法为基础，来给出 lattice 的 layout。

`concept-graph/` -- 以 `generateConcepts` 的结果为基础，生成有向图

- 以 concept 之间的蕴含关系为有向边 -- 方向就是蕴含关系的方向
- 可能的 API：
  - `LatticeLayout`
  - `layoutLattice(context)`

找出 lattice 中的所有最长 chain -- 为计算 rank 做准备

为了找最长的 chain，可能需要考虑一般的（无圈）有向图中的算法。

- https://en.wikipedia.org/wiki/Longest_path_problem

- 注意，我们要对所有点找到最长的 chain，
  最好能一起找，而不只是一个点一个点的找。

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
