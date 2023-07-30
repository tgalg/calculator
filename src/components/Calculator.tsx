const BUTTONS = [
  'AC',
  '+/-',
  '%',
  '/',
  '7',
  '8',
  '9',
  '*',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '='
]

type Operation = '+' | '-' | '*' | '/'

export const add = (a: number, b: number) => a + b

export const subtract = (a: number, b: number) => a - b

export const multiply = (a: number, b: number) => a * b

export const divide = (a: number, b: number) => a / b

export const performOperation = (
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

const Calculator = () => {
  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
      <div className="grid grid-cols-4 gap-4 mt-8">
        {BUTTONS.map((value, index) => (
          <button key={index} value={value} className="p-8 bg-white" />
        ))}
      </div>
    </div>
  )
}

export default Calculator
