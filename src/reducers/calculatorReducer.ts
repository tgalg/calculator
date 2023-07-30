import { Action, State } from '../types'
import performOperation from '../utils/operations'

const calculatorReducer = (state: State, action: Action): State => {
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

export default calculatorReducer
