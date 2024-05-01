import React, { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

const progressBarStyles = cva(
  'w-fit h-2 rounded-md bg-gray-1000 overflow-hidden',
  {
    variants: {
      variant: {
        primary: 'bg-gray-1000',
        secondary: 'bg-gray-700',
        success: 'bg-blue-700',
        warning: 'bg-red-700',
        error: 'bg-amber-700',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

type ProgressBarProps = {
  id: string;
  value: number;
  percentage: number;
  maxWidth?: string;
} & VariantProps<typeof progressBarStyles>;

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ id, percentage, variant, maxWidth, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        <label htmlFor={id} className="font-medium text-sm mb-1">
          Progress
        </label>
        <div
          className={cn(
            'relative w-full bg-gray-200 rounded-md overflow-hidden',
            maxWidth ? `max-w-[${maxWidth}]` : '',
          )}
        >
          <div
            className={cn(progressBarStyles({ variant }))}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-sm text-gray-600 mt-1">{percentage}%</span>
      </div>
    );
  },
);

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;