import toNumber from "../functions/toNumber.js";

test("converts string number to number", () => {
  expect(toNumber("123")).toBe(123);
});

test("converts boolean true to 1", () => {
  expect(toNumber(true)).toBe(1);
});

test("converts boolean false to 0", () => {
  expect(toNumber(false)).toBe(0);
});

test("converts null to 0", () => {
  expect(toNumber(null)).toBe(0);
});

test("converts undefined to NaN", () => {
  expect(toNumber(undefined)).toBeNaN();
});

test("converts object to NaN", () => {
  expect(toNumber({ a: 1, b: 2 })).toBeNaN();
});

test("converts array with single numeric string to number", () => {
  expect(toNumber(["42"])).toBe(42);
});

test("converts array with single number to number", () => {
  expect(toNumber([42])).toBe(42);
});

test("converts array with multiple elements to NaN", () => {
  expect(toNumber([1, 2, 3])).toBeNaN();
});

test("converts function to NaN", () => {
  function sampleFunction() {
    return 42;
  }
  expect(toNumber(sampleFunction)).toBeNaN();
});

test("converts symbol to NaN", () => {
  const sym = Symbol("test");
  expect(toNumber(sym)).toBeNaN();
});

test("converts Date to timestamp number", () => {
  const date = new Date("2025-01-01T00:00:00Z");
  expect(toNumber(date)).toBe(date.getTime());
});

test("number argument returns same number", () => {
  expect(toNumber(456)).toBe(456);
});

test("handles leading and trailing whitespace in string", () => {
  expect(toNumber("   789   ")).toBe(789);
});

test("handles binary string", () => {
  expect(toNumber("0b1010")).toBe(10);
});

test("handles octal string", () => {
  expect(toNumber("0o12")).toBe(10);
});

test("handles bad hexadecimal string", () => {
  expect(toNumber("-0x1A")).toBeNaN();
});

test("handles valid hexadecimal string", () => {
  expect(toNumber("0x1A")).toBe(26);
});

test("hadles argument being a function", () => {
  expect(toNumber(() => "123")).toBeNaN();
});

test("handles argument being an object with valueOf method", () => {
  const obj = {
    valueOf: () => "321",
  };
  expect(toNumber(obj)).toBe(321);
});
test("handles argument being an object with valueOf returning object", () => {
  const obj = {
    valueOf: () => ({ a: 1 }),
  };
  expect(toNumber(obj)).toBeNaN();
});

test("handles -0 correctly", () => {
  expect(Object.is(toNumber("-0"), -0)).toBe(true);
});

test("handles +0 correctly", () => {
  expect(Object.is(toNumber("0"), 0)).toBe(true);
});

test("handles empty string", () => {
  expect(toNumber("")).toBe(0);
});

test("handles string with only whitespace", () => {
  expect(toNumber("   ")).toBe(0);
});

test("handles valueof being a function", () => {
  const obj = {
    valueOf: () => 55,
  };
  expect(toNumber(obj)).toBe(55);
});

test("handles valueof being a function returning non-primitive", () => {
  const obj = {
    valueOf: () => [1, 2, 3],
  };
  expect(toNumber(obj)).toBeNaN();
});

test("handles leading plus sign in decimal string", () => {
  expect(toNumber("+123")).toBe(123);
});

test("handles '+0' correctly", () => {
  expect(Object.is(toNumber("+0"), 0)).toBe(true);
});

test("handles plus-signed hexadecimal string as valid", () => {
  expect(toNumber("+0x1A")).toBe(26);
});

test("rejects plus-signed binary string when not supported", () => {
  expect(toNumber("+0b1010")).toBe(10);
});

test("rejects minus-signed binary string", () => {
  expect(toNumber("-0b1010")).toBeNaN();
});

test("rejects minus-signed octal string", () => {
  expect(toNumber("-0o12")).toBeNaN();
});

test("handles bad hexadecimal string with plus sign", () => {
  expect(toNumber("+0x1A")).toBeNaN();
});

test("handles bad hexadecimal string with plus sign", () => {
  expect(toNumber("+0x1A")).toBeNaN();
});

test("handles object with valueOf returning 0 (non-string 0 branch)", () => {
  const obj = { valueOf: () => 0 };
  expect(toNumber(obj)).toBe(0); // hits: typeof value !== 'string' -> value === 0 ? value : +value
});