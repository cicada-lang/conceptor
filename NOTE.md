# About formal context

- 2020-05-28

- 实现 FCA 的时候，发现 formal concept 必须在 formal context 中才有意义。
  - 类似的情况还出现在：
    - 实现某些语言的解释器的时候，expression 必须在 context 中才有意义。
    - 实现 cell complex 的时候，cell 必须在 complex 中才有意义。
  - 为了实现这种需要 context 的理论而建模时，
    可以尝试不要将 context 放入所建模的元素中，
    比如，在 FCA 中可以使用作为 pre-concept 的 objects-attributes pair。

# Maybe

- use datomic-like database as formal ctx (table).

  - Temporal concept analysis (TCA)
    It provides animations in concept lattices
    obtained from data about changing objects.
    It offers a general way of understanding
    change of concrete or abstract objects
    in continuous, discrete or hybrid space and time.

# Readings

- implication
  - <https://en.wikipedia.org/wiki/Implication_(information_science)>
  - <https://en.wikipedia.org/wiki/Armstrong%27s_axioms>
- Complete lattice
  - <https://en.wikipedia.org/wiki/Complete_lattice>
- Galois connection
  - <https://en.wikipedia.org/wiki/Galois_connection>
- bicliques & bipartite graph
  - <https://en.wikipedia.org/wiki/Bipartite_graph>
- Knowledge space
  - <https://en.wikipedia.org/wiki/Knowledge_space>
- Mathematical psychology
  - <https://en.wikipedia.org/wiki/Mathematical_psychology>
