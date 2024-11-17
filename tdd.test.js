import { cap } from './capitalize';
import { revString } from './reverseString';
import { calc } from './calculator';
import { caesarCipher } from './caesar-cipher';

describe('string tests', () => {
    test('capitalize', () => {
        expect(cap('banana')).toMatch(/Banana/);
    });

    test('capitalize', () => {
        expect(cap('lion')).toMatch(/Lion/);
    });

    test('reverse string', () => {
        expect(revString('I like apples')).toMatch(/selppa ekil I/);
    });

    test('reverse string', () => {
        expect(revString('breaking bad')).toMatch(/dab gnikaerb/);
    });
});

describe('calculator test', () => {
    test('calculator add', () => {
        expect(calc.add(2, 4)).toBe(6);
    });

    test('calculator add', () => {
        expect(calc.add(2, 15)).toBe(17);
    });

    test('calculator subtract', () => {
        expect(calc.subtract(5, 2)).toBe(3);
    });

    test('calculator subtract', () => {
        expect(calc.subtract(33, 23)).toBe(10);
    });

    test('calculator divide', () => {
        expect(calc.divide(50, 2)).toBe(25);
    });

    test('calculator divide', () => {
        expect(calc.divide(120, 2)).toBe(60);
    });

    test('calculator multiply', () => {
        expect(calc.multiply(50, 2)).toBe(100);
    });

    test('calculator multiply', () => {
        expect(calc.multiply(120, 22)).toBe(2640);
    });
});

describe('caesar cipher test', () => {
    test('caesarCipher', () => {
        expect(caesarCipher('xyz', 3)).toMatch(/abc/);
    });

    test('caesarCipher case preservation', () => {
        expect(caesarCipher('HeLLo', 3)).toMatch(/KhOOr/);
    });

    test('caesarCipher case preservation', () => {
        expect(caesarCipher('Hello, World!', 3)).toMatch(/Khoor, Zruog!/);
    });

    test('caesarCipher big numbers', () => {
        expect(caesarCipher('fdasf', 49)).toMatch(/caxpc/);
    });
});
