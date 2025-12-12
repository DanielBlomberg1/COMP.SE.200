import clamp from "../functions/clamp.js";

describe("Function: (clamp.js)", () => {
  test("clamps value within the range", () => {
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(0, -5, 5)).toBe(0);
  });

  test("clamps value to min if below range", () => {
    expect(clamp(-10, 0, 10)).toBe(0);
    expect(clamp(-1, -5, 0)).toBe(-1);
  });

  test("clamps value to max if above range", () => {
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(6, -5, 5)).toBe(5);
  });

  test("handles edge cases where value equals min or max", () => {
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
  });

  test("handles negative ranges", () => {
    expect(clamp(-3, -5, -1)).toBe(-3);
    expect(clamp(-6, -5, -1)).toBe(-5);
    expect(clamp(0, -5, -1)).toBe(-1);
  });

  test("handles floating point values", () => {
    expect(clamp(5.5, 1.1, 10.1)).toBe(5.5);
    expect(clamp(0.5, 1.1, 10.1)).toBe(1.1);
    expect(clamp(11.5, 1.1, 10.1)).toBe(10.1);
  });

  test("handles min equal to max", () => {
    expect(clamp(5, 10, 10)).toBe(10);
    expect(clamp(10, 10, 10)).toBe(10);
    expect(clamp(15, 10, 10)).toBe(10);
  });

  test("handles min greater than max by swapping", () => {
    expect(clamp(5, 10, 0)).toBe(5);
    expect(clamp(-5, 10, 0)).toBe(0);
    expect(clamp(15, 10, 0)).toBe(10);
  });

  test("handles negative zero", () => {
    expect(clamp(-0, -5, 5)).toBe(-0);
    expect(clamp(0, -5, 5)).toBe(0);
  });

  test("returns NaN when `number` is NaN", () => {
    expect(Number.isNaN(clamp(NaN, 0, 10))).toBe(true);
    expect(Number.isNaN(clamp(undefined, 0, 10))).toBe(true);
    expect(Number.isNaN(clamp('abc', 0, 10))).toBe(true);
  });

  test("string numeric inputs to numbers", () => {
    expect(clamp('5', '1', '10')).toBe(5);
    expect(clamp('15', '1', '10')).toBe(10);
    expect(clamp('-3', '-5', '-1')).toBe(-3);
  });

  test("handles NaN for lower/upper by treating them as 0", () => {
    expect(clamp(5, NaN, 10)).toBe(0);
    expect(clamp(5, 0, NaN)).toBe(0);
    expect(clamp(2, NaN, NaN)).toBe(0);
  });

  test("handles Infinity and -Infinity inputs", () => {
    expect(clamp(Infinity, 0, 10)).toBe(0);
    expect(clamp(-Infinity, 0, 10)).toBe(0);
    expect(clamp(5, -Infinity, Infinity)).toBe(5);
  });
});
