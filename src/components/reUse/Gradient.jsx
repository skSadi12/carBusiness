import React from 'react'
import { cn } from '../../lib/utils'
function Gradient({children,className}) {
  return (
    <span className={cn("bg-gradient-to-b from-[#00D2FF] to-[#059DBE] bg-clip-text text-transparent",className)}>
      {children}
    </span>
  )
}

export default Gradient
