const {  sum, multiply, divide, average } = require('./02-math');

describe('Test for Math', () => {
  describe('sum', () => {
    test('should sum 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });

    test('should sum 5 + 5 to equal 10', () => {
      expect(sum(5, 5)).toBe(10);
    });
  });

  describe('multiply', () => {
    test('should multiply 3 * 2 to equal 6', () => {
      expect(multiply(3, 2)).toBe(6);
    });

    test('should multiply 4 * 5 to equal 20', () => {
      expect(multiply(4, 5)).toBe(20);
    });
  });

  describe('divide', () => {
    test('should divide 8 / 4 to equal 2', () => {
      expect(divide(8, 4)).toBe(2);
    });

    test('should divide 10 / 2 to equal 5', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('should return null for division by zero', () => {
      expect(divide(8, 0)).toBeNull();
    });
  });

  describe('average', () => {
    test('should calculate average of 7 and 6 to equal 6.5', () => {
      expect(average(7, 6)).toBe(6.5);
    });

    test('should calculate average of 10 and 20 to equal 15', () => {
      expect(average(10, 20)).toBe(15);
    });
  });
})

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test('multiply 3 * 2 to equal 6', () => {
//   expect(multiply(3, 2)).toBe(6);
// });

// test('should divide', () => {
//   expect(divide(8, 4)).toBe(2);
//   expect(divide(10, 2)).toBe(5);
//   expect(divide(12, 4)).toBe(3);
// });

// test('should divide for zero', () => {
//   expect(divide(8, 0)).toBeNull();
// });


// test('should average', () => {
//   expect(average(7, 6)).toBe(6.5);
// });
