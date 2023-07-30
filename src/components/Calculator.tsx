import { useReducer } from 'react'
import Button from './Button'
import Display from './Display'

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

type State = {
  display: string | null
  operand: number | null
  operation: Operation | null
  activeButton: string | null
}

type Action =
  | { type: 'setOperation'; payload: Operation }
  | { type: 'setOperand'; payload: number }
  | { type: 'setActiveButton'; payload: string | null }
  | { type: 'setDisplay'; payload: string }
  | { type: 'reset' }
  | { type: 'calculate' }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setOperation':
      return { ...state, operation: action.payload }
    case 'setOperand':
      return { ...state, operand: action.payload }
    case 'setActiveButton':
      return { ...state, activeButton: action.payload }
    case 'setDisplay':
      return { ...state, display: action.payload }
    case 'reset':
      return {
        display: '0',
        operand: null,
        operation: null,
        activeButton: null
      }
    case 'calculate':
      if (state.operand !== null && state.operation) {
        try {
          const result = performOperation(
            state.operand,
            Number(state.display),
            state.operation
          )
          return {
            ...state,
            display: String(result),
            operand: null,
            operation: null,
            activeButton: null
          }
        } catch (error) {
          console.log(error)
          return {
            ...state,
            display: String(error),
            operand: null,
            operation: null,
            activeButton: null
          }
        }
      }
      return state
    default:
      throw new Error('Unsupported action type')
  }
}

const useCalculator = () => {
  const [state, dispatch] = useReducer(reducer, {
    display: '0',
    operand: null,
    operation: null,
    activeButton: null
  })

  const setOperation = (operation: Operation) =>
    dispatch({ type: 'setOperation', payload: operation })
  const setOperand = (operand: number) =>
    dispatch({ type: 'setOperand', payload: operand })
  const setActiveButton = (activeButton: string | null) =>
    dispatch({ type: 'setActiveButton', payload: activeButton })
  const setDisplay = (display: string) =>
    dispatch({ type: 'setDisplay', payload: display })
  const reset = () => dispatch({ type: 'reset' })
  const calculate = () => dispatch({ type: 'calculate' })

  return {
    state,
    setOperation,
    setOperand,
    setActiveButton,
    setDisplay,
    reset,
    calculate
  }
}

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
  const {
    state,
    setOperation,
    setOperand,
    setActiveButton,
    setDisplay,
    reset,
    calculate
  } = useCalculator()

  const handleClick = (value: string) => {
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
        setOperation(value as Operation)
        setOperand(Number(state.display))
        setActiveButton(value)
        break
      case '=':
        calculate()
        break
      case 'AC':
        reset()
        break
      case '+/-':
        setDisplay(String(Number(state.display) * -1))
        break
      case '%':
        setDisplay(String(Number(state.display) / 100))
        break
      default:
        if (value === '.' && state.display?.includes('.')) {
          return
        }
        setDisplay(
          state.display === '0' || state.activeButton
            ? value
            : state.display + value
        )
        setActiveButton(null)
    }
  }

  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
      <Display value={state.display} />
      <div className="grid grid-cols-4 gap-4 mt-8">
        {BUTTONS.map((value, index) => (
          <Button
            key={index}
            value={value}
            activeButton={state.activeButton}
            onClick={handleClick}
            className={value === '0' ? 'col-span-2' : ''}
          />
        ))}
      </div>
    </div>
  )
}

export default Calculator
