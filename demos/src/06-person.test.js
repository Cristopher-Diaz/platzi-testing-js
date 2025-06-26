const Person = require('./06-person.js');

// AAA
// Arrange / Given
// Act / When
// Assert / Then

describe('', () => {
  let person;
  // Arrange
  beforeEach(() => {
    person = new Person('John Doe', 70, 1.75);
  });

  test('person name should be "John Doe"', () => {
    expect(person.name).toBe('John Doe');
  });

  test('should return down', () => {
    // Arrange
    person.weight = 50;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 60;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });

})

