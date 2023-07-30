import { useReducer } from 'react'
import { Operation } from '../types'
import calculatorReducer from '../reducers/calculatorReducer'

const useCalculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, {
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

export default useCalculator
