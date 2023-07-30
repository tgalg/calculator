import performOperation, { add, subtract, multiply, divide } from './operations'

describe('Calculator Operations', () => {
  it('performs addition', () => {
    const result = performOperation(2, 3, '+')
    expect(result).toBe(5)
    expect(result).toBe(add(2, 3))
  })

  it('performs subtraction', () => {
    const result = performOperation(7, 4, '-')
    expect(result).toBe(3)
    expect(result).toBe(subtract(7, 4))
  })

  it('performs multiplication', () => {
    const result = performOperation(5, 3, '*')
    expect(result).toBe(15)
    expect(result).toBe(multiply(5, 3))
  })

  it('performs division', () => {
    const result = performOperation(10, 2, '/')
    expect(result).toBe(5)
    expect(result).toBe(divide(10, 2))
  })

  it('throws an error when trying to divide by zero', () => {
    expect(() => performOperation(10, 0, '/')).toThrow('Cannot divide by zero')
  })
})
