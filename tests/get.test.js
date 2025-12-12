import get from "../functions/get.js";

describe('Function: (get.js)', () => {
  // Test case A.1: Basic nested property (string path)
  test('A.1 - Basic nested property (string path)', () => {
    const object = { a: { b: { c: 3 } } };
    expect(get(object, 'a.b.c')).toBe(3);
  });

  // Test case A.2: Basic nested property (array path)
  test('A.2 - Basic nested property (array path)', () => {
    const object = { a: { b: { c: 3 } } };
    expect(get(object, ['a', 'b', 'c'])).toBe(3);
  });

  // Test case A.3: Array element in path (string)
  test('A.3 - Array element in path (string)', () => {
    const object = { a: [{ b: 2 }] };
    expect(get(object, 'a[0].b')).toBe(2);
  });

  // Test case A.5: Path does not exist
  test('A.5 - Path does not exist', () => {
    const object = { a: 1 };
    expect(get(object, 'b')).toBeUndefined();
  });

  // Test case A.6: Path does not exist (with defaultValue)
  test('A.6 - Path does not exist (with defaultValue)', () => {
    const object = { a: 1 };
    expect(get(object, 'b', 'default')).toBe('default');
  });

  // Test case A.7: Null object
  test('A.7 - Null object', () => {
    expect(get(null, 'a')).toBeUndefined();
  });

  // Test case A.8: Empty string path
  test('A.8 - Empty string path', () => {
    const object = { a: 1 };
    expect(get(object, '')).toBeUndefined();
  });

  // Test case A.9: Empty array path
  test('A.9 - Empty array path', () => {
    const object = { a: 1 };
    expect(get(object, [])).toEqual({ a: 1 });
  });

  // Test case A.10: Basic nested property missing key
  test('A.10 - Basic nested property missing key', () => {
    const object = { a: { b: 2 } };
    expect(get(object, 'a.b.c')).toBeUndefined();
  });

  // Test case A.11: Invalid path type (non-string/array)
  test('A.11 - Invalid path type (non-string/array)', () => {
    const object = { a: 1 };
    expect(get(object, 123)).toBeUndefined();
  });
});
