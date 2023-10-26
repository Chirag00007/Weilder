import React from 'react'

const loading = () => {
  return (
    <div className="relative bg-primary min-h-[90vh] w-full flex items-center justify-center">
      <div className="w-16 h-16 relative">
        <div className="absolute border-t-4 border-blue-700 border-solid rounded-full w-10 h-10 animate-spin"></div>
      </div>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  )
}

export default loading