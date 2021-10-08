cosnt axios = require('axios')
const Ajax = require('./async')

jest.mock('axios')

describe('Ajax: echo', () => {
  test('should return value async', async () => {
    const result = await Ajax.echo('some data')
    expect(result).toBe('some data')
  })
  test('should catch error with promise', () => {
    return Ajax.echo().catch(error => {
      expect(error).toBeInstanceOf(Error)
    })
  })
  test('should error async await', async () => {
    try {
      await Ajax.echo()
    } catch (e) {
      expect(e.message).toBe('error')
    }
  })
})


describe('Ajax: GET', () => {
  let response
  let todos

  beforeEach(() => {
    todos = [
      {id: 1, title: 'Todo 1', completed: false}
    ]
    response = {
      data: {
        todos
      }
    }

  })

  test('should return data from backend', () => {
    axios.get.mockReturnValue(response) // ловим запрос аксиоса и он не делает запрос на бэкэнд!

    return Ajax.get().then(data => {
      expect(data.todos).toEqual(todos)
    })
  })
})