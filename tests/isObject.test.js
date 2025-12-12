import isObject from "../functions/isObject.js";

describe("Function: (isObject.js)", () => {
  test("correctly identifies objects", () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject(new Object())).toBe(true);
    function Foo() {}
    expect(isObject(new Foo())).toBe(true);
  });
  test("correctly identifies non-objects", () => {
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(42)).toBe(false);
    expect(isObject("hello")).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject(() => {})).toBe(false);
  });
});
