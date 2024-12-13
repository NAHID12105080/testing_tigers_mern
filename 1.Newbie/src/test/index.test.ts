import { describe, it, expect } from "@jest/globals";
import { sum } from "../index";

describe("sum", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("adds 2 + 3 to equal 5", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
