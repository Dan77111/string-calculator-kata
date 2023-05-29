const { describe } = require('node:test');
const add = require('./add');

describe('add - First Step', () => {
  test('Somma stringa vuota e si aspetta 0', () => {
    expect(add('')).toBe(0);
  });
  test('Somma stringa "1" e si aspetta 1', () => {
    expect(add('1')).toBe(1);
  });
  test('Somma stringa "1,2" e si aspetta 3', () => {
    expect(add('1,2')).toBe(3);
  });
  test('Somma stringa "-1,1" e si aspetta 0', () => {
    expect(add('-1,1')).toBe(0);
  });
  test('Somma stringa "-3,1" e si aspetta -2', () => {
    expect(add('-3,1')).toBe(-2);
  });
});

describe('add - Second Step', () => {
  test('Somma stringa "1,2,3" e si aspetta 6', () => {
    expect(add('1,2,3')).toBe(6);
  });
  test('Somma stringa "1,2,3,4,5" e si aspetta 15', () => {
    expect(add('1,2,3,4,5')).toBe(15);
  });
  test('Somma stringa "-1,-2,-3,-4,-5" e si aspetta -15', () => {
    expect(add('-1,-2,-3,-4,-5')).toBe(-15);
  });
  test('Somma stringa "1,2,3,4,5,6,7,8,9,10" e si aspetta 55', () => {
    expect(add('1,2,3,4,5,6,7,8,9,10')).toBe(55);
  });
});

describe('add - Third Step', () => {
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

describe('add - Fourth Step', () => {
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
