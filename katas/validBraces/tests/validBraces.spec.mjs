import { assert } from "chai";
import validBraces from "../validBraces.ts";

describe("validBraces", function () {
  it("Valid brace?", function () {
    assert.strictEqual(validBraces("()"), true);
    assert.strictEqual(validBraces("[(])"), false);
  });
});
