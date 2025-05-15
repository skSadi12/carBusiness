import React from 'react'
import { cn } from '../../lib/utils'

function Button({children , className}) {
  return (
    <button className={cn("py-2 px-4 opacity-[80%] hover:opacity-[100%] transition-all delay-150 text-white bg-[#00D2FF] rounded-full", className)}>
      {children}
    </button>
  )
}

export default Button
