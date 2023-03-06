import { assert } from "chai";
import findOdd from "../findOdd.ts";

const doTest = (a, n) => {
  it(`xs = ${JSON.stringify(a)} ; n = ${n}`, () => {
    assert.strictEqual(findOdd(a), n);
  });
};

describe("findOdd", () => {
  it("Search for the value that has an odd number of occurances in the array", () => {
    doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
    doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
    doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
    doTest([10], 10);
    doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
    doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
  });
});
