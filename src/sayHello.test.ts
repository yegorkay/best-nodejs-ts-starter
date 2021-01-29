import { sayHello } from './sayHello'

describe('sayHello', () => {
  it('returns the correct string', () => {
    const result = sayHello()
    expect(result).toBe('hello!')
  })
})
