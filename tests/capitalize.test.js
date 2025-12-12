import capitalize from '../functions/capitalize';

test('capitalize - Basic lowercase string', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('capitalize - String with leading/trailing spaces', () => {
  expect(capitalize('  world  ')).toBe('  world  ');
});
test('capitalize - Empty string', () => {
  expect(capitalize('')).toBe(null);
});
test('capitalize - String with mixed case', () => {
  expect(capitalize('hElLo')).toBe('Hello');
});

test('capitalize - Single character string', () => {
  expect(capitalize('a')).toBe('A');
});     
test('capitalize - String with special characters', () => {
    expect(capitalize('!hello')).toBe('!hello'); 
});

test('capitalize - Non-string input (number)', () => {
  expect(capitalize(123)).toBe('123');
});
test('capitalize - Non-string input (null)', () => {
  expect(capitalize(null)).toBe('');
});