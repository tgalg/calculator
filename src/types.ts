export type Operation = '+' | '-' | '*' | '/'

export type State = {
  display: string | null
  operand: number | null
  operation: Operation | null
  activeButton: string | null
}

export type Action =
  | { type: 'setOperation'; payload: Operation }
  | { type: 'setOperand'; payload: number }
  | { type: 'setActiveButton'; payload: string | null }
  | { type: 'setDisplay'; payload: string }
  | { type: 'reset' }
  | { type: 'calculate' }
