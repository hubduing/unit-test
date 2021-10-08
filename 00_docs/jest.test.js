const { execPath } = require('process');
const bestLaCroixFlavor = require('./jest');

// 1
test('лучший вкус это грейпфрут', () => {
  expect(bestLaCroixFlavor()).toBe('грейпфрут')
})

// 2
// expect.extend({
//   toBeWithinRange(received, floor, ceiling) {
//     const pass = received => floor && received <= ceiling

//     if(pass) {
//       return {
//         message: () => 
//           `expected ${received} not to be within range ${floor} - ${ceiling}`,
//         pass: true,

//       };
//     } else {
//       return {
//         message: () => 
//           `expected ${received} to be within range ${floor} - ${ceiling}`,
//         pass: false,
//       };
//     }

//   },
// });

// test('numeric rages', () => {
//   expect(100).toBeWithinRange(90, 110);
//   expect(101).not.toBeWithinRange(0, 100);
//   expect({apples: 6, bananas: 3}).toEqual({
//     apples: expect.toBeWithinRange(1, 10),
//     bananas: expect.not.toBeWithinRange(11, 20),
//   });
// });

// async

// test('данные являются арахисовым маслом', done => {
//   function callback(data){
//     try {
//       expect(data).toBe('арахисовым маслом');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }

//   fetchData(callback)
// })

// async 2

// test('the data is peanut butter', async () => {
//   const data = await fetchData();
//   expect(data).toBe('peanut butter');
// })

// test('the fetch fails with an error', async () => {
//   expect.assertions(1);
//   try {
//     await fetchData();
//   } catch (e) {
//     expect(e).toMatch('error');
//   }
// })
// before and after 

// beforeEach(() => {
//   initializeCityDatabase();
// });

// afterEach(() => {
//   clearCityDatabase();
// });

// test('city database has Vienna', () => {
//   expect(isCity('Vienna')).toBeTruthy();
// });

// test('city database has San Juan', () => {
//   expect(isCity('San Juan')).toBeTruthy();
// });

// describe

describe('outer', () => {
  console.log('describe outer-a');

  describe('describe inner 1', () => {
    console.log('describe inner 1');
    test('test 1', () => {
      console.log('test for describe inner 1');
      expect(true).toEqual(true);
    });
  });

  console.log('describe outer-b');

  test('test 1', () => {
    console.log('test for describe outer');
    expect(true).toEqual(true);
  });

  describe('describe inner 2', () => {
    console.log('describe inner 2');
    test('test for describe inner 2', () => {
      console.log('test for describe inner 2');
      expect(false).toEqual(false);
    });
  });

  console.log('describe outer-c');
});