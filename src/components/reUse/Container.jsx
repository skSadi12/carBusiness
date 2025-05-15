import React from 'react'
import { cn } from '../../lib/utils'

function Container({className,children}) {
  return (
    <container className={cn("max-w-[1400px] mx-auto px-5",className)}>
        {children}
    </container>
  )
}

export default Container
