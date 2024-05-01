import * as React from 'react'
import { cn } from '@utils'
import styles from './index.module.css'

interface GreetingItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const GreetingItem = React.forwardRef<HTMLDivElement, GreetingItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          styles.a,
          className
        )}
        {...props}
      >
        {children} 
      </div>
    )
  }
)

GreetingItem.displayName = 'GreetingItem'

export default GreetingItem