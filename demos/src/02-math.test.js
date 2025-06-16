const {  sum, multiply, divide, average } = require('./02-math');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiply 3 * 2 to equal 6', () => {
  expect(multiply(3, 2)).toBe(6);
});

test('should divide', () => {
  expect(divide(8, 4)).toBe(2);
  expect(divide(10, 2)).toBe(5);
  expect(divide(12, 4)).toBe(3);
});

test('should divide for zero', () => {
  expect(divide(8, 0)).toBeNull();
});


test('should average', () => {
  expect(average(7, 6)).toBe(6.5);
});
