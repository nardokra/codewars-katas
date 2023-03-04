import { assert } from "chai";
import isValidWalk from "../isValidWalk.ts";

describe("isValidWalk", function () {
  it("Valid walk of excact 10 blocks and 10 minutes?", function () {
    assert.equal(
      isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
      true
    );
    assert.equal(
      isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
      false
    );
    assert.equal(isValidWalk(["w"]), false);
    assert.equal(
      isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]),
      false
    );
  });
});
