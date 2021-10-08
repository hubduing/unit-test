// intro.test.js OR intro.spec.js
// npm i -D @types/jest

const {sum, nativeNull} = require('./intro')

describe("Sum function:", () => {
  test('should return sum of two values', () => {
    expect(sum(1, 3)).toBe(4)
    expect(sum(1, 3)).toEqual(4)
  })
  test("should return value currectly comparing to other values", () => {
    expect(sum(1, 2)).toBeGreaterThan(2)
    expect(sum(1, 2)).toBeGreaterThanOrEqual(3)
    expect(sum(1, 2)).toBeLessThan(100)
    expect(sum(1, 2)).toBeGreaterThanOrEqual(3)
  })
  test("should sum 2 float values correct", () => {
    expect(sum(0.3, 0.5)).toBeCloseTo(0.8)
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
  })
})
describe("NativeNull function:", () => {
  test("should tot return false value null", () => {
    expect(nativeNull()).toBe(null)
    expect(nativeNull()).toBeNull()
    expect(nativeNull()).toBeFalsy() // undefined, 0, null, ''
    expect(nativeNull()).toBeDefined()
    expect(nativeNull()).not.toBeTruthy() // not null, undefined, 0, ''
    expect(nativeNull()).not.toBeUndefined()
  })
})


