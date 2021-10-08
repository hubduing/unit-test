class Lodash {
  compact(arr) {
    return arr.filter(value => !!value)
  }
  groupBy(arr, prop) {
    return arr.reduce((acc, e) => {
      const key = typeof prop === 'function' ? prop(e) : e[prop]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(e)
      return acc
    }, {})
  }
}

module.exports = Lodash