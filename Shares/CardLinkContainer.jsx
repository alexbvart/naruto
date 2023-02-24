import React from 'react'

export const CardLinkContainer = React.forwardRef(({onClick,children}, ref) => {
  return (
    <div ref={ref} onClick={onClick}>
        {children}
    </div>
  )
})
