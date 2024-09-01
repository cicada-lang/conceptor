import assert from "node:assert"
import test from "node:test"
import { QuotientSet } from "./QuotientSet.js"

test("QuotientSet", () => {
  const rationals = new QuotientSet<[number, number]>({
    equal: ([xNumerator, xDenominator], [yNumerator, yDenominator]) =>
      xNumerator * yDenominator === yNumerator * xDenominator,
  })

  rationals.add([1, 1])
  rationals.add([2, 2])
  rationals.add([1, 2])
  rationals.add([2, 4])

  assert.strictEqual(rationals.size, 2)

  rationals.delete([3, 3])

  assert.strictEqual(rationals.size, 1)

  rationals.delete([3, 6])

  assert.strictEqual(rationals.size, 0)
})
