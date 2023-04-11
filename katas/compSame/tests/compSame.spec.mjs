import { assert } from "chai";
import comp from "../compSame.ts";

const testing = (a1, a2, expected) => {
  let s1 = "";
  let s2 = "";

  if (a1 !== null) s1 = a1.toString();
  else s1 = "null";
  if (a2 !== null) s2 = a2.toString();
  else s2 = "null";

  assert.strictEqual(
    comp(a1, a2),
    expected,
    "Error with [" + s1 + "] / [" + s2 + "]\n"
  );
};

describe("compSame", () => {
  it("Basic test 1", () => {
    const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    const a2 = [
      11 * 11,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ];

    testing(a1, a2, true);
  });

  it("Basic test 2", () => {
    const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    const a2 = [
      11 * 21,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ];

    testing(a1, a2, false);
  });
});
