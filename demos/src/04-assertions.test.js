// Matchers

test("test obj", () => {
  const obj = { name: "Cris", age: 30 };
  expect(obj).toEqual({ name: "Cris", age: 30 });
});

// test('null', () => {
//   const a = null;
//   expect(a).toBeNull();
//   expect(a).toBeDefined();
//   expect(a).not.toBeNull();
//   // expect(a).not.toBeUndefined();
// });

// test('booleans', () => {
//   expect(true).toEqual(true);
//   expect(false).toEqual(false);

//   expect(0).toBeFalsy(false);
//   expect('').toBeFalsy(false);
//   expect(false).toBeFalsy(false);
// });

// test('string', () => {
//   expect('Cristopher').toMatch(/istop/);
// });

// test('list / array', () => {
//   const list = [1, 2, 3, 4];
//   expect(list).toContain(2);
//   expect(list).toHaveLength(4);
//   expect(list).toEqual(expect.arrayContaining([1, 2]));
// });
