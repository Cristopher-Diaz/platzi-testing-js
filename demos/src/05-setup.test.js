describe('set', () => {

  beforeAll(() => {
    console.log('Running beforeAll for set');
    // Up DB
  });
//   afterAll(() => {
//     console.log('Running afterAll for set');
//     // Down DB
//   });

  test('case 1', () => {
    console.log('Running case 1');
    expect(1 + 1).toBe(2);
  });

//   test('case 2', () => {
//     console.log('Running case 2');
//     expect(1 + 5).toBe(6);
//   });

//   describe('nested set', () => {
//     test('case 3', () => {
//       console.log('Running case 3');
//       expect(1 + 2).toBe(3);
//     });

//     test('case 4', () => {
//       console.log('Running case 4');
//       expect(1 + 3).toBe(4);
//     });
//   });

});
