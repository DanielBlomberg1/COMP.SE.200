import add from "../functions/add.js";

describe("Function: (add.js)", () => {
  test("adds two numbers", () => {
    expect(add(6, 4)).toBe(10);
    expect(add(-2, 2)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test("handles undefined arguments", () => {
    expect(add(undefined, 5)).toBe(5);
    expect(add(5, undefined)).toBe(5);
    expect(add(undefined, undefined)).toBe(0);
  });

  test("handles string inputs", () => {
    expect(add("3", 7)).toBe(10);
    expect(add(3, "7")).toBe(10);
    expect(add("3", "7")).toBe(10);
  });

  test("handles negative numbers", () => {
    expect(add(-3, -7)).toBe(-10);
    expect(add(-3, 7)).toBe(4);
    expect(add(3, -7)).toBe(-4);
  });

  test("handles floating point numbers", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(add(-0.1, 0.2)).toBeCloseTo(0.1);
    expect(add(0.1, -0.2)).toBeCloseTo(-0.1);
  });

  test("handles large numbers", () => {
    expect(add(1e15, 1e15)).toBe(2e15);
    expect(add(-1e15, 1e15)).toBe(0);
  });

  test("handles non-numeric strings", () => {
    expect(add("abc", 5)).toBeNaN();
    expect(add(5, "xyz")).toBeNaN();
    expect(add("abc", "xyz")).toBeNaN();
  });
});