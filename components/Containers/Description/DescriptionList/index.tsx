import * as React from 'react'
import DescriptionItem from '../../../Items/DescriptionItem'
import styles from './index.module.css'

interface DescriptionListProps extends React.HTMLAttributes<HTMLDivElement> {
  items: React.ReactNode[]
}

const DescriptionList = React.forwardRef<HTMLDivElement, DescriptionListProps>(
  ({ className, items, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`${styles.b} ${className}`}
        {...props}
      >
        {items.map((item, index) => (
          <DescriptionItem key={index}>{item}</DescriptionItem>
        ))}
      </div>
    )
  }
)

DescriptionList.displayName = 'DescriptionList'

export default DescriptionList