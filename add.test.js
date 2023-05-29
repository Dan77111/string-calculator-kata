const { describe } = require('node:test');
const add = require('./add');

describe('add - 0, 1 o 2 numeri', () => {
  test('Somma stringa vuota e si aspetta 0', () => {
    expect(add('')).toBe(0);
  });
  test('Somma stringa "1" e si aspetta 1', () => {
    expect(add('1')).toBe(1);
  });
  test('Somma stringa "1,2" e si aspetta 3', () => {
    expect(add('1,2')).toBe(3);
  });
});

describe('add - numero arbitrario di numeri', () => {
  test('Somma stringa "1,2,3" e si aspetta 6', () => {
    expect(add('1,2,3')).toBe(6);
  });
  test('Somma stringa "1,2,3,4,5" e si aspetta 15', () => {
    expect(add('1,2,3,4,5')).toBe(15);
  });
  test('Somma stringa "1,2,3,4,5,6,7,8,9,10" e si aspetta 55', () => {
    expect(add('1,2,3,4,5,6,7,8,9,10')).toBe(55);
  });
});

describe('add - newline come separatore', () => {
  test('Somma stringa "1\n2,3" e si aspetta 6', () => {
    expect(add('1\n2,3')).toBe(6);
  });
  test('Somma stringa "1\n2,3\n4,5" e si aspetta 15', () => {
    expect(add('1\n2,3\n4,5')).toBe(15);
  });
  test('Somma stringa "1\n2,3\n4,5\n6,7,8,9,10" e si aspetta 55', () => {
    expect(add('1\n2,3\n4,5\n6,7,8,9,10')).toBe(55);
  });
});

describe('add - separatore personalizzato', () => {
  test('Somma stringa "//;\n1;2" e si aspetta 3', () => {
    expect(add('//;\n1;2')).toBe(3);
  });
  test('Somma stringa "//:\n1:2:3:4" e si aspetta 10', () => {
    expect(add('//:\n1:2:3:4')).toBe(10);
  });
  test('Somma stringa "//*\n1*2\n3\n4" e si aspetta 10', () => {
    expect(add('//*\n1*2\n3\n4')).toBe(10);
  });
});

describe('add - eccezioni per i numeri negativi', () => {
  test('Somma stringa "1,-2" e si aspetta un eccezione', () => {
    expect(() => add('1,-2')).toThrow('negatives not allowed: -2');
  });
  test('Somma stringa "-1,-2,-3" e si aspetta un eccezione', () => {
    expect(() => add('-1,-2,-3')).toThrow('negatives not allowed: -1,-2,-3');
  });
  test('Somma stringa "//;\n1,-2" e si aspetta un eccezione', () => {
    expect(() => add('//;\n1;-2')).toThrow('negatives not allowed: -2');
  });
});

describe('add - ignorare i numeri >1000', () => {
  test('Somma stringa "1,2,1001" e si aspetta 3', () => {
    expect(add('1,2,1001')).toBe(3);
  });
  test('Somma stringa "//:\n1:2:1001:4" e si aspetta 7', () => {
    expect(add('//:\n1:2:1001:4')).toBe(7);
  });
  test('Somma stringa "//*\n1*2\n1001\n4" e si aspetta 7', () => {
    expect(add('//*\n1*2\n1001\n4')).toBe(7);
  });
});
