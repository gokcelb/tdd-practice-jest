const kataGreeting = require('./kata.js')

describe('kata test suite', () => {
  it('given a name parameter returns "Hello, name."', () => {
    const result = kataGreeting.greet('Bob')
    expect(result).toEqual('Hello, Bob.')
  })

  it('given no name parameter returns "Hello, my friend."', () => {
    const result = kataGreeting.greet()
    expect(result).toEqual('Hello, my friend.')
  })

  it('given a name parameter all in uppercase returns "Hello, name!"', () => {
    const result = kataGreeting.greet('JERRY')
    expect(result).toEqual('HELLO JERRY!')
  })

  it('given a names array parameter returns "Hello, name[0] and name [1].', () => {
    const result = kataGreeting.greet(['Jill', 'Jane'])
    expect(result).toEqual('Hello, Jill and Jane.')
  })

  it('given a names array which has more than two elements returns "Hello, name[0], name[1], and name[2].', () => {
    const result = kataGreeting.greet(['Amy', 'Brian', 'Charlotte'])
    expect(result).toEqual('Hello, Amy, Brian and Charlotte.')
  })

  it('given mixed names in upper and lower case return lowercase names first and then the uppercase ones.', () => {
    const result = kataGreeting.greet(['Amy', 'BRIAN', 'Charlotte'])
    expect(result).toEqual('Hello, Amy, Charlotte. AND HELLO BRIAN!')
  })

  it('given names with comma, return them separated with and', () => {
    const result = kataGreeting.greet(['Bob', 'Charlie, Dianne'])
    expect(result).toEqual('Hello, Bob, Charlie, and Dianne.')
  })
})