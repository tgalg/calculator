import Button from './Button'
import Display from './Display'
import useCalculator from '../hooks/useCalculator'
import { Operation } from '../types'

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
