const add = require('./add');

describe('add', () => {
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
