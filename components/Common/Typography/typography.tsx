import * as React from 'react';
import { cn } from '../../../lib/utils';

const variantMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subheading1: 'h6',
  subheading2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'p',
  span: 'span',
};

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: keyof typeof variantMap;
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant = 'body1', as, className, ...props }, ref) => {
    const Component = as || variantMap[variant] || 'span';

    return <Component ref={ref} className={cn(className)} {...props} />;
  },
);

Typography.displayName = 'Typography';

export { Typography };
