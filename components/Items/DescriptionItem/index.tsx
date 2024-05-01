import { cn } from '../../../lib/utils';
import * as React from 'react'
import styles from './index.module.css'

interface DescriptionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const DescriptionItem = React.forwardRef<HTMLDivElement, DescriptionItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          styles.c,
          className
        )}
        style={{ fontSize: 'clamp(1rem, 0.714rem + 1.43vw, 2rem)' }}
        {...props}
      >
        {children}
      </div>
    )
  }
)

DescriptionItem.displayName = 'DescriptionItem'

export default DescriptionItem