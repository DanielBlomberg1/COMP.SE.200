import isEmpty from '../functions/isEmpty.js';

describe('Function: (isEmpty.js)', () => {
    test('checks empty object', () => {
        expect(isEmpty({})).toBe(true);
    });

    test('checks non-empty object', () => {
        expect(isEmpty({ a: 1 })).toBe(false);
    });

    test('checks empty array', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('checks non-empty array', () => {
        expect(isEmpty([1, 2, 3])).toBe(false);
    });

    test('checks empty string', () => {
        expect(isEmpty('')).toBe(true);
    });

    test('checks non-empty string', () => {
        expect(isEmpty('abc')).toBe(false);
    });

    test('checks null value', () => {
        expect(isEmpty(null)).toBe(true);
    });

    test('checks undefined value', () => {
        expect(isEmpty(undefined)).toBe(true);
    });

    test('checks empty Map', () => {
        expect(isEmpty(new Map())).toBe(true);
    });

    test('checks non-empty Map', () => {
        const map = new Map();
        map.set('key', 'value');
        expect(isEmpty(map)).toBe(false);
    });

    test('checks empty Set', () => {
        expect(isEmpty(new Set())).toBe(true);
    });

    test('checks non-empty Set', () => {
        const set = new Set();
        set.add(1);
        expect(isEmpty(set)).toBe(false);
    });

    test('checks if argument is prototype object', () => {
        function Foo() {}
        Foo.prototype.a = 1;
        expect(isEmpty(Foo.prototype)).toBe(false);
    });

    test('checks if argument has no own properties', () => {
        function Bar() {}
        Bar.prototype.b = 2;
        const obj = new Bar();
        expect(isEmpty(obj)).toBe(true);
    });

    test('checks empty arguments object', () => {
        (function() {
            expect(isEmpty(arguments)).toBe(true);
        })();
    });

    test('checks non-empty arguments object', () => {
        (function() {
            expect(isEmpty(arguments)).toBe(false);
        })(1, 2, 3);
    });
});