Number.isInteger = undefined;
require('./index')

test('0 is an integer', () => {
  expect(Number.isInteger(0)).toBe(true);
  expect(Number.isInteger(-0)).toBe(true);

  expect(Number.isInteger(1)).toBe(true);
  expect(Number.isInteger(-1000000)).toBe(true);

  expect(Number.isInteger(Number.MAX_SAFE_INTEGER)).toBe(true);
  expect(Number.isInteger(Number.MIN_SAFE_INTEGER)).toBe(true);


  expect(Number.isInteger(0.1)).toBe(false);
  expect(Number.isInteger(Math.E)).toBe(false);

  expect(Number.isInteger(NaN)).toBe(false);
  expect(Number.isInteger(Infinity)).toBe(false);
  expect(Number.isInteger(-Infinity)).toBe(false);
  expect(Number.isInteger('10')).toBe(false);
  expect(Number.isInteger(true)).toBe(false);
  expect(Number.isInteger(false)).toBe(false);
  expect(Number.isInteger([1, 2, 3])).toBe(false);
  expect(Number.isInteger({
    a: 'a',
    b: 'b'
  })).toBe(false);

  expect(Number.isInteger(5.00)).toBe(true);
  expect(Number.isInteger(5.000000000000001)).toBe(false);
  expect(Number.isInteger(5.0000000000000001)).toBe(true);


  expect(Number.isInteger(-5.00)).toBe(true);
  expect(Number.isInteger(-5.000000000000001)).toBe(false);
  expect(Number.isInteger(-5.0000000000000001)).toBe(true);
})