import { Operation } from '../types'

export const add = (a: number, b: number) => a + b

export const subtract = (a: number, b: number) => a - b

export const multiply = (a: number, b: number) => a * b

export const divide = (a: number, b: number) => a / b

const performOperation = (
  operand1: number,
  operand2: number,
  operation: Operation
) => {
  switch (operation) {
    case '+':
      return add(operand1, operand2)
    case '-':
      return subtract(operand1, operand2)
    case '*':
      return multiply(operand1, operand2)
    case '/':
      if (operand2 === 0) throw new Error('Cannot divide by zero')
      return divide(operand1, operand2)
    default:
      throw new Error('Unsupported operation')
  }
}

export default performOperation
