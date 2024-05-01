// components/ui/GreetingSection.tsx
import * as React from 'react'
import { cn } from '@utils'
import GreetingItem from '../../../Items/GreetingItem'

interface GreetingSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  greetings: React.ReactNode[]
}

const GreetingSection = React.forwardRef<
  HTMLDivElement,
  GreetingSectionProps
>(({ className, greetings, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('shadow-[0_0_0_1px_rgba(255,255,255,0.14)]', className)}
      {...props}
    >
      {greetings.map((greeting, index) => (
        <GreetingItem key={index}>{greeting}</GreetingItem>
      ))}
    </div>
  )
})

GreetingSection.displayName = 'GreetingSection'

export default GreetingSection