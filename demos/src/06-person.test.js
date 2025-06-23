const Person = require('./06-person.js');

describe('', () => {
  let person;
  beforeEach(() => {
    person = new Person('John Doe', 70, 1.75);
  });

  test('person name should be "John Doe"', () => {
    expect(person.name).toBe('John Doe');
  });

  test('should return down', () => {
    person.weight = 50;
    expect(person.calcIMC()).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 60;
    expect(person.calcIMC()).toBe('normal');
  });

})

