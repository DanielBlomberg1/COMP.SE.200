import drop from "../functions/drop";

describe("Function: (drop.js)", () => {
  test("drops first n elements from an array", () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
    expect(drop([1, 2, 3], 2)).toEqual([3]);
    expect(drop([1, 2, 3], 5)).toEqual([]);
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  test("handles negative n values", () => {
    expect(drop([1, 2, 3], -2)).toEqual([1, 2, 3]);
  });
  test("handles empty array", () => {
    expect(drop([])).toEqual([]);
    expect(drop([], 3)).toEqual([]);
  });
  test("handles null and undefined array", () => {
    expect(drop(null)).toEqual([]);
    expect(drop(undefined, 2)).toEqual([]);
  });
});
