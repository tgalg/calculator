import { ReactElement } from 'react'
import Calculator from './components/Calculator'

function App(): ReactElement {
  return (
    <div className="p-2 border shadow-xl border-gray-50 rounded-xl">
      <Calculator />
    </div>
  )
}

export default App
