// jest 02_sync
// jest global!
const Lodash = require('./Sync')
let _ = new Lodash();


describe('Lodash: compact', () => {
  let arr;
  beforeEach( () => {
    arr = [false, 42, 0, '', true, null, 'HI!']
  });
  afterAll( () => {
    _ = new Lodash();
  });

  test('should be defined ', () => {
    expect(_.compact).toBeDefined()
    expect(_.compact).not.toBeUndefined()
  })

  test('should arr add one, two', () => {
    arr.push(...['one', 'two'])
    expect(arr).toContain('one')
    expect(arr).toContain('two')
  })

  test('should remove falsy values from array', () => {
    const result = [42, true, 'HI!']
    expect(_.compact(arr)).toEqual(result)
  })

  test('should NOT contain falsy values', () => {
    expect(_.compact(arr)).not.toContain(false)
    expect(_.compact(arr)).not.toContain(0)
    expect(_.compact(arr)).not.toContain('')
    expect(_.compact(arr)).not.toContain(null)
  })
})

describe('Lodash: groupBy', () => {
  test('should be defined ', () => {
    expect(_.groupBy).toBeDefined()
    expect(_.groupBy).not.toBeUndefined()
  })
  test('should group array items by Math.floor', () => {
    const arr = [2.2, 2.4, 4.2, 3.1]
    const res = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1]
    }
    expect(_.groupBy(arr, Math.floor)).toEqual(res)
  })
  test('should groupBy items by length', () => {
    const arr = ['one', 'two', 'three']
    const res = {
      5: ['three'],
      3: ['one', 'two']
    }
    expect(_.groupBy(arr, 'length')).toEqual(res)
  })
  test('should NOT return array', () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
  })
})