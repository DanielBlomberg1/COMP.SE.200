import toString from '../functions/toString.js';

describe('Function: (toString.js)', () => {
    test('converts number to string', () => {
        expect(toString(123)).toBe('123');
    });

    test('converts boolean true to string', () => {
        expect(toString(true)).toBe('true');
    });

    test('converts boolean false to string', () => {
        expect(toString(false)).toBe('false');
    });

    test('converts null to string', () => {
        expect(toString(null)).toBe('null');
    });

    test('converts undefined to string', () => {
        expect(toString(undefined)).toBe('undefined');
    });

    test('converts object to string', () => {
        expect(toString({ a: 1, b: 2 })).toBe('[object Object]');
    });

    test('converts array to string', () => {
        expect(toString([1, 2, 3])).toBe('1,2,3');
    });

    test('converts function to string', () => {
        function sampleFunction() {
            return 42;
        }
        expect(toString(sampleFunction)).toBe(sampleFunction.toString());
    });

    test('converts symbol to string', () => {
        const sym = Symbol('test');
        expect(toString(sym)).toBe(sym.toString());
    });

    test('converts Date to string', () => {
        const date = new Date('2025-01-01T00:00:00Z');
        expect(toString(date)).toBe(date.toString());
    });

    test('string argument returns same string', () => {
        expect(toString('hello')).toBe('hello');
    });

    test('recursive array coversion', () => {
        expect(toString([1, [2, 3], null])).toBe('1,2,3,');
        expect(toString([23, [[0, 8], false], 'text123'])).toBe('23,0,8,false,text123');
    });

    test('preserves -0 sign', () => {
        expect(toString(-0)).toBe('-0');
    });
});
