import { assert } from "chai";
import cubeChecker from "../cubeChecker.ts";

describe("cubeChecker", function () {
  it("Is cube?", function () {
    assert.isTrue(cubeChecker(1, 1));
    assert.isTrue(cubeChecker(8, 2));
    assert.isTrue(cubeChecker(27, 3));
    assert.isFalse(cubeChecker(0, 35));
    assert.isFalse(cubeChecker(452, 1));
    assert.isFalse(cubeChecker(785, 0));
  });
});
