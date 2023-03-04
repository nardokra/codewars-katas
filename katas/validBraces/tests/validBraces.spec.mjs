import { assert } from "chai";
import validBraces from "../validBraces.ts";

describe("validBraces", function () {
  it("Correctly opens and closes the braces so they are valid?", function () {
    assert.strictEqual(validBraces("()"), true);
    assert.strictEqual(validBraces("[(])"), false);
  });
});
