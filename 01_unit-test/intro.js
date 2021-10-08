function expect(value) {
  return {
    toBe: exp => {
      if (value === exp) {
        console.log('Success')
      } else {
        console.error(`Value is ${value}, but expectetion is ${exp}`)
      }
    }
  }
}

const sum = (a, b) => a + b
const nativeNull = () => null

// console.log(sum(42, 0))
// node 01_unit-test/intro.js -> 42

// expect(sum(0, 40)).toBe(42)

module.exports = {sum, nativeNull}