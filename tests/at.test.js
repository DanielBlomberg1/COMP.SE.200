import at from '../functions/at.js';
describe('Function: (at.js)', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const object = { 0: 'x', 1: 'y', 2: 'z' };
    const nestedObject = { a: [{ b: { c: 3 } }, 4] };

    test('retrieves values from array using string paths', () => {
        expect(at(array, '1', '3')).toEqual(['b', 'd']);
    });
    
    test('retrieves values from array using array paths', () => {
        expect(at(array, ['0', '2', '4'])).toEqual(['a', 'c', 'e']);
    });

    test('retrieves values from object using string paths', () => {
        expect(at(object, '0', '2')).toEqual(['x', 'z']);
    });
    
    test('retrieves values from object using array paths', () => {
        expect(at(object, ['1'])).toEqual(['y']);
    });

    test('retrieves nested values using complex paths', () => {
        expect(at(nestedObject, 'a[0].b.c', 'a[1]')).toEqual([3, 4]);
    });

    test('returns undefined for non-existing paths', () => {
        expect(at(object, '3', '5')).toEqual([undefined, undefined]);
    });

    test('handles mixed valid and invalid paths', () => {
        expect(at(array, '2', '10', '0')).toEqual(['c', undefined, 'a']);
    });

    test('handles empty paths array', () => {
        expect(at(array, [])).toEqual([]);
    });

    test('handles non-array/object input', () => {
        expect(at(123, '0')).toEqual([undefined]);
        expect(at(null, '0')).toEqual([undefined]);
    });     

    test('handles no paths provided', () => {
        expect(at(array)).toEqual([]);
    });
});