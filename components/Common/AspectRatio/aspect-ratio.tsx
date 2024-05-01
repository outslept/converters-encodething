import * as React from 'react';
import { cn } from '../../../lib/utils';

interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio: number;
  children: React.ReactNode;
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio, children, className, ...props }, ref) => {
    const paddingBottom = `${(1 / ratio) * 100}%`;

    return (
      <div
        ref={ref}
        className={cn('relative w-full overflow-hidden', className)}
        style={{ paddingBottom }}
        {...props}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      </div>
    );
  }
);

AspectRatio.displayName = 'AspectRatio';

export default AspectRatio;