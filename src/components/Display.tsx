import React from 'react'

interface DisplayProps {
  value: string | null
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div className="text-right text-5xl bg-gray-700 p-6 rounded-lg overflow-hidden overflow-ellipsis">
      {value}
    </div>
  )
}

export default Display
