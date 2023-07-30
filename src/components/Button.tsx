import React from 'react'

interface ButtonProps {
  value: string
  activeButton: string | null
  onClick: (value: string) => void
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  value,
  activeButton,
  onClick,
  className = ''
}) => {
  return (
    <button
      onClick={() => onClick(value)}
      className={`p-4 rounded-lg text-3xl ${className}
        ${value === activeButton ? 'bg-white text-orange-500' : ''}
        ${['AC', '+/-', '%'].includes(value) ? 'bg-gray-600' : ''}
        ${['+', '-', '*', '/', '='].includes(value) ? 'bg-orange-500' : ''}
        ${
          !['AC', '+/-', '%', '+', '-', '*', '/', '='].includes(value)
            ? 'bg-gray-500'
            : ''
        }
        active:scale-95 focus:outline-none`}
    >
      {value}
    </button>
  )
}

export default Button
