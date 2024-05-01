import { DescriptionIcon } from '../../Icon/icons';
import styles from './description.module.css';
import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface DescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  content: string;
  icon?: React.ReactNode;
  iconClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
}

const Description = React.forwardRef<HTMLDivElement, DescriptionProps>(
  (
    {
      title,
      content,
      icon = <DescriptionIcon strokeWidth={1} />,
      iconClassName,
      titleClassName,
      contentClassName,
      className,
      ...props
    },
    ref,
  ) => {
    const [showTooltip, setShowTooltip] = React.useState(false);
    const tooltipRef = React.useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
      setShowTooltip(true);
    };

    const handleMouseLeave = () => {
      setShowTooltip(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Escape') {
        setShowTooltip(false);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(styles.c, className)}
        aria-describedby={showTooltip ? 'description-tooltip' : undefined}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        {...props}
      >
        <div className={styles.h}>
          <h3 className={cn(styles.t, titleClassName)}>{title}</h3>
          <span className={cn(styles.i, iconClassName)}>{icon}</span>
        </div>
        <div className={cn(styles.x, contentClassName)}>{content}</div>
        {showTooltip && (
          <div
            id="description-tooltip"
            role="tooltip"
            ref={tooltipRef}
            className={styles.tooltip}
          >
            {content}
          </div>
        )}
      </div>
    );
  },
);

Description.displayName = 'Description';

export { Description };