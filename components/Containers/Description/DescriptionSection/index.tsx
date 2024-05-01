import DescriptionList from "../DescriptionList";
import * as React from 'react'
import { cn } from '@utils'
import styles from './index.module.css';
import { Typography } from '@components/Common/Typography/typography';

interface DescriptionSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  items: React.ReactNode[]
}

const DescriptionSection = React.forwardRef<
  HTMLDivElement,
  DescriptionSectionProps
>(({ className, title, items, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        styles.a,
        className
      )}
      {...props}
    >
      <Typography
        variant="h2"
        className={styles.b}
        style={{ fontSize: 'clamp(1.5rem, 1.357rem + 0.71vw, 2.25rem)' }}
      >
        {title}
      </Typography>
      <DescriptionList items={items} />
    </div>
  )
})

DescriptionSection.displayName = 'DescriptionSection'

export default DescriptionSection