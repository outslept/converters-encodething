import * as React from 'react';
import { cn } from '../../../lib/utils';

const badgeVariants = {
  default: 'bg-slate-100 text-slate-800',
  primary: 'bg-primary-500 text-primary-100',
  secondary: 'bg-secondary-500 text-secondary-100',
  success: 'bg-green-500 text-green-100',
  warning: 'bg-yellow-500 text-yellow-100',
  danger: 'bg-red-500 text-red-100',
};

const badgeSizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-2 text-base',
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof badgeVariants;
  size?: keyof typeof badgeSizes;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { variant = 'default', size = 'md', icon, children, className, ...props },
    ref
  ) => {
    return (
      <span
        ref={ref}
        role="status"
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium',
          badgeVariants[variant],
          badgeSizes[size],
          className
        )}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;